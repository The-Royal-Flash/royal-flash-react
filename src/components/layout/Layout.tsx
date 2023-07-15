import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Footer, Header } from './';

function Layout() {
	return (
		<Container>
			<Wrapper>
				<Header />
				<OutletWrapper>
					<Outlet />
				</OutletWrapper>
				<Footer />
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100%;
	min-width: var(--min-width);
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	min-width: var(--min-width);
	overflow: scroll;
`;

const OutletWrapper = styled.div`
	flex: 1;
	min-width: var(--min-width);
	max-width: var(--max-width);
	margin: 0 auto;
`;

export default Layout;
