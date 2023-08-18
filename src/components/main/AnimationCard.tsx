import styled from '@emotion/styled';
import { useCheckInView } from '../../hooks';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

interface CardProps {
	active: boolean;
}

function AnimationCard() {
	const { ref, isInView } = useCheckInView(0.5, true);

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
		margin-top: 60px;
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
	width: 180px;
	height: 100px;
	line-height: 100px;
	font-size: 18px;
	text-align: center;
	border: 1px solid #9cb3c6;
	border-radius: 8px;
	position: absolute;
	opacity: 1;
	color: white;
	box-shadow: -15px 25px 15px rgba(0, 0, 0, 0.28);
	background: linear-gradient(315deg, #5a2ebf, #617dd8, #48ace8);
	transition: all 1000ms linear 200ms;
	transform: translate(0px, 30px) rotate(-15deg) skew(25deg);
`;

const Card4 = styled(Card)<CardProps>`
	transform: translate(0px, 30px) rotate(-15deg) skew(25deg);
	${(props) =>
		props.active &&
		`transform: translate(0px, 30px) rotate(-18deg) skew(28deg)`};
`;

const Card3 = styled(Card)<CardProps>`
	transform: translate(4px, 30px) rotate(-15deg) skew(20deg);
	${(props) =>
		props.active &&
		`transform: translate(0px, -20px) rotate(-5deg) skew(15deg) scale(1.03)`};
`;

const Card2 = styled(Card)<CardProps>`
	transform: translate(5px, 25px) rotate(-15deg) skew(30deg);
	${(props) =>
		props.active &&
		`transform: translate(0px, -80px) rotate(-24deg) skew(0deg) scale(1.07)`};
`;

const Card1 = styled(Card)<CardProps>`
	transform: translate(0px, 20px) rotate(-15deg) skew(20deg);
	${(props) =>
		props.active &&
		`transform: translate(0px, -130px) rotate(-5deg) skew(5deg) scale(1.1)`};
`;

export default AnimationCard;
