import styled from '@emotion/styled';
import { css } from '@mui/material';
import { mobileMediaQuery } from '../../utils/mediaQueries';

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
	-webkit-user-select: none; /* Safari */
	-ms-user-select: none; /* IE 10 and IE 11 */
	user-select: none; /* Standard syntax */

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
		${mobileMediaQuery} {
			font-size: 16px;
		}
	}

	> p:nth-of-type(2) {
		padding: 10px;
		font-weight: 500;
		font-size: 18px;
		color: var(--font-color);
		max-height: 80%;
		overflow-y: auto;
		${mobileMediaQuery} {
			font-size: 16px;
		}
	}
`;

export default QuestionCard;
