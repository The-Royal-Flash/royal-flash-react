import React from 'react';
import styled from '@emotion/styled';
import { useCheckInView } from '../../hooks';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

interface CardProps {
	active: boolean;
}

function AnimationCard() {
	const { ref, isInView } = useCheckInView(0.4, true);

	return (
		<Container ref={ref}>
			<Wrapper>
				<Card4 active={isInView}>Royal Flash</Card4>
				<Card3 active={isInView}>Royal Flash</Card3>
				<Card2 active={isInView}>Royal Flash</Card2>
				<Card1 active={isInView}>Royal Flash</Card1>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	${mobileMediaQuery} {
		transform: scale(1.2);
		height: 320px;
		margin-top: 30px;
		margin-bottom: -20px;
	}
	${desktopMediaQuery} {
		transform: scale(1);
		@media (min-width: 900px) {
			transform: scale(1.3);
		}
	}
`;

const Wrapper = styled.div`
	position: relative;
	width: 200px;
	top: 50%;
`;

const Card = styled.div`
	width: 200px;
	height: 110px;
	line-height: 110px;
	font-size: 20px;
	text-align: center;
	border: 1px solid #9cb3c6;
	border-radius: 8px;
	position: absolute;
	transition: all 1.2s ease-out;
	transition-delay: 0.2s;
	opacity: 1;
	color: white;
	box-shadow: -15px 25px 15px rgba(0, 0, 0, 0.28);
	background: linear-gradient(315deg, #5a2ebf, #617dd8, #48ace8);
`;

const Card4 = styled(Card)<CardProps>`
	transform: rotate(-15deg) skew(25deg) scale(0.8);
	${(props) =>
		props.active &&
		`transform: rotate(-15deg) skew(25deg) scale(0.7);
  `};
`;

const Card3 = styled(Card)<CardProps>`
	transform: rotate(-10deg) skew(25deg) scale(0.8);
	${(props) =>
		props.active &&
		`transform: rotate3d(-100, 100, 1, 50deg)  skew(30deg) scale(0.9) translate(20px, -50px);
  `};
`;

const Card2 = styled(Card)<CardProps>`
	transform: rotate(-12deg) skew(25deg) scale(0.8);

	${(props) =>
		props.active &&
		`transform: rotate3d(-8, 3, 5, -50deg) skew(10deg) scale(0.85) translate(60px, -120px);
  `};
`;

const Card1 = styled(Card)<CardProps>`
	transform: rotate(-8deg) skew(25deg) scale(0.8);

	${(props) =>
		props.active &&
		`transform: rotate(-15deg) skew(-3deg) scale(0.87) translate(30px, -150px);
  `};
`;

export default AnimationCard;
