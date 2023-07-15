import React from 'react';
import styled from '@emotion/styled';

interface ImageProps {
	width: number;
	height: number;
}

interface ImageButtonProps extends ImageProps {
	handleClick: () => void;
	children: React.ReactNode;
}

function ImageButton({
	width,
	height,
	handleClick,
	children,
}: ImageButtonProps) {
	return (
		<Container width={width} height={height} onClick={handleClick}>
			<Wrapper width={width} height={height}>
				{children}
			</Wrapper>
		</Container>
	);
}

const Container = styled.button<ImageProps>`
	display: flex;
	position: relative;
	cursor: pointer;
	background: none;
	border: none;
	padding: 0;
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
`;

const Wrapper = styled.div<ImageProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	color: white;
	font-size: 28px;
`;

export default ImageButton;
