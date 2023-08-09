import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { AuthContents } from '../components/auth';
import { useUserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

function Signup() {
	const { user } = useUserContext();

	return !user ? (
		<Background>
			<AuthBox maxWidth="sm">
				<AuthContents variant="signup" />
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
	border: 1px solid var(--box-border-color);
	border-radius: 10px;
	width: 500px;
	padding: 30px;
	min-height: 600px;
	background-color: #fff;
`;

export default Signup;
