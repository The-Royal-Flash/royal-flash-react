import styled from '@emotion/styled';
import { Chip, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SearchQuizletItem } from '../../types';

/** date 객체를 받아 yyyy-mm-dd 00:00 형태로 반환 */
const formatDate = (date: Date) => {
	const [yyyy, mm, dd] = [
		date.getFullYear(),
		`${date.getMonth()}`.padStart(2, '0'),
		`${date.getDay()}`.padStart(2, '0'),
	];
	const [hr, min] = [date.getHours(), date.getMinutes()];

	return {
		lastUpdatedDate: `${yyyy}-${mm}-${dd}`,
		lastUpdatedTime: `${hr}:${min}`,
	};
};

interface QuizletCardProps {
	quizlet: SearchQuizletItem;
}

function QuizletCard({ quizlet }: QuizletCardProps) {
	const {
		_id,
		description,
		title,
		tagList,
		questionCardList,
		studyLog: { numOfQuestionListToReview },
		updateAt,
	} = quizlet;

	const navigate = useNavigate();
	const totalQuestions = questionCardList.length;
	const lastNumOfCorrect = totalQuestions - numOfQuestionListToReview;
	const { lastUpdatedDate, lastUpdatedTime } = formatDate(new Date(updateAt));

	const moveToQuizletDetailPage = (_id: string) => {
		const detailPageUrl = `/quizlet/detail/${_id}`;
		navigate(detailPageUrl);
	};

	return (
		<Container onClick={() => moveToQuizletDetailPage(_id)}>
			<QuizletTitle>{title}</QuizletTitle>
			<ChipsWrapper>
				{tagList.map((tag) => (
					<StyledChip
						key={tag}
						label={tag}
						variant="outlined"
						color="primary"
					/>
				))}
			</ChipsWrapper>
			<Description>{description}</Description>
			<Data>
				<CountData>
					오답노트 <span>{numOfQuestionListToReview}</span>문항
				</CountData>
				<CountData>
					퀴즈 응시 <span>{10}</span>회
				</CountData>
				<ScoreData>
					<span>Score</span>
					<div>
						<Score>{lastNumOfCorrect}</Score>
						<Total>/{totalQuestions}</Total>
					</div>
					<LastQuizTime>
						{lastUpdatedDate} {lastUpdatedTime}
					</LastQuizTime>
				</ScoreData>
			</Data>
			<ProgressBar
				variant="determinate"
				value={(lastNumOfCorrect / totalQuestions) * 100}
			/>
		</Container>
	);
}

const Container = styled.div`
	border: 1px solid var(--box-border-color);
	width: 100%;
	padding: 15px;
	position: relative;
	cursor: pointer;
	transition: 0.1s ease-in;

	:hover {
		scale: 1.005;
	}
`;

const Description = styled.p`
	color: #999999;
	font-size: 14px;
	font-weight: light;
	padding: 5px;
	height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const QuizletTitle = styled.p`
	padding: 5px;
	font-weight: bold;
`;

const ChipsWrapper = styled.div`
	margin-top: 5px;
`;

const StyledChip = styled(Chip)`
	margin: 5px;
`;

const Data = styled.div`
	position: relative;
	display: flex;
	gap: 30px;
	margin-top: 10px;
	padding: 5px;
	align-items: end;
`;

const CountData = styled.div`
	color: gray;
	font-size: 14px;

	> span {
		color: var(--secondary-color);
		font-size: 20px;
		font-weight: bold;
	}
`;

const ScoreData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	margin-left: auto;
`;

const Score = styled.span`
	color: var(--secondary-color);
	font-size: 20px;
	font-weight: bold;
`;

const Total = styled.span`
	color: gray;
	font-size: 20px;
	font-weight: bold;
`;

const LastQuizTime = styled.span`
	color: gray;
	font-size: 10px;
	font-weight: light;
`;

const ProgressBar = styled(LinearProgress)`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	z-index: 999;
`;

export default QuizletCard;
