import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { desktopMediaQuery, mobileMediaQuery } from '../../../mediaQueries';

const StyledButton = styled(Button)`
	width: 50%;
	${mobileMediaQuery} {
		font-size: 1rem;
	}
	${desktopMediaQuery} {
		font-size: 1.4rem;
	}
`;

export default StyledButton;
