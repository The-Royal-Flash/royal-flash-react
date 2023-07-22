import React from 'react';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import StyledBox from './styles/StyledBox';

interface RemoveQuestionCardProps {
	index: number;
	questionId: string;
	question: string;
	answer: string;
	link?: string;
	handleRemove: (questionId: string) => void;
}

function RemoveQuestionCard({
	index,
	questionId,
	question,
	answer,
	link,
	handleRemove,
}: RemoveQuestionCardProps) {
	return (
		<StyledBox>
			<ButtonWrapper>
				<RemoveButton type="button" onClick={() => handleRemove(questionId)}>
					<StyledCloseIcon />
				</RemoveButton>
			</ButtonWrapper>
			<Title>{`Question ${index + 1}`}</Title>
			<Wrapper>
				<p>{question}</p>
				<p>{answer}</p>
				<p>{link}</p>
			</Wrapper>
		</StyledBox>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	${mobileMediaQuery} {
		padding: 10px 15px 30px;
		gap: 10px;
		margin-top: 10px;
	}
	${desktopMediaQuery} {
		padding: 20px 40px 50px;
		gap: 20px;
	}
`;

const Title = styled(Typography)`
	font-weight: 500;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 1.14rem;
		padding-top: 10px;
	}
	${desktopMediaQuery} {
		font-size: 1.6rem;
		padding-top: 20px;
	}
`;

const ButtonWrapper = styled.div`
	position: relative;
	width: 100%;
`;

const RemoveButton = styled(IconButton)`
	position: absolute;
	${mobileMediaQuery} {
		top: 14px;
		right: 14px;
	}
	${desktopMediaQuery} {
		top: 20px;
		right: 20px;
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

export default RemoveQuestionCard;
