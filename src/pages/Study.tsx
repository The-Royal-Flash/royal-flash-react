import { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import StyleIcon from '@mui/icons-material/Style';
import { css, LinearProgress } from '@mui/material';
import { ToggleGuideCard, GhostCard, EmptyCard } from '../components';
import { STUDY_MODE } from '../constants';
import { desktopMediaQuery, mobileMediaQuery } from '../utils/mediaQueries';
import { fetchStudyQuestionListQuery } from '../queries';

const MIN_SWIPE_DISTANCE = 50;

interface MainCardProps {
	cardMode: string;
}

function Study() {
	const { quizletId, mode } = useParams();
	const studyMode = STUDY_MODE[mode as 'ALL' | 'WRONG'];
	const { data } = useQuery(
		fetchStudyQuestionListQuery(quizletId as string, studyMode),
	);

	const [step, setStep] = useState(1);
	const [cardMode, setCardMode] = useState<'question' | 'answer'>('question');
	const [togglerHovered, setTogglerHovered] = useState(false);
	const [isToggling, setIsToggling] = useState(false);
	const [touchStart, setTouchStart] = useState<null | number>(null);
	const [touchEnd, setTouchEnd] = useState(false);
	const isLeftSwipe = useRef(false);
	const lastTouch = useRef(0);

	/** 질문 or 답안 보기 누르면 카드 내용 변경 */
	const toggleCard = () => {
		setTogglerHovered(false);
		setCardMode((prev) => (prev === 'question' ? 'answer' : 'question'));
		setIsToggling(true);
	};

	/** drag/touch 이벤트에 따라 카드 swipe 로직 실행 */
	const beginSwipe = (event: React.MouseEvent | React.TouchEvent) => {
		const clientX =
			event.type === 'touchstart'
				? (event as React.TouchEvent).touches[0].clientX
				: (event as React.MouseEvent).clientX;

		setTouchStart(clientX);
	};

	/** (For mobile) touchmove 이벤트에 따라 유저의 touch 종료 지점 기록 */
	const recordTouch = (event: React.TouchEvent) => {
		lastTouch.current = event.touches[0].clientX;
	};

	/** drag/touch 이벤트로 인한 swipe 애니메이션 종료된 후의 로직  */
	const endSwipe = (event: React.MouseEvent | React.TouchEvent) => {
		if (!touchStart) return;

		const clientX =
			event.type === 'touchend'
				? lastTouch.current
				: (event as React.MouseEvent).clientX;

		if (Math.abs(touchStart - clientX) < MIN_SWIPE_DISTANCE) return;

		isLeftSwipe.current = touchStart > clientX ? true : false;

		setTimeout(() => setTouchEnd(false), 800);
		setTouchEnd(true);
		setTouchStart(null);
		setStep((prev) => prev + 1);
	};

	/** click 이벤트에 따라 카드 swipe */
	const swipeOnClick = (direction: string) => {
		isLeftSwipe.current = direction === 'incorrect' ? true : false;

		setTimeout(() => setTouchEnd(false), 800);
		setTouchEnd(true);
		setTouchStart(null);
		setStep((prev) => prev + 1);
	};

	return (
		<Container>
			<Header>
				<div>
					<ModeInfo>
						<ImportContactsIcon color="inherit" />
						<p>{studyMode === 'ALL' ? '전체' : '오답'} 학습모드</p>
					</ModeInfo>
					<h2>{data?.title}</h2>
				</div>
				<ProgressBox>
					<StyleIcon color="inherit" fontSize="large" />
					<ProgressFraction>
						<p>{step}</p>
						<p>/{data?.questionCardList.length}</p>
					</ProgressFraction>
				</ProgressBox>
			</Header>
			<ProgressBar
				variant="determinate"
				value={(step / data?.questionCardList.length!) * 100}
			/>
			<QuestionBox>
				<MainCard
					cardMode={cardMode}
					onDragStart={beginSwipe}
					onDragEnd={endSwipe}
					onTouchStart={beginSwipe}
					onTouchMove={recordTouch}
					onTouchEnd={endSwipe}
				>
					<ToggleGuideCard
						target={cardMode === 'question' ? 'answer' : 'question'}
						display={togglerHovered}
					/>
					<EmptyCard display={touchEnd || isToggling} />
					<GhostCard isWrong={isLeftSwipe.current} display={touchEnd} />
					<MainCardContents
						cardMode={cardMode}
						onTransitionEnd={() => setIsToggling(false)}
					>
						<p>
							{cardMode.slice(0, 1).toUpperCase() + cardMode.slice(1)} {step}.
						</p>
						<p>{data?.questionCardList[step - 1][cardMode]}</p>
					</MainCardContents>
				</MainCard>
				<Toggler
					onMouseOver={() => setTogglerHovered(true)}
					onMouseOut={() => setTogglerHovered(false)}
					onClick={() => toggleCard()}
				>
					<p>{cardMode === 'question' ? '답안 보기' : '질문 보기'}</p>
					<AutoStoriesIcon color="inherit" />
				</Toggler>
			</QuestionBox>
			<ControlBox>
				<IncorrectSide onClick={() => swipeOnClick('incorrect')}>
					<DragGuideContents>
						<PlaylistAddIcon color="inherit" fontSize="inherit" />
						<p>오답노트 등록</p>
					</DragGuideContents>
				</IncorrectSide>
				<UndoButton
					size="large"
					disabled={step === 1}
					onClick={() => setStep((prev) => prev - 1)}
				>
					<UndoIcon fontSize="inherit" />
				</UndoButton>
				<CorrectSide onClick={() => swipeOnClick('correct')}>
					<DragGuideContents>
						<BeenhereIcon color="inherit" fontSize="inherit" />
						<p>학습 완료</p>
					</DragGuideContents>
				</CorrectSide>
			</ControlBox>
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

const Header = styled.header`
	${mobileMediaQuery} {
		width: 100%;
	}
	${desktopMediaQuery} {
		width: 800px;
	}
	display: flex;
	justify-content: space-between;
`;

const ModeInfo = styled.div`
	color: var(--primary-color);
	font-weight: bold;
	display: flex;
	gap: 5px;
`;

const QuestionBox = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	perspective: 10000px;
	${mobileMediaQuery} {
		width: 100%;
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
	cursor: pointer;
`;

const MainCardContents = styled.div<MainCardProps>`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	transition: 0.3s;
	${({ cardMode }) =>
		cardMode === 'question'
			? css(`
        transform: rotateY(0);
      `)
			: css(`
        transform: rotateY(180deg);
      `)};

	> p:first-of-type {
		font-weight: bold;
		color: var(--primary-color);
		font-size: 20px;
	}

	> p:nth-of-type(2) {
		padding: 10px;
		font-weight: 500;
		font-size: 18px;
		color: var(--font-color);
	}
`;

const Toggler = styled.div`
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
	width: 100%;
	height: 40px;

	:hover {
		color: #eeeeee;
		background-color: #b1b1b1;
	}
`;

const ControlBox = styled.div`
	display: flex;
	justify-content: space-between;
	${mobileMediaQuery} {
		width: 100%;
	}
	${desktopMediaQuery} {
		width: 800px;
	}
`;

const DragGuideContents = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	height: 100%;
	color: #fff;
	font-weight: bold;
	font-size: 18px;
`;

const IncorrectSide = styled.div`
	width: 250px;
	border-radius: 0 100px 100px 0;
	background-color: #f05757af;
	border: 1px dashed red;
	transition: 0.1s ease-in;
	cursor: pointer;

	${mobileMediaQuery} {
		border-radius: 100px;
		width: 200px;
	}

	:hover {
		color: #eeeeee;
		background-color: #f05757cf;
	}
`;

const CorrectSide = styled.div`
	width: 250px;
	background-color: #55b855d5;
	border: 1px dashed green;
	border-radius: 100px 0 0 100px;
	transition: 0.1s ease-in;
	cursor: pointer;

	${mobileMediaQuery} {
		border-radius: 100px;
		width: 200px;
	}

	:hover {
		color: #eeeeee;
		background-color: #55b855f4;
	}
`;

const UndoButton = styled(IconButton)`
	border: 1px solid #999999;
	width: 50px;
	border-radius: 25px;
`;

const ProgressBox = styled.div`
	color: var(--primary-color);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ProgressFraction = styled.div`
	display: flex;
	margin-bottom: 10px;

	> p {
		font-weight: bold;
		font-size: 25px;
	}

	> p:nth-of-type(2) {
		color: #000;
	}
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
