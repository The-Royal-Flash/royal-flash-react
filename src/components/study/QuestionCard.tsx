import styled from '@emotion/styled';
import { css } from '@mui/material';

interface QuestionCardProps {
	isToggling: boolean;
	mode: string;
	step: number;
	question?: string;
}

interface ContainerProps {
	isToggling: boolean;
	cardMode: string;
}

function QuestionCard({ isToggling, mode, step, question }: QuestionCardProps) {
	return (
		<Container cardMode={mode} isToggling={isToggling}>
			<p>Question {step}.</p>
			<p>{question}</p>
		</Container>
	);
}

const Container = styled.div<ContainerProps>`
	opacity: ${({ isToggling }) => (isToggling ? 0 : 1)};
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	transition: 0.3s;
	${({ cardMode }) =>
		cardMode === 'question'
			? css(`
        transform: rotateY(0);
      `)
			: css(`
        transform: rotateY(180deg);
      `)};

	> p:first-of-type {
		font-weight: bold;
		color: var(--primary-color);
		font-size: 20px;
	}

	> p:nth-of-type(2) {
		padding: 10px;
		font-weight: 500;
		font-size: 18px;
		color: var(--font-color);
	}
`;

export default QuestionCard;
