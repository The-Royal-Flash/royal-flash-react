import { AxiosError } from 'axios';
import { useRouteError } from 'react-router-dom';

function RootErrorBoundary() {
	const error = useRouteError();

	console.log('에러!', error);

	if (error instanceof AxiosError) {
		if (error.response?.status === 401 || error.response?.status === 419) {
			return <div>로그인 해주세요.</div>;
		} else if (error.response?.status === 404) {
			// TODO: Not Found Page ?
			return <div>Not Found 404</div>;
		} else if (error.response?.status === 500) {
			return <div>나중에 다시 시도해주세요.</div>;
		}
	}

	return <div>Error</div>;
}

export default RootErrorBoundary;
