import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import * as Theme from '../constants';
import { Footer, Header } from './common';

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100%;
	min-width: ${Theme.MIN_WIDTH_PX};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	min-width: ${Theme.MIN_WIDTH_PX};
	overflow: scroll;
`;

const OutletWrapper = styled.div`
	flex: 1;
	min-width: ${Theme.MIN_WIDTH_PX};
	max-width: ${Theme.MAX_WIDTH_PX};
	margin: 0 auto;
`;

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

export default Layout;
