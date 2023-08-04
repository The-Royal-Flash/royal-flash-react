import React from 'react';
import styled from '@emotion/styled';

interface EmptyCardProps {
	display: boolean;
}

function EmptyCard({ display }: EmptyCardProps) {
	return <Container display={display}></Container>;
}

const Container = styled.div<EmptyCardProps>`
	opacity: ${(props) => (props.display ? 1 : 0)};
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
	z-index: 9998;
	background-color: #fff;
	border-radius: 10px 10px 0 0;
`;

export default EmptyCard;
