import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

interface ModalProps {
	/** 모달 open */
	open: boolean;
	/** 제목 */
	title?: string;
	/** X 아이콘 버튼 클릭 핸들러 */
	onClose?: () => void;
	/** backdrop 클릭 핸들러 */
	dropClick?: () => void;
	/** children */
	children: React.ReactNode;
}

function Modal({ open, title, onClose, dropClick, children }: ModalProps) {
	return (
		<Container open={open} onClose={dropClick} maxWidth={false}>
			<Title>{title}</Title>
			{onClose && (
				<CloseButton aria-label="close" onClick={onClose}>
					<CloseButtonIcon />
				</CloseButton>
			)}
			<ContentWrapper>{children}</ContentWrapper>
		</Container>
	);
}

const Container = styled(Dialog)`
	.MuiPaper-root {
		${mobileMediaQuery} {
			min-width: calc(var(--min-width) - 20px);
			width: calc(100% - 20px);
			padding: 5px;
			border-radius: 8px;
		}
		${desktopMediaQuery} {
			min-width: calc(var(--desktop-min) - 20px);
			width: calc(100% - 20px);
			max-width: 700px;
			padding: 10px;
			border-radius: 17px;
		}
	}
`;

const Title = styled(DialogTitle)`
	color: var(--font-color);
	text-align: center;
	font-weight: 600;
	margin-top: 10px;
	${mobileMediaQuery} {
		font-size: 1.6rem;
	}
	${desktopMediaQuery} {
		font-size: 2rem;
		margin-bottom: 10px;
	}
`;

const CloseButton = styled(IconButton)`
	position: absolute;
	color: var(--footer-bg-color);
	${mobileMediaQuery} {
		right: 5px;
		top: 5px;
	}
	${desktopMediaQuery} {
		right: 12px;
		top: 12px;
	}
`;

const CloseButtonIcon = styled(CloseIcon)`
	${mobileMediaQuery} {
		font-size: 1.6rem;
	}
	${desktopMediaQuery} {
		font-size: 2rem;
	}
`;

const ContentWrapper = styled(DialogContent)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default Modal;
