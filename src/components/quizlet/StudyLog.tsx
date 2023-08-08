import styled from '@emotion/styled';
import { LearningCountStatus, LearningStatus, WrongAnswerStatus } from '.';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

interface StudyLogProps {
	studyLog: {
		studyCount: number;
		numOfQuestionList: number;
		numOfQuestionListToReview: number;
		numOfQuestionListToCorrect: number;
		lastQuizDate: string;
	};
}

function StudyLog({ studyLog }: StudyLogProps) {
	return (
		<Container>
			<LearningStatus
				numOfQuestionList={studyLog.numOfQuestionList}
				numOfQuestionListToCorrect={studyLog.numOfQuestionListToCorrect}
				lastQuizDate={studyLog.lastQuizDate}
			/>
			<WrongAnswerStatus
				numOfQuestionList={studyLog.numOfQuestionList}
				numOfQuestionListToReview={studyLog.numOfQuestionListToReview}
			/>
			<LearningCountStatus studyCount={studyLog?.studyCount} />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	width: 100%;
	margin-top: 50px;
	${mobileMediaQuery} {
		flex-direction: column;
		gap: 30px;
	}
	${desktopMediaQuery} {
		flex-direction: row;
		gap: 10px;
	}
`;

export default StudyLog;
