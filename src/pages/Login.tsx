import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

function Login() {
	return (
		<Container
			maxWidth="sm"
			sx={{
				border: '1px solid var(--border-color)',
				borderRadius: '10px',
				padding: '30px',
				height: '100%',
			}}
		>
			<LogoMessageWrapper>
				<Logo src="/public/logo/royal-flash-logo.png" alt="로얄플래시 로고" />
				<WelcomeMessage>
					<span>Royal Flash</span> 팀은 당신의 내일을 응원합니다!
				</WelcomeMessage>
			</LogoMessageWrapper>
			<Box
				component="form"
				sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
				noValidate
				autoComplete="off"
			>
				<TextField
					required
					id="standard-basic"
					label="email"
					variant="standard"
				/>
				<TextField
					required
					id="standard-basic"
					label="password"
					variant="standard"
				/>
				<Stack direction="row" spacing={2}>
					<Button variant="outlined">Primary</Button>
				</Stack>
			</Box>
			<Link to={'/signup'}>
				<span>아직 회원이 아니신가요?</span>
			</Link>
		</Container>
	);
}

const LogoMessageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin-bottom: 100px;
	align-items: center;
`;

const Logo = styled.img`
	width: 100px;
	margin-bottom: 30px;
`;

const WelcomeMessage = styled.p`
	color: var(--font-color);
	size: 16px;

	> span {
		font-weight: bold;
	}
`;

export default Login;
