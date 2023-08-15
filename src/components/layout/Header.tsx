import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import { mobileMediaQuery } from '../../utils/mediaQueries';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

function Header() {
	const isMobile = useMediaQuery(mobileMediaQuery);

	return isMobile ? (
		<MobileHeader />
	) : (
		<Container>
			<Wrapper>
				<DesktopHeader />
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	display: flex;
	top: 0;
	width: 100%;
	height: var(--header-height);
	min-height: var(--header-height);
	background: white;
	border-bottom: 1px solid var(--light-gray);
	user-select: none;
	z-index: 1000;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
	min-width: var(--min-width);
	max-width: var(--max-width);
	width: calc(100% - 40px);
	margin: 0 auto;
`;

export default Header;
