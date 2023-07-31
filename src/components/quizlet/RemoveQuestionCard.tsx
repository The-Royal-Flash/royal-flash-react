import React from 'react';
import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import {
	StyledBox,
	QuestionCardRemoveButton,
	QuestionCardTitle,
} from './styles';

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
			<QuestionCardRemoveButton
				handleOnClick={() => handleRemove(questionId)}
			/>
			<QuestionCardTitle>{`Question ${index + 1}`}</QuestionCardTitle>
			<Wrapper>
				<Label>문제</Label>
				<Content>{question}</Content>
				{link && (
					<>
						<Label>링크</Label>
						<LinkContent href={link} target="_blank" rel="noreferrer noopener">
							{link}
						</LinkContent>
					</>
				)}
				<Label>답안</Label>
				<Content>{answer}</Content>
			</Wrapper>
		</StyledBox>
	);
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 75px auto;
	width: 100%;
	color: var(--font-color);
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

const Label = styled.div`
	font-weight: bold;
	font-size: 1.1rem;
	user-select: none;
`;

const Content = styled.div`
	font-size: 1rem;
`;

const LinkContent = styled.a`
	font-size: 1rem;
	color: var(--primary-color);
`;

export default RemoveQuestionCard;
