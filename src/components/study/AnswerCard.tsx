import styled from '@emotion/styled';
import LanguageIcon from '@mui/icons-material/Language';

interface AnswerCardProps {
	mode: string;
	step: number;
	question?: string;
	answer?: string;
	link?: string;
}

function AnswerCard({ step, question, answer, link }: AnswerCardProps) {
	return (
		<Container>
			<Question>
				<span>Question {step}. </span>
				{question}
			</Question>
			<Answer>
				<span>A: </span>
				{answer}
			</Answer>
			{link && (
				<Link href={link} target="_blank" rel="noopener">
					<LanguageIcon color="primary" fontSize="small" />
					<URL>{link}</URL>
				</Link>
			)}
		</Container>
	);
}

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	transition: 0.3s;
	position: relative;
`;

const Question = styled.p`
	font-size: 20px;
	font-weight: bold;
	color: var(--primary-color);
	border-bottom: 1px solid #e9e9e9;

	> span {
		font-weight: bold;
		color: var(--primary-color);
		font-size: 20px;
		margin: 0;
	}
`;

const Answer = styled.p`
	font-size: 18px;

	> span {
		font-weight: bold;
		color: gray;
	}
`;

const Link = styled.a`
	display: flex;
	gap: 10px;
	align-items: center;
	font-size: 14px;
	position: absolute;
	bottom: 0;

	:hover > span {
		color: var(--primary-color);
	}
`;

const URL = styled.span`
	font-style: italic;
	color: gray;
`;

export default AnswerCard;
