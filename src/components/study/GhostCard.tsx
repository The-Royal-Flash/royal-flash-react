import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { mobileMediaQuery, desktopMediaQuery } from '../../utils/mediaQueries';

interface GhostCardProps {
	isWrong: boolean;
	cardMode: string;
}

interface ContainerProps {
	isWrong: boolean;
	cardMode: string;
}

interface ContentsProps {
	isWrong: boolean;
	cardMode: string;
}

function GhostCard({ isWrong, cardMode }: GhostCardProps) {
	return (
		<Container isWrong={isWrong} cardMode={cardMode}>
			<Contents isWrong={isWrong} cardMode={cardMode}>
				{isWrong ? '오답노트 등록' : '학습 완료'}
			</Contents>
		</Container>
	);
}

const swipeRight = keyframes`
  from {
    rotate: 0deg; 
  }

  50% {
    opacity: 1;
  }

  to {
    rotate: 10deg;
    left: 200px;
    top: -50px;
    opacity: 0;
  }
`;

const swipeLeft = keyframes`
  from {
    rotate: 0deg; 
  }

  50% {
    opacity: 1;
  }

  to {
    rotate: -10deg;
    left: -200px;
    top: -50px;
    opacity: 0;
  }
`;

const Container = styled.div<ContainerProps>`
	display: block;
	opacity: 0;
	transition: 0.1s ease-in;
	border: 1px solid #999999;
	border-radius: 10px 10px 0 0;
	padding: 5%;
	${mobileMediaQuery} {
		width: 100%;
		height: 400px;
	}
	${desktopMediaQuery} {
		width: 800px;
		height: 500px;
	}
	rotate: 10deg;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9999;
	cursor: pointer;
	animation: ${({ isWrong, cardMode }) =>
		isWrong
			? css`
					${cardMode === 'question' ? swipeLeft : swipeRight} 0.8s ease
			  `
			: css`
					${cardMode === 'question' ? swipeRight : swipeLeft} 0.8s ease
			  `};
`;

const Contents = styled.div<ContentsProps>`
	transition: 0.1s ease-in;
	transform: rotateY(
		${({ cardMode }) => (cardMode === 'answer' ? '180deg' : '0')}
	);
	width: 100%;
	height: 100%;
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	top: 0;
	background-color: #fff;
	border-radius: 10px 10px 0 0;
	font-size: 30px;
	font-weight: bold;
	color: ${({ isWrong }) => (isWrong ? '#f05757cf' : '#55b855d5')};
	border: ${(props) =>
		props.isWrong ? '2px solid #f05757cf' : '2px solid #55b855d5'};
`;

export default GhostCard;
