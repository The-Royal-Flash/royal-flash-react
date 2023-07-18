import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import { Layout } from './components';
import {
	CreateQuizlet,
	EditQuizlet,
	Login,
	MyQuizlet,
	Profile,
	QuizletDetail,
	Search,
	Signup,
	Main,
} from './pages';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Main /> },
			{ path: 'profile', element: <Profile /> },
			{
				path: 'quizlet',
				children: [
					{ index: true, element: <Search /> },
					{ path: 'create', element: <CreateQuizlet /> },
					{ path: 'edit/:quizletId', element: <EditQuizlet /> },
					{ path: 'detail/:quizletId', element: <QuizletDetail /> },
					{ path: 'my-quizlet', element: <MyQuizlet /> },
				],
			},
		],
	},
	{ path: '/login', element: <Login /> },
	{ path: '/signup', element: <Signup /> },
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Global styles={GlobalStyle} />
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
