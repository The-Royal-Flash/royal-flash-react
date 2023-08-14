import { ComponentType, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../common';
import { fetchProfileQuery } from '../../queries';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../../constants/toast';
import { useToastContext } from '../../contexts/ToastContext';

interface AuthenticationGuardProps {
	redirectTo: string;
	component: ComponentType;
}

function AuthenticationGuard({
	redirectTo,
	component: Component,
}: AuthenticationGuardProps) {
	const { setUser } = useUserContext();
	const { addToast } = useToastContext();
	const { isFetched, data } = useQuery(fetchProfileQuery());

	useEffect(() => {
		if (isFetched) {
			if (data?.isSuccess && data?.user) {
				setUser(data.user);
			} else {
				setUser(null);
				addToast({
					type: TOAST_TYPE.WARNING,
					msg_type: TOAST_MSG_TYPE.NEED_AUTH,
				});
			}
		}
	}, [isFetched, data]);

	return isFetched ? (
		data?.user ? (
			<Component />
		) : (
			<Navigate to={redirectTo} />
		)
	) : (
		<Loader />
	);
}

export default AuthenticationGuard;
