import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

function Login() {
	return (
		<Background fixed>
			<LogInBox maxWidth="sm">
				<LogoMessageWrapper>
					<Logo src="/public/logo/royal-flash-logo.png" alt="로얄플래시 로고" />
					<WelcomeMessage>
						<span>Royal Flash</span> 팀은 당신의 내일을 응원합니다!
					</WelcomeMessage>
				</LogoMessageWrapper>
				<Box
					component="form"
					sx={{
						'& > :not(style)': {
							m: 1,
							width: '100%',
							marginTop: '20px',
						},
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						required
						id="email-input"
						label="Email"
						variant="standard"
					/>
					<TextField
						required
						id="password-input"
						label="Password"
						variant="standard"
					/>
				</Box>
				<LogInButtonBox>
					<LogInButton variant="outlined">로그인</LogInButton>
				</LogInButtonBox>
				<RegisterLinkWrapper>
					<RegisterLink to={'/signup'}>
						<span>아직 회원이 아니신가요?</span>
					</RegisterLink>
				</RegisterLinkWrapper>
			</LogInBox>
		</Background>
	);
}

const Background = styled(Container)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;

const LogInBox = styled(Container)`
	border: 1px solid var(--border-color);
	border-radius: 10px;
	padding: 30px;
	height: 600px;
`;

const LogoMessageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin-bottom: 40px;
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

const LogInButtonBox = styled(Box)`
	text-align: center;
`;

const LogInButton = styled(Button)`
	width: 150px;
	margin-top: 50px;
`;

const RegisterLinkWrapper = styled(Box)`
	width: 100%;
	text-align: center;
	margin-top: 10px;
`;

const RegisterLink = styled(Link)`
	text-align: center;
	color: gray;

	> span {
		font-size: 12px;
		transition: 0.1s ease-in;

		:hover {
			color: var(--font-color);
		}
	}
`;

export default Login;
