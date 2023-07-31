import React from 'react';
import styled from '@emotion/styled';

interface GhostCardProps {
	display: boolean;
	isWrong: boolean;
	coordinates: { x: number; y: number };
}

interface ContainerProps {
	display: boolean;
	x: number;
	y: number;
}

interface ContentsProps {
	isWrong: boolean;
}

function GhostCard({ isWrong, display, coordinates }: GhostCardProps) {
	const { x, y } = coordinates;

	return (
		<Container display={display} x={x} y={y}>
			<Contents isWrong={isWrong}>
				{isWrong ? '오답노트 등록' : '학습 완료'}
			</Contents>
		</Container>
	);
}

const Container = styled.div<ContainerProps>`
	display: ${(props) => (props.display ? 'block' : 'none')};
	transition: 0.1s ease-in;
	border: 1px solid #999999;
	border-radius: 10px 10px 0 0;
	padding: 5%;
	height: 500px;
	width: 800px;
	rotate: 3deg;
	position: absolute;
	// 💡 TODO : x, y 좌표 계산하는 방법 따로 생각해봐야 함
	top: ${(props) => `${props.y}px`};
	left: ${(props) => `${props.x}px`};
	z-index: 9999;
	cursor: pointer;
`;

const Contents = styled.div<ContentsProps>`
	transition: 0.1s ease-in;
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
	color: ${(props) => (props.isWrong ? '#f05757cf' : '#55b855d5')};
	border: ${(props) =>
		props.isWrong ? '2px solid #f05757cf' : '2px solid #55b855d5'};
`;

/*

*/

export default GhostCard;
