import React, { useContext } from 'react';
import { TOAST_MESSAGE, TOAST_MSG_TYPE, TOAST_TYPE } from '../constants/toast';

export interface ToastInfo {
	type: (typeof TOAST_TYPE)[keyof typeof TOAST_TYPE];
	msg_type: keyof typeof TOAST_MSG_TYPE;
}

export interface ToastType extends ToastInfo {
	id: string;
	message: (typeof TOAST_MESSAGE)[keyof typeof TOAST_MESSAGE];
}

export interface ToastContextProps {
	readonly toasts: ToastType[];
	readonly addToast: (toastInfo: ToastInfo) => void;
	readonly removeToast: (toastId: string) => void;
}

export const ToastContext = React.createContext<ToastContextProps>({
	toasts: [],
	addToast: () => null,
	removeToast: () => null,
});

export function useToastContext() {
	return useContext(ToastContext);
}
