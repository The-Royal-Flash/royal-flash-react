import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import { AuthenticationGuard, Layout, UserProvider } from './components';
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
			{
				path: 'profile',
				element: (
					<AuthenticationGuard redirectTo="/login" component={Profile} />
				),
			},
			{
				path: 'quizlet',
				children: [
					{ index: true, element: <Search /> },
					{
						path: 'create',
						element: (
							<AuthenticationGuard
								redirectTo="/login"
								component={CreateQuizlet}
							/>
						),
					},
					{
						path: 'edit/:quizletId',
						element: (
							<AuthenticationGuard
								redirectTo="/login"
								component={EditQuizlet}
							/>
						),
					},
					{ path: 'detail/:quizletId', element: <QuizletDetail /> },
					{
						path: 'my-quizlet',
						element: (
							<AuthenticationGuard redirectTo="/login" component={MyQuizlet} />
						),
					},
				],
			},
		],
	},
	{ path: '/login', element: <Login /> },
	{ path: '/signup', element: <Signup /> },
]);

function App() {
	return (
		<UserProvider>
			<QueryClientProvider client={queryClient}>
				<Global styles={GlobalStyle} />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</UserProvider>
	);
}

export default App;
