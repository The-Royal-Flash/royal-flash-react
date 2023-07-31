import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Footer, Header } from './';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

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
	${mobileMediaQuery} {
		--header-height: 50px;
		--footer-height: 320px;
	}
	${desktopMediaQuery} {
		--header-height: 90px;
		--footer-height: 200px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	min-width: var(--min-width);
`;

const OutletWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: var(--min-width);
	max-width: var(--max-width);
	width: 100%;
	margin: 0 auto;
`;

export default Layout;
