import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

const QuestionCardTitle = styled(Typography)`
	font-weight: bold;
	color: var(--font-color);
	user-select: none;
	${mobileMediaQuery} {
		font-size: 1.14rem;
		padding-top: 24px;
	}
	${desktopMediaQuery} {
		font-size: 1.6rem;
		padding-top: 30px;
	}
`;

export default QuestionCardTitle;
