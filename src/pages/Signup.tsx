import React from 'react';
import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { AuthContents } from '../components/auth';

function Signup() {
	return (
		<Background>
			<AuthBox maxWidth="sm">
				<AuthContents variant="signup" />
			</AuthBox>
		</Background>
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

export default Signup;
