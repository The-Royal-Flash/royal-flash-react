import React from 'react';
import { SlideScroll } from '../common';
import { StyledBox } from './styles';

interface SlideBoxProps {
	children: React.ReactNode;
}

function SlideBox({ children }: SlideBoxProps) {
	return (
		<SlideScroll>
			<StyledBox>{children}</StyledBox>
		</SlideScroll>
	);
}

export default SlideBox;
