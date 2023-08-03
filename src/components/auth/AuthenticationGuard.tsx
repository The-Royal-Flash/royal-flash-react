import { ComponentType, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../common';
import { fetchProfileQuery } from '../../queries';

interface AuthenticationGuardProps {
	redirectTo: string;
	component: ComponentType;
}

function AuthenticationGuard({
	redirectTo,
	component: Component,
}: AuthenticationGuardProps) {
	const { setUser } = useUserContext();
	const { isFetched, data } = useQuery(fetchProfileQuery());

	useEffect(() => {
		if (isFetched) {
			if (data?.isSuccess && data?.user) {
				setUser(data.user);
			} else {
				setUser(null);
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
