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

function Study() {
	const { addToast } = useToastContext();
	const { quizletId, mode } = useParams();
	const studyMode = mode as (typeof STUDY_MODE)[keyof typeof STUDY_MODE];
	const [step, setStep] = useState(1);
	const [isFinished, setIsFinished] = useState(false);
	// prettier-ignore
	const [questionListToCorrect, setQuestionListToCorrect] = useState<string[]>([]);
	// prettier-ignore
	const [questionListToReview, setQuestionListToReview] = useState<string[]>([]);
	const [pastIds, setPastIds] = useState<string[]>([]);

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
				questionListToReview,
				questionListToCorrect,
				mode: studyMode,
			}),
		);
	}, [questionListToCorrect, questionListToReview]);

	const { data } = useQuery(fetchStudyQuestionListQuery(quizletId, mode));

	/** 학습 완료 및 오답 등록시 다음 질문 카드로 이동 */
	const goToNextCard = (isWrong: boolean, _id: string) => {
		if (isWrong) {
			setQuestionListToReview((prevQuestionListToReview) => [
				...prevQuestionListToReview,
				_id,
			]);
		} else {
			setQuestionListToCorrect((prevQuestionListToCorrect) => [
				...prevQuestionListToCorrect,
				_id,
			]);
		}

		setPastIds((prevPastIds) => [...prevPastIds, _id]);

		if (step + 1 <= data?.questionCardList.length!) setStep((prev) => prev + 1);
		else setIsFinished(true);
	};

	/** UndoButton 클릭시 이전 카드로 이동 */
	const goToPrevCard = () => {
		let questionIdToRemove: string = '';

		if (step === data?.questionCardList.length! && isFinished) {
			setIsFinished(false);
			questionIdToRemove = pastIds.at(-1) as string;
		} else if (step - 1 >= 0) {
			setStep((prev) => prev - 1);
			questionIdToRemove = pastIds[step - 2];
		} else if (step - 1 === 0 && isFinished) {
			questionIdToRemove = pastIds[0];
		}

		setQuestionListToReview((prevQuestionListToReview) =>
			prevQuestionListToReview.filter((id) => id !== questionIdToRemove),
		);

		setQuestionListToCorrect((prevQuestionListToCorrect) =>
			prevQuestionListToCorrect.filter((id) => id !== questionIdToRemove),
		);
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
	overflow-x: hidden;
`;

const ProgressBar = styled(LinearProgress)`
	width: 100%;
	position: fixed;
	${mobileMediaQuery} {
		top: 50px;
	}
	${desktopMediaQuery} {
		top: 90px;
	}
`;

export default Study;
