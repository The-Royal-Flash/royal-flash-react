import styled from '@emotion/styled';
import { Button } from '@mui/material';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../../utils/mediaQueries';

const AddQuestionButton = styled(Button)`
	border-radius: 100%;
	margin-top: 20px;
	padding: 0px;
	${mobileMediaQuery} {
		min-width: 2.5rem;
		width: 2.5rem;
		height: 2.5rem;
	}
	${desktopMediaQuery} {
		min-width: 3rem;
		width: 3rem;
		height: 3rem;
	}
`;

export default AddQuestionButton;
