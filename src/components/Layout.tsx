import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './common';

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
