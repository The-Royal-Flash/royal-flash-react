import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { Navigate, useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { StudyHeader, Card } from '../components';
import { STUDY_MODE } from '../constants';
import { desktopMediaQuery, mobileMediaQuery } from '../utils/mediaQueries';
import { fetchStudyQuestionListQuery } from '../queries';
import { useToastContext } from '../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../constants/toast';

let questionListToReview: string[] = [];
let questionListToCorrect: string[] = [];

function Study() {
	const { addToast } = useToastContext();
	const { quizletId, mode } = useParams();
	const studyMode = mode as (typeof STUDY_MODE)[keyof typeof STUDY_MODE];
	const [step, setStep] = useState(1);
	const [isFinished, setIsFinished] = useState(false);

	if (!quizletId || !mode || !(mode in STUDY_MODE)) {
		addToast({
			type: TOAST_TYPE.WARNING,
			msg_type: TOAST_MSG_TYPE.NOT_FOUND,
		});
		return <Navigate to="/" />;
	}

	useEffect(() => {
		localStorage.setItem(
			`${quizletId}`,
			JSON.stringify({
				questionListToReview: [],
				questionListToCorrect: [],
				mode: studyMode,
			}),
		);
	}, []);

	const updateQuestionLists = () => {
		const current = JSON.parse(localStorage.getItem(`${quizletId}`)!);

		localStorage.setItem(
			`${quizletId}`,
			JSON.stringify({
				...current,
				questionListToCorrect,
				questionListToReview,
			}),
		);
	};

	const { data } = useQuery(fetchStudyQuestionListQuery(quizletId, mode));

	const goToNextCard = (isWrong: boolean, _id: string) => {
		if (isWrong) questionListToReview.push(_id);
		else questionListToCorrect.push(_id);

		if (step + 1 <= data?.questionCardList.length!) setStep((prev) => prev + 1);
		else setIsFinished(true);

		updateQuestionLists();
	};

	const goToPrevCard = (_id: string) => {
		if (step - 1 === 0) return;

		if (step === data?.questionCardList.length! && isFinished) {
			setIsFinished(false);
		} else if (step - 1 >= 0) {
			setStep((prev) => prev - 1);
		}

		questionListToReview = questionListToReview.filter((id) => id !== _id);
		questionListToCorrect = questionListToCorrect.filter((id) => id !== _id);

		updateQuestionLists();
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
				isFinished={isFinished}
				current={data?.questionCardList[step - 1]}
				studyMode={studyMode}
				quizletId={quizletId}
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
