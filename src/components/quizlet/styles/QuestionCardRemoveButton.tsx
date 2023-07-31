import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

interface QuestionCardRemoveButtonProps {
	handleOnClick: () => void;
}

const QuestionCardRemoveButton = ({
	handleOnClick,
}: QuestionCardRemoveButtonProps) => {
	return (
		<ButtonWrapper>
			<RemoveButton type="button" onClick={handleOnClick}>
				<StyledCloseIcon />
			</RemoveButton>
		</ButtonWrapper>
	);
};

const ButtonWrapper = styled.div`
	position: relative;
	width: 100%;
`;

const RemoveButton = styled(IconButton)`
	position: absolute;
	${mobileMediaQuery} {
		top: 6px;
		right: 6px;
	}
	${desktopMediaQuery} {
		top: 10px;
		right: 10px;
	}
`;

const StyledCloseIcon = styled(CloseIcon)`
	${mobileMediaQuery} {
		font-size: 1.8rem;
	}
	${desktopMediaQuery} {
		font-size: 2.2rem;
	}
`;

export default QuestionCardRemoveButton;
