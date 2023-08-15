import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Grow, Typography } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import TungstenIcon from '@mui/icons-material/Tungsten';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import { useCheckInView } from '../../hooks';

interface CardInnerProps {
	active: boolean;
}

function IntroductionStudy() {
	const { ref, isInView } = useCheckInView(0.5, true);
	const [isShownFront, setIsShownFront] = useState(true);

	const flipCard = () => {
		setIsShownFront((prevIsShownFront) => !prevIsShownFront);
	};

	useEffect(() => {
		const timerId = setInterval(() => {
			flipCard();
		}, 2000);
		return () => clearInterval(timerId);
	}, []);

	return (
		<Container>
			<FlipCard>
				<CardInner active={isShownFront}>
					<CardFront active={isShownFront}>
						<QuestionIcon />
						<CardTitle>Question</CardTitle>
						<CardContent>가장 쉽고 빠른 암기 방법은?</CardContent>
					</CardFront>
					<CardBack active={isShownFront}>
						<AnswerIcon />
						<CardTitle>Answer</CardTitle>
						<CardAnswer>
							<AnswerText>Royal Flash</AnswerText>
						</CardAnswer>
					</CardBack>
				</CardInner>
			</FlipCard>
			<TextWrapper ref={ref}>
				<Grow in={isInView} timeout={1000}>
					<Text>
						<Span>뒤집어서</Span> 외우고
					</Text>
				</Grow>
				<Grow in={isInView} timeout={2000}>
					<Text>
						<Span>뒤집어서</Span> 맞추기
					</Text>
				</Grow>
				<Grow in={isInView} timeout={3000}>
					<Text>가장 쉽고 빠르게 암기하는 방법은</Text>
				</Grow>
				<Grow in={isInView} timeout={4000}>
					<Text>
						<Span> Royal Flash</Span>
						입니다.
					</Text>
				</Grow>
			</TextWrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	${mobileMediaQuery} {
		margin-top: 80px;
		flex-direction: column;
		flex-direction: column-reverse;
		gap: 50px;
	}
	${desktopMediaQuery} {
		margin-top: 200px;
		flex-direction: row;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	gap: 8px;
	${mobileMediaQuery} {
		padding-top: 50px;
		align-items: center;
	}
	${desktopMediaQuery} {
		padding-left: 40px;
	}
`;

const Text = styled(Typography)`
	font-weight: 400;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 1.4rem;
	}
	${desktopMediaQuery} {
		font-size: 1.7rem;
	}
`;

const Span = styled.span`
	font-weight: 700;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 1.4rem;
	}
	${desktopMediaQuery} {
		font-size: 1.7rem;
	}
`;

const FlipCard = styled.div`
	background-color: transparent;
	perspective: 1000px;
	${mobileMediaQuery} {
		width: 200px;
		height: 250px;
		min-height: 250px;
	}
	${desktopMediaQuery} {
		width: 300px;
		height: 400px;
		min-height: 400px;
	}
`;

const CardInner = styled.div<CardInnerProps>`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	transform: ${({ active }) => (active ? 'rotateY(0deg)' : 'rotateY(180deg)')};
`;

const Card = styled.div<CardInnerProps>`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	-webkit-backface-visibility: hidden; /* Safari */
	backface-visibility: hidden;
	align-items: center;
	justify-content: center;
	perspective: 1000px;
	position: absolute;
	&:before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		background-size: contain;
		background-image: linear-gradient(
			100deg,
			rgba(238, 238, 238, 0) 0%,
			rgba(255, 255, 255, 0) 36%,
			rgba(255, 255, 255, 0.4) 36%,
			rgba(255, 255, 255, 0.4) 68%,
			rgba(247, 247, 247, 0) 69%,
			rgba(238, 238, 238, 0) 70%
		);
		background-repeat: no-repeat;
		transition: all 1s;
		background-position: ${({ active }) => (active ? '-300px 0px' : '300px 0')};
		pointer-events: none;
		z-index: 20;
	}
`;

const CardFront = styled(Card)`
	border: 3px solid #bdd0ec;
	background-color: #f6f7fa;
	background: linear-gradient(315deg, #f5f7fb, #cddaeb, #c8d5e7);
`;

const CardBack = styled(Card)`
	border: 3px solid #bdd0ec;
	transform: rotateY(180deg);
	background: linear-gradient(315deg, #c8d5e7, #e8eefa, #cddaeb, #c8d5e7);
`;

const CardTitle = styled.p`
	font-weight: 700;
	${mobileMediaQuery} {
		font-size: 20px;
	}
	${desktopMediaQuery} {
		font-size: 28px;
	}
`;

const CardContent = styled.div`
	color: var(--font-color);
	font-weight: 500;
	${mobileMediaQuery} {
		font-size: 17px;
		padding: 20px;
		word-break: keep-all;
		margin-top: 0px;
	}
	${desktopMediaQuery} {
		font-size: 20px;
		margin-top: 30px;
	}
`;

const CardAnswer = styled.div`
	word-break: keep-all;
	font-weight: 500;
	${mobileMediaQuery} {
		font-size: 24px;
		word-break: keep-all;
	}
	${desktopMediaQuery} {
		font-size: 30px;
		margin-top: 30px;
	}
`;

const AnswerText = styled.span`
	color: var(--primary-color);
	font-weight: 700;
	text-decoration: underline;
`;

const QuestionIcon = styled(ContactSupportIcon)`
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 70px;
	}
	${desktopMediaQuery} {
		font-size: 100px;
	}
`;

const AnswerIcon = styled(TungstenIcon)`
	color: #f1e509;
	font-size: 60px;
	padding: 2px;
	background: white;
	border-radius: 100%;
	box-shadow:
		0 0 7px #fff,
		0 0 10px #f2e994,
		0 0 21px #fff;
`;

export default IntroductionStudy;
