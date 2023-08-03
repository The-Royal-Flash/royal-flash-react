import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ToastType, ToastContext, ToastInfo } from '../contexts/ToastContext';
import { TOAST_MESSAGE } from '../constants/toast';

interface ToastProviderProps {
	children: React.ReactElement | React.ReactElement[];
}

function ToastProvider({ children }: ToastProviderProps) {
	const [toasts, setToasts] = useState<ToastType[]>([]);

	const addToast = (newToastInfo: ToastInfo) => {
		if (toasts.find(({ msg_type }) => msg_type === newToastInfo.msg_type))
			return;

		setToasts((prevToasts) => [
			...prevToasts,
			{
				id: uuid(),
				message: TOAST_MESSAGE[newToastInfo.msg_type],
				...newToastInfo,
			},
		]);
	};

	const removeToast = (toastId: string) => {
		setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
	};

	return (
		<ToastContext.Provider
			value={{
				toasts,
				addToast,
				removeToast,
			}}
		>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
