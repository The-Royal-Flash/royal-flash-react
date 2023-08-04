import { useEffect } from 'react';
import { ToastType, useToastContext } from '../../contexts/ToastContext';
import { Alert } from '@mui/material';
import styled from '@emotion/styled';

const CLOSE_DELAY_TIME = 3000;

function Toast({ id, type, message }: ToastType) {
	const { removeToast } = useToastContext();

	useEffect(() => {
		const timer = setTimeout(() => {
			removeToast(id);
			return () => clearTimeout(timer);
		}, CLOSE_DELAY_TIME);
	}, []);

	return (
		<StyledAlert variant="filled" severity={type}>
			{message}
		</StyledAlert>
	);
}

const StyledAlert = styled(Alert)`
	border-radius: 0;
`;

export default Toast;
