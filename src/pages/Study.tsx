import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { StudyHeader, Card } from '../components';
import { STUDY_MODE } from '../constants';
import { desktopMediaQuery, mobileMediaQuery } from '../utils/mediaQueries';
import { fetchStudyQuestionListQuery } from '../queries';

function Study() {
	const { quizletId, mode } = useParams();
	const studyMode = STUDY_MODE[mode as 'ALL' | 'WRONG'];
	const [step, setStep] = useState(1);
	const { data } = useQuery(
		fetchStudyQuestionListQuery(quizletId as string, studyMode),
	);

	const goToNextCard = () => {
		setStep((prev) => prev + 1);
	};

	const goToPrevCard = () => {
		if (step - 1 >= 0) setStep((prev) => prev - 1);
	};

	return (
		<Container>
			<StudyHeader
				mode={studyMode}
				step={step}
				title={data?.title}
				total={data?.questionCardList.length}
			/>
			<ProgressBar
				variant="determinate"
				value={(step / data?.questionCardList.length!) * 100}
			/>
			<Card
				goToNextCard={goToNextCard}
				goToPrevCard={goToPrevCard}
				step={step}
				current={data?.questionCardList[step - 1]}
			/>
		</Container>
	);
}

const Container = styled.div`
	padding: 50px 20px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;
`;

const ProgressBar = styled(LinearProgress)`
	width: 100%;
	position: absolute;
	${mobileMediaQuery} {
		top: 50px;
	}
	${desktopMediaQuery} {
		top: 90px;
	}
`;

export default Study;
