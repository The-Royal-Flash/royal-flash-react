import React from 'react';
import styled from '@emotion/styled';
import { useCheckInView } from '../../hooks';
import { useMediaQuery } from '@mui/material';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

interface CardProps {
	index: number;
	active: boolean;
}

interface CardWrapperProps {
	setIndex: number;
}

function AnimationCardSetList() {
	const isMobile = useMediaQuery(mobileMediaQuery);
	const { ref, isInView } = useCheckInView(isMobile ? 0.2 : 0.5);

	return (
		<Container ref={ref}>
			{Array.from({ length: 5 }).map((_, setIndex) => (
				<CardWrapper key={`cardset-${setIndex}`} setIndex={setIndex}>
					<Card active={isInView} index={1} />
					<Card active={isInView} index={2} />
					<Card active={isInView} index={3} />
					<Card active={isInView} index={4} />
				</CardWrapper>
			))}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 45px 0 40px;
	gap: 30px;

	${mobileMediaQuery} {
		margin: 10px 0 2px;
		transform: rotate(-65deg) skew(25deg) scale(0.5) translateY(-250px);
	}
	${desktopMediaQuery} {
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
	border: 1px solid var(--border-color);
	background: var(--bg-color);
	position: absolute;
	top: 50px;
	transition: all 0.7s ease-in;
	transition-delay: 0.2s;
	transform: translate(0, 0);
	opacity: 1;

	${(props) =>
		props.active &&
		`transform: translate(${12 * props.index}px, ${-12 * props.index}px);
	  opacity:${1 / (4 - props.index)}`};
`;

export default AnimationCardSetList;
