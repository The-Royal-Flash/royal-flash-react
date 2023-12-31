import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BeenhereIcon from '@mui/icons-material/Beenhere';

interface ControlBoxProps {
	swipe: (direction: string) => void;
	isFinished: boolean;
	step: number;
	goToPrevCard: () => void;
}

interface ContainerProps {
	isFinished: boolean;
}

function ControlBox({
	swipe,
	step,
	isFinished,
	goToPrevCard,
}: ControlBoxProps) {
	return (
		<Container isFinished={isFinished}>
			{!isFinished && (
				<IncorrectSide onClick={() => swipe('incorrect')}>
					<DragGuideContents>
						<PlaylistAddIcon color="inherit" fontSize="inherit" />
						<p>오답노트 등록</p>
					</DragGuideContents>
				</IncorrectSide>
			)}

			<UndoButton
				size="large"
				onClick={() => goToPrevCard()}
				disabled={step === 1 && !isFinished}
			>
				<UndoIcon fontSize="inherit" />
			</UndoButton>
			{!isFinished && (
				<CorrectSide onClick={() => swipe('correct')}>
					<DragGuideContents>
						<BeenhereIcon color="inherit" fontSize="inherit" />
						<p>학습 완료</p>
					</DragGuideContents>
				</CorrectSide>
			)}
		</Container>
	);
}

const Container = styled.div<ContainerProps>`
	display: flex;
	justify-content: ${({ isFinished }) =>
		isFinished ? 'center' : 'space-between'};

	${mobileMediaQuery} {
		width: 95%;
	}
	${desktopMediaQuery} {
		@media (max-width: 900px) {
			width: 600px;
		}
		width: 800px;
	}
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

		@media (max-width: 580px) {
			width: 120px;
			border-radius: 25px;
		}
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

		@media (max-width: 580px) {
			width: 120px;
			border-radius: 25px;
		}
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

const DragGuideContents = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	height: 100%;
	color: #fff;
	font-weight: bold;
	font-size: 18px;

	${mobileMediaQuery} {
		font-size: 16px;

		@media (max-width: 580px) {
			font-size: 22px;
			& > p {
				display: none;
			}
		}
	}
`;

export default ControlBox;
