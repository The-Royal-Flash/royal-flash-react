import React from 'react';
import styled from '@emotion/styled';
import * as Theme from '../../constants';

interface SpreadLogoProps {
	active: boolean;
}

const Container = styled.div`
	position: relative;
	left: 20px;
`;

const Card = styled.div<{
	active: boolean;
	order: number;
}>`
	display: block;
	width: 40px;
	height: 60px;
	background: white;
	color: black;
	border: 2.5px solid black;
	border-radius: 5px;
	position: absolute;
	font-size: 34px;
	font-weight: 600;
	line-height: 60px;
	text-align: center;
	top: 0;
	left: 0;
	box-shadow:
		0px 3px 1px -2px rgba(152, 152, 152, 0.2),
		0px 2px 2px 0px rgba(152, 152, 152, 0.14),
		0px 1px 5px 0px rgba(152, 152, 152, 0.12);
	transition: all 0.3s ease;

	${(props) =>
		props.active &&
		`
    transform: rotate(calc(20deg * ${props.order - 3}))
    translateY(-30px);
    transition: all 0.3s ease;
    top: 25px;
	  border: 2.5px solid ${Theme.COLOR.primary};
    color: ${Theme.COLOR.primary};
  `}
`;

function SpreadLogo({ active }: SpreadLogoProps) {
	return (
		<Container>
			<Card order={1} active={active} />
			<Card order={2} active={active} />
			<Card order={3} active={active} />
			<Card order={4} active={active} />
			<Card order={5} active={active}>
				A
			</Card>
		</Container>
	);
}

export default SpreadLogo;
