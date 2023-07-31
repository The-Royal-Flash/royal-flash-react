import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../../mediaQueries';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	${mobileMediaQuery} {
		margin: 20px 0px;
	}
	${desktopMediaQuery} {
		margin: 50px 0px 60px;
	}
`;

export default StyledContainer;
