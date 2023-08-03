import React from 'react';
import styled from '@emotion/styled';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import StyleIcon from '@mui/icons-material/Style';
import { LinearProgress } from '@mui/material';
import { ToggleGuideCard, GhostCard, EmptyCard } from '../components';

const MIN_SWIPE_DISTANCE = 100;

function Study() {
	// 💡 API 연동 - 학습세트 가져오기 (id로 구분)

	const [step, setStep] = React.useState(1);
	const [cardMode, setCardMode] = React.useState('question');
	const [togglerHovered, setTogglerHovered] = React.useState(false);
	const [touchStart, setTouchStart] = React.useState<null | number>(null);
	const [touchEnd, setTouchEnd] = React.useState(false);
	const isLeftSwipe = React.useRef(false);

	/* ----- 질문 or 답안 보기 누르면 카드 내용 변경 -----*/
	const toggleCard = () => {
		setTogglerHovered(false);
		setCardMode((prev) => (prev === 'question' ? 'answer' : 'question'));
	};

	const onMouseDown = (event: React.MouseEvent) => {
		setTouchStart(event.clientX);
	};

	const onMouseOut = (event: React.MouseEvent) => {
		if (!touchStart) return;
		if (Math.abs(touchStart - event.clientX) < MIN_SWIPE_DISTANCE) return;

		isLeftSwipe.current = touchStart > event.clientX ? true : false;

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
						<p>전체 학습모드</p>
					</ModeInfo>
					<h2>프론트엔드 면접대비 질문집</h2>
				</div>
				<ProgressBox>
					<StyleIcon color="inherit" fontSize="large" />
					<ProgressFraction>
						<p>22</p>
						<p>/50</p>
					</ProgressFraction>
				</ProgressBox>
			</Header>
			<ProgressBar variant="determinate" value={(22 / 50) * 100} />
			<QuestionBox>
				<MainCard onMouseDown={onMouseDown} onMouseOut={onMouseOut}>
					<ToggleGuideCard
						target={cardMode === 'question' ? 'answer' : 'question'}
						display={togglerHovered}
					/>
					<EmptyCard display={touchEnd} />
					<GhostCard isWrong={isLeftSwipe.current} display={touchEnd} />
					<MainCardContents>
						<p>Question {step}.</p>
						<p>
							질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문
							질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문
							질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문
							질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문
						</p>
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
				<IncorrectSide>
					<DragGuideContents>
						<PlaylistAddIcon color="inherit" fontSize="inherit" />
						<p>오답노트 등록</p>
					</DragGuideContents>
				</IncorrectSide>
				<UndoButton size="large" disabled={step === 1}>
					<UndoIcon fontSize="inherit" />
				</UndoButton>
				<CorrectSide>
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
	width: 800px;
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
`;

const MainCard = styled.div`
	border: 1px solid #999999;
	border-radius: 10px 10px 0 0;
	padding: 5%;
	height: 500px;
	width: 800px;
	position: relative;
	cursor: pointer;
`;

const MainCardContents = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;

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
	width: 800px;
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
	background-color: #f05757af;
	border: 1px dashed red;
	border-radius: 0 100px 100px 0;
	transition: 0.1s ease-in;
	cursor: pointer;

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
	width: 800px;
`;

export default Study;
