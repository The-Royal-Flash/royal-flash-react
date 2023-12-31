import styled from '@emotion/styled';
import LanguageIcon from '@mui/icons-material/Language';
import { mobileMediaQuery } from '../../utils/mediaQueries';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useToastContext } from '../../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../../constants/toast';

interface AnswerCardProps {
	isToggling: boolean;
	mode: string;
	step: number;
	question?: string;
	answer?: string;
	link?: string;
}

interface ContainerProps {
	isToggling: boolean;
}

function AnswerCard({
	isToggling,
	step,
	question,
	answer,
	link,
}: AnswerCardProps) {
	const { addToast } = useToastContext();

	const copyToClipboard = () => {
		const currentQuestion = `[질문 #${step}]: ${question}`;
		const currentAnswer = `[정답]: ${answer}`;
		const clipboardText = currentQuestion + '\n' + currentAnswer;

		navigator.clipboard.writeText(clipboardText);

		addToast({
			type: TOAST_TYPE.SUCCESS,
			msg_type: TOAST_MSG_TYPE.COPY_SUCCESS,
		});
	};

	return (
		<Container isToggling={isToggling}>
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
			<CopyIcon onClick={copyToClipboard} />
		</Container>
	);
}

const Container = styled.div<ContainerProps>`
	opacity: ${({ isToggling }) => (isToggling ? 0 : 1)};
	transition: 0.3s;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: relative;
	transform: rotateY(180deg);
	-webkit-user-select: none; /* Safari */
	-ms-user-select: none; /* IE 10 and IE 11 */
	user-select: none; /* Standard syntax */
`;

const Question = styled.p`
	font-size: 20px;
	font-weight: bold;
	color: var(--primary-color);
	border-bottom: 1px solid #999999;
	padding-bottom: 10px;

	${mobileMediaQuery} {
		font-size: 14px;
	}

	> span {
		font-weight: bold;
		color: var(--primary-color);
		margin: 0;
	}
`;

const Answer = styled.p`
	font-size: 18px;
	max-height: 300px;
	overflow-y: auto;

	${mobileMediaQuery} {
		font-size: 14px;
		max-height: 160px;
	}

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

const CopyIcon = styled(ContentCopyIcon)`
	display: flex;
	gap: 10px;
	align-items: center;
	font-size: 22px;
	position: absolute;
	color: #999999;
	cursor: pointer;
	transition: 0.1s ease-in;
	position: absolute;
	bottom: 0;
	right: 0;

	:hover {
		color: black;
	}
`;

export default AnswerCard;
