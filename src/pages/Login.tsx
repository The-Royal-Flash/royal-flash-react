import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { AuthContents } from '../components/auth';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

function Login() {
	const { user } = useUserContext();

	return !user ? (
		<Background>
			<AuthBox maxWidth="sm">
				<AuthContents variant="login" />
			</AuthBox>
		</Background>
	) : (
		<Navigate to={'/'} />
	);
}

const Background = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;

const AuthBox = styled(Container)`
	border: 1px solid var(--border-color);
	border-radius: 10px;
	width: 500px;
	padding: 30px;
	min-height: 600px;
	background-color: #fff;
`;

export default Login;
