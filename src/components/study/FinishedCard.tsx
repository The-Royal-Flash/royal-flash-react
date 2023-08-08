import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ProgressFraction } from '../../components';
import { mobileMediaQuery } from '../../utils/mediaQueries';
import { createStudyLog } from '../../api';

interface FinishedCardProps {
	quizletId: string;
}

function FinishedCard({ quizletId }: FinishedCardProps) {
	const navigate = useNavigate();

	const { questionListToCorrect, questionListToReview, mode } = JSON.parse(
		localStorage.getItem(`${quizletId}`)!,
	);

	const correctCount = questionListToCorrect.length;
	const totalCount = questionListToCorrect.length + questionListToReview.length;

	const submitStudyLog = async (nextPage: 'wrong' | 'complete') => {
		localStorage.removeItem(`${quizletId}`);

		const nextUrl =
			nextPage === 'complete'
				? `/quizlet/detail/${quizletId}`
				: `/study/${quizletId}/WRONG`;

		const studyLogRequest = {
			quizletId,
			questionListToCorrect,
			questionListToReview,
			mode,
		};

		try {
			const res = await createStudyLog(studyLogRequest);
			console.log(res);
		} catch (error) {
			console.log(error);
		}

		navigate(nextUrl);
	};

	return (
		<Container>
			<MainMessage>수고하셨습니다!</MainMessage>
			<ScoreBox>
				<Score>
					<StyledCircularProgress variant="determinate" value={80} size={180} />
					<ProgressFraction numerator={correctCount} denominator={totalCount} />
				</Score>
				<MemorizedMessage>암기 완료</MemorizedMessage>
			</ScoreBox>
			<ButtonBox>
				<Button
					variant="contained"
					startIcon={<CreateIcon />}
					color="error"
					onClick={() => submitStudyLog('wrong')}
				>
					오답 학습하기
				</Button>
				<Button
					variant="contained"
					startIcon={<CheckCircleIcon />}
					color="primary"
					onClick={() => submitStudyLog('complete')}
				>
					학습 완료
				</Button>
			</ButtonBox>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 100%;
`;

const MainMessage = styled.p`
	font-weight: bold;
	font-size: 25px;
`;

const MemorizedMessage = styled.p`
	font-weight: bold;
	font-size: 20px;
`;

const ScoreBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;

const Score = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 180px;
	min-width: 180px;
`;

const ButtonBox = styled.div`
	display: flex;
	gap: 20px;

	> button {
		font-weight: bold;
		font-size: 18px;
		min-width: 200px;

		${mobileMediaQuery} {
			font-size: 14px;
			min-width: 120px;
		}
	}
`;

const StyledCircularProgress = styled(CircularProgress)`
	position: absolute;
`;

export default FinishedCard;
