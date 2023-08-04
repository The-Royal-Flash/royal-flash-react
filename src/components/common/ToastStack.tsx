import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { createPortal } from 'react-dom';
import { useToastContext } from '../../contexts/ToastContext';
import { Toast } from '.';

function ToastStack() {
	const { toasts } = useToastContext();

	return (
		<>
			{toasts.length > 0 &&
				createPortal(
					<ToastWrapper>
						{toasts.map((toast) => (
							<Toast key={toast.id} {...toast} />
						))}
					</ToastWrapper>,
					document.body,
				)}
		</>
	);
}

const ToastWrapper = styled(Stack)`
	position: fixed;
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
	bottom: 0px;
`;

export default ToastStack;
