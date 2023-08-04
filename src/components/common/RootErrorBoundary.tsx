import axios, { AxiosError } from 'axios';
import { Navigate, useRouteError } from 'react-router-dom';
import { useToastContext } from '../../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../../constants/toast';

function RootErrorBoundary() {
	const error = useRouteError();
	const { addToast } = useToastContext();

	console.error('에러', error);

	if (axios.isAxiosError(error)) {
		if (error.response?.status === 401 || error.response?.status === 419) {
			addToast({
				type: TOAST_TYPE.WARNING,
				msg_type: TOAST_MSG_TYPE.NEED_AUTH,
			});
			return <Navigate to={'/login'} />;
		} else if (error.response?.status === 404) {
			// TODO: Not Found Page ?
			addToast({
				type: TOAST_TYPE.WARNING,
				msg_type: TOAST_MSG_TYPE.NOT_FOUND,
			});
			return <Navigate to={'/'} />;
		} else if (error.response?.status === 500) {
			addToast({
				type: TOAST_TYPE.INFO,
				msg_type: TOAST_MSG_TYPE.SERVER_ERROR,
			});
			return <Navigate to={'/'} />;
		}
	}

	addToast({
		type: TOAST_TYPE.INFO,
		msg_type: TOAST_MSG_TYPE.SERVER_ERROR,
	});
	return <Navigate to={'/'} />;
}

export default RootErrorBoundary;
