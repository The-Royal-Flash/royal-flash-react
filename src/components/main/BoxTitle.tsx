import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

const BoxTitle = styled(Typography)`
	font-weight: 600;
	word-break: keep-all;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 1.4rem;
	}
	${desktopMediaQuery} {
		font-size: 2rem;
	}
`;

export default BoxTitle;
