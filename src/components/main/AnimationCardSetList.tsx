import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

interface AnimationCardSetListProps {
	inView: boolean;
}

interface CardProps {
	index: number;
	active: boolean;
}

interface CardWrapperProps {
	setIndex: number;
}

function AnimationCardSetList({ inView }: AnimationCardSetListProps) {
	return (
		<Wrapper>
			{Array.from({ length: 5 }).map((_, setIndex) => (
				<CardWrapper key={`cardset-${setIndex}`} setIndex={setIndex}>
					<Card active={inView} index={1} />
					<Card active={inView} index={2} />
					<Card active={inView} index={3} />
					<Card active={inView} index={4} />
				</CardWrapper>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;

	${mobileMediaQuery} {
		margin: 10px 0 2px;
		transform: rotate(-65deg) skew(25deg) scale(0.5) translateY(-250px);
	}
	${desktopMediaQuery} {
		margin: 100px 0 80px;
		transform: rotate(-65deg) skew(25deg) scale(0.8) translateY(-250px);
	}
`;

const CardWrapper = styled.div<CardWrapperProps>`
	position: relative;
	width: 200px;
	transform: ${(props) => `translateY(calc(100px * ${props.setIndex}))`};
`;

const Card = styled.div<CardProps>`
	width: 130px;
	height: 80px;
	border: 1px solid #4e79c5;
	border-radius: 5px;
	background: #769de1;
	position: absolute;
	top: 50px;
	transition: all 0.7s ease-in;
	transition-delay: 0.2s;
	transform: translate(0, 0);
	opacity: 1;

	${(props) =>
		props.active &&
		`transform: translate(${12 * props.index}px, ${-12 * props.index}px);
	  opacity:${1 / (5 - props.index)}`};
`;

export default AnimationCardSetList;
