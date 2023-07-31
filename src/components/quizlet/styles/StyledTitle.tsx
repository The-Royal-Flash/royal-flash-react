import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

const StyledTitle = styled(Typography)`
	font-weight: 700;
	word-break: keep-all;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 1.6rem;
	}
	${desktopMediaQuery} {
		font-size: 2rem;
	}
`;

export default StyledTitle;
