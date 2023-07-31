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

function Study() {
	const [step, setStep] = React.useState(1);
	const [cardMode, setCardMode] = React.useState('question');
	// 학습세트 가져오기 (id로 구분)

	return (
		<Container>
			<Header>
				<ModeInfo>
					<ImportContactsIcon color="inherit" />
					<p>전체 학습모드</p>
				</ModeInfo>
				<h2>프론트엔드 면접대비 질문집</h2>
			</Header>
			<QuestionBox>
				<MainCard>
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
				<ToggleCard>
					답안 보기
					<AutoStoriesIcon color="inherit" />
				</ToggleCard>
			</QuestionBox>
			<ControlBox>
				<IncorrectSide>
					<DragGuideContents>
						<PlaylistAddIcon color="inherit" fontSize="inherit" />
						<p>오답노트 등록</p>
					</DragGuideContents>
				</IncorrectSide>
				<UndoButton size="large">
					<UndoIcon fontSize="inherit" />
				</UndoButton>
				<CorrectSide>
					<DragGuideContents>
						<BeenhereIcon color="inherit" fontSize="inherit" />
						<p>학습 완료</p>
					</DragGuideContents>
				</CorrectSide>
			</ControlBox>
			<ProgressBox>
				<StyleIcon color="inherit" fontSize="large" />
				<ProgressFraction>
					<p>22</p>
					<p>/50</p>
				</ProgressFraction>
				<ProgressBar variant="determinate" value={(22 / 50) * 100} />
			</ProgressBox>
		</Container>
	);
}

const Container = styled.div`
	padding: 50px 20px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;

	/* Unconfirmed properties */
	border: 1px dashed red;
`;

const Header = styled.header`
	width: 95%;
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

	/* Unconfirmed properties */
	height: 500px;
	width: 800px;
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

	/* Unconfirmed properties */
	border: 1px solid red;
`;

const ToggleCard = styled.div`
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

	:hover {
		color: #eeeeee;
	}

	/* Unconfirmed properties */
	width: 95%;
	height: 40px;
`;

const ControlBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 95%;
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
`;

const CorrectSide = styled.div`
	width: 250px;
	background-color: #55b855d5;
	border: 1px dashed green;
	border-radius: 100px 0 0 100px;
`;

const UndoButton = styled(IconButton)`
	border: 1px solid #999999;
	width: 50px;
	border-radius: 25px;
`;

const ProgressBox = styled.div`
	border: 1px dashed red;
	color: var(--primary-color);
	width: 95%;
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
	z-index: 999;
`;

export default Study;
