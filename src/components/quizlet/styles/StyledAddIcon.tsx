import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../../mediaQueries';

import AddIcon from '@mui/icons-material/Add';

const StyledAddIcon = styled(AddIcon)`
	padding: 0px;
	${mobileMediaQuery} {
		font-size: 1.3rem;
	}
	${desktopMediaQuery} {
		font-size: 1.7rem;
	}
`;

export default StyledAddIcon;
