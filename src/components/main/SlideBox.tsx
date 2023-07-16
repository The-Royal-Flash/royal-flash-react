import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import { SlideScroll } from '../common';

interface SlideBoxProps {
	children: React.ReactNode;
}

function SlideBox({ children }: SlideBoxProps) {
	return (
		<SlideScroll>
			<Wrapper>{children}</Wrapper>
		</SlideScroll>
	);
}

const Wrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 340px;
	background: var(--light-bg-color);
	overflow: hidden;
	${mobileMediaQuery} {
		margin: 30px 0;
		padding: 40px 15px 30px;
		border-radius: 5px;
		width: calc(100% - 40px);
	}
	${desktopMediaQuery} {
		width: calc(100% - 80px);
		margin-top: 50px;
		padding: 50px 40px;
		border-radius: 20px;
	}
`;

export default SlideBox;
