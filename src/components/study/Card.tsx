import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import { css } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { MIN_SWIPE_DISTANCE } from '../../constants';
import {
	GhostCard,
	EmptyCard,
	ControlBox,
	AnswerCard,
	QuestionCard,
	FinishedCard,
} from '.';

interface CardProps {
	goToNextCard: (isWrong: boolean, _id: string) => void;
	goToPrevCard: () => void;
	step: number;
	isFinished: boolean;
	quizletId: string;
	current?: {
		_id: string;
		question: string;
		answer: string;
		link?: string;
	};
}

interface MainCardProps {
	cardMode: string;
}

interface TogglerProps {
	isFinished: boolean;
}

function Card({
	goToNextCard,
	goToPrevCard,
	isFinished,
	step,
	current,
	quizletId,
}: CardProps) {
	const [swipeStartX, setSwipeStartX] = useState<null | number>(null);
	const [isSwiping, setIsSwiping] = useState(false);
	const [isToggling, setIsToggling] = useState(false);
	const [cardMode, setCardMode] = useState<'question' | 'answer'>('question');
	const lastTouch = useRef(0);
	const isLeftSwipe = useRef(false);
	const contentRef = useRef<null | HTMLDivElement>(null);

	/** 질문 or 답안 보기 누르면 카드 내용 변경 */
	const toggleCard = () => {
		if (isToggling || isFinished) return;

		setCardMode((prev) => (prev === 'question' ? 'answer' : 'question'));
		setIsToggling(true);
	};

	/** 카드 toggle transition 종료 후 isToggling 상태 false로 변경 */
	const displayCardText = () => {
		setIsToggling(false);
	};

	/** (For mobile) touchmove 이벤트에 따라 유저의 touch 종료 지점 기록 */
	const recordTouch = (event: React.TouchEvent) => {
		lastTouch.current = event.touches[0].clientX;
	};

	/** mousedown/touch 이벤트에 따라 카드 swipe 로직 실행 */
	const beginSwipe = (event: React.MouseEvent | React.TouchEvent) => {
		if (isFinished || isSwiping) return;

		const clientX =
			event.type === 'touchstart'
				? (event as React.TouchEvent).touches[0].clientX
				: (event as React.MouseEvent).clientX;

		setSwipeStartX(clientX);
	};

	/** mousedown/touch 이벤트로 인한 swipe 애니메이션 종료된 후의 로직  */
	const endSwipe = (event: React.MouseEvent | React.TouchEvent) => {
		if (!swipeStartX) return;

		const selectedText = window.getSelection()?.toString();
		if (selectedText) return;

		const clientX =
			event.type === 'touchend'
				? lastTouch.current
				: (event as React.MouseEvent).clientX;

		if (Math.abs(swipeStartX - clientX) < MIN_SWIPE_DISTANCE) return;

		isLeftSwipe.current = swipeStartX > clientX ? true : false;

		setIsSwiping(true);
		setSwipeStartX(null);
		goToNextCard(isLeftSwipe.current, current?._id as string);
		setTimeout(() => setIsSwiping(false), 800);
	};

	/** click 이벤트에 따라 카드 swipe */
	const swipeOnClick = (direction: string) => {
		if (isSwiping) return;

		isLeftSwipe.current = direction === 'incorrect' ? true : false;

		setIsSwiping(true);
		setSwipeStartX(null);
		goToNextCard(isLeftSwipe.current, current?._id as string);
		setTimeout(() => setIsSwiping(false), 800);
	};

	return (
		<Container onMouseUp={endSwipe} onTouchEnd={endSwipe}>
			<CardContainer ref={contentRef}>
				<MainCard
					onTransitionEnd={displayCardText}
					cardMode={cardMode}
					onMouseDown={beginSwipe}
					onTouchStart={beginSwipe}
					onTouchMove={recordTouch}
				>
					{isSwiping && <EmptyCard />}
					{isSwiping && (
						<GhostCard isWrong={isLeftSwipe.current} cardMode={cardMode} />
					)}
					{isFinished ? (
						<FinishedCard quizletId={quizletId} cardMode={cardMode} />
					) : cardMode === 'answer' ? (
						<AnswerCard
							isToggling={isToggling}
							mode={cardMode}
							step={step}
							question={current?.question}
							answer={current?.answer}
							link={current?.link}
						/>
					) : (
						<QuestionCard
							isToggling={isToggling}
							mode={cardMode}
							step={step}
							question={current?.question}
						/>
					)}
				</MainCard>
				<Toggler onClick={() => toggleCard()} isFinished={isFinished}>
					{!isFinished && (
						<>
							<p>{cardMode === 'question' ? '답안 보기' : '질문 보기'}</p>
							<AutoStoriesIcon color="inherit" />
						</>
					)}
				</Toggler>
			</CardContainer>
			<ControlBox
				goToPrevCard={() => goToPrevCard()}
				swipe={swipeOnClick}
				isFinished={isFinished}
				step={step}
			/>
		</Container>
	);
}

const Container = styled.div`
	width: 90vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`;

const CardContainer = styled.main`
	perspective: 10000px;
	display: flex;
	flex-direction: column;
	align-items: center;

	${mobileMediaQuery} {
		width: 95%;
	}
`;

const MainCard = styled.div<MainCardProps>`
	border: 1px solid #999999;
	transition: 0.6s;
	padding: 5%;
	height: 500px;
	backface-visibility: visible;
	border-radius: 10px 10px 0 0;

	${mobileMediaQuery} {
		width: 100%;
		height: 400px;
	}
	${desktopMediaQuery} {
		@media (max-width: 900px) {
			width: 600px;
		}
		width: 800px;
		height: 500px;
	}
	${({ cardMode }) =>
		cardMode === 'question'
			? css(`
        transform: rotateY(0);
      `)
			: css(`
        transform: rotateY(180deg);
      `)};
	transform-style: preserve-3d;
	position: relative;
`;

const Toggler = styled.div<TogglerProps>`
	background-color: #999999;
	border-radius: 0 0 10px 10px;
	color: #fff;
	display: flex;
	justify-content: end;
	align-items: center;
	padding: 0 20px;
	gap: 10px;
	font-weight: 500;
	cursor: pointer;
	transition: 0.1s ease-in;
	height: 40px;
	${mobileMediaQuery} {
		width: 100%;
	}
	${desktopMediaQuery} {
		@media (max-width: 900px) {
			width: 600px;
		}

		width: 800px;
	}

	:hover {
		${({ isFinished }) =>
			!isFinished
				? css`
						color: #eeeeee;
						background-color: #b1b1b1;
				  `
				: ''}
	}
`;

export default Card;
