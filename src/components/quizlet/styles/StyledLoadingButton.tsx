import styled from '@emotion/styled';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

function StyledLoadingButton() {
	return (
		<Container
			name="로딩중"
			loading
			loadingPosition="start"
			startIcon={<SaveIcon />}
			variant="contained"
		>
			Loading...
		</Container>
	);
}

const Container = styled(LoadingButton)`
	width: 50%;
	text-transform: none;
	background-color: #cccccc;
	${mobileMediaQuery} {
		font-size: 1rem;
	}
	${desktopMediaQuery} {
		font-size: 1.4rem;
	}
`;

export default StyledLoadingButton;
