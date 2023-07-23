import styled from '@emotion/styled';
import { Box } from '@mui/material';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

const StyledBox = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: calc(var(--min-width) - 40px);
	max-width: 800px;
	width: calc(100vw - 40px);
	background: var(--light-bg-color);
	overflow: hidden;
	box-shadow:
		0 0 4px rgba(0, 0, 0, 0.1),
		0 3px 7px rgba(0, 0, 0, 0.15),
		0 2px 5px rgba(0, 0, 0, 0.17);
	${mobileMediaQuery} {
		margin-top: 30px;
		border-radius: 5px;
	}
	${desktopMediaQuery} {
		margin-top: 40px;
		border-radius: 20px;
	}
`;

export default StyledBox;
