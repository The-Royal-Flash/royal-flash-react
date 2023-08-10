import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import { useInView } from 'react-intersection-observer';

interface CardProps {
	index: number;
	active: boolean;
}

function AnimationCardSetList() {
	const [ref, inView] = useInView({ threshold: 0.2 });

	const cardNames = ['영단어', '한국사', '면접질문', 'React', '헌법'];

	return (
		<Container ref={ref}>
			<Wrapper>
				{cardNames.map((name) => (
					<CardSetWrapper key={`cardset-${name}`}>
						<CardWrapper>
							<Card active={inView} index={1} />
						</CardWrapper>
						<CardWrapper>
							<Card active={inView} index={2} />
						</CardWrapper>
						<CardWrapper>
							<Card active={inView} index={3} />
						</CardWrapper>
						<CardWrapper>
							<Card active={inView} index={4}>
								{name}
							</Card>
						</CardWrapper>
					</CardSetWrapper>
				))}
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	${mobileMediaQuery} {
		height: 170px;
	}
	${desktopMediaQuery} {
		height: 250px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;

	${mobileMediaQuery} {
		width: 100%;
	}
	${desktopMediaQuery} {
		margin: 0;
		width: 80%;
	}
`;

const CardSetWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CardWrapper = styled.div`
	position: relative;
	${mobileMediaQuery} {
		@media (max-width: 500px) {
			transform: skew(-10deg) scale(0.6) translateY(-30px) translateX(5px);
		}
		transform: skew(-10deg) scale(0.7) translateY(-30px) translateX(5px);
	}
	${desktopMediaQuery} {
		@media (max-width: 800px) {
			transform: skew(-10deg) scale(0.7) translateY(-30px) translateX(10px);
		}
		@media (max-width: 1000px) {
			transform: skew(-10deg) scale(0.9) translateY(-30px) translateX(10px);
		}
		@media (min-width: 1000px) {
			transform: skew(-10deg) scale(1.1) translateY(-30px) translateX(10px);
		}
	}
`;

const Card = styled.div<CardProps>`
	width: 80px;
	height: 130px;
	border: 1px solid #0164ff;
	border-radius: 5px;
	background: linear-gradient(315deg, #0026e7, #617dd8, #48ace8);
	position: absolute;
	transition: all 0.7s ease-in;
	transition-delay: 0.2s;
	opacity: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	font-weight: 500;
	color: white;
	${(props) =>
		props.active &&
		`transform: translate(${-12 * props.index}px, ${-12 * props.index}px);
	  opacity:${1 / (5 - props.index)}`};
`;

export default AnimationCardSetList;
