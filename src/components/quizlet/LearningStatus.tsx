import styled from '@emotion/styled';
import { StatusContainer } from './styles';
import { LinearProgress, Typography } from '@mui/material';
import { formatDate } from '../../utils/dateFormat';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

interface LearningStatusProps {
	numOfQuestionList: number;
	numOfQuestionListToCorrect: number;
	lastQuizDate: string;
}

function LearningStatus({
	numOfQuestionList,
	numOfQuestionListToCorrect,
	lastQuizDate,
}: LearningStatusProps) {
	return (
		<StatusContainer>
			<Container>
				<LabelWrapper>
					<Label>학습 현황</Label>
					<LastDate>{formatDate(lastQuizDate)}</LastDate>
				</LabelWrapper>
				<ScoreWrapper>
					<CorrectQuestion>{numOfQuestionListToCorrect}</CorrectQuestion>
					<AllQuestion>/{numOfQuestionList}</AllQuestion>
				</ScoreWrapper>
			</Container>
			<ProgressWrapper>
				<StatusProgressBar
					variant="determinate"
					value={(numOfQuestionListToCorrect / numOfQuestionList) * 100}
				/>
			</ProgressWrapper>
		</StatusContainer>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: calc(100% - 8px);
	${mobileMediaQuery} {
		height: 100px;
		padding: 0 30px;
	}
	${desktopMediaQuery} {
		padding: 0 15px;
		@media (min-width: 900px) {
			padding: 0 10%;
		}
	}
`;

const ProgressWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 10px;
	border-radius: 8px;
	overflow: hidden;
`;

const StatusProgressBar = styled(LinearProgress)`
	position: absolute;
	width: 100%;
	height: 8px;
	bottom: 0;
`;

const LabelWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Label = styled(Typography)`
	font-size: 1.2rem;
	font-weight: 600;
	${mobileMediaQuery} {
		font-size: 1.4rem;
	}
	${desktopMediaQuery} {
		font-size: 1.3rem;
		@media (min-width: 900px) {
			font-size: 1.6rem;
		}
	}
`;

const LastDate = styled.div`
	color: #959595;
	${mobileMediaQuery} {
		font-size: 0.7rem;
	}
	${desktopMediaQuery} {
		font-size: 0.5rem;
		@media (min-width: 900px) {
			font-size: 0.6rem;
		}
	}
`;

const ScoreWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: baseline;
	gap: 3px;
	margin-top: -4px;
`;

const CorrectQuestion = styled.div`
	font-size: 2.9rem;
	font-weight: 500;
	color: var(--card-color);
`;

const AllQuestion = styled.div`
	font-size: 1.5rem;
	font-weight: 500;
	color: var(--footer-bg-color);
`;

export default LearningStatus;
