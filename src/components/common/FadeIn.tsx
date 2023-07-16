import styled from '@emotion/styled';
import { Fade } from '@mui/material';
import React from 'react';

interface ContainerProps {
	index: number;
}

interface FadeInProps extends ContainerProps {
	children: React.ReactElement;
}

function FadeIn({ index, children }: FadeInProps) {
	return (
		<Container in timeout={1000 * index} index={index}>
			{children}
		</Container>
	);
}

const Container = styled(Fade)<ContainerProps>`
	transition-delay: ${({ index }) => `${500 * index}ms`};
`;

export default FadeIn;
