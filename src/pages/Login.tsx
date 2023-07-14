import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
// import { InputField } from '../components/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema } from '../schemas/loginSchema';

function Login() {
	const [isValidated, setIsValidated] = React.useState(false);

	/**
	 * register: input 등록하기 위해 사용됨
	 */
	const { register, handleSubmit } = useForm<loginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const submitData = (data: loginSchema) => {
		console.log('It works! :', data);
	};

	return (
		<Background>
			<LogInBox maxWidth="sm">
				<LogoMessageWrapper>
					<Logo src="/public/logo/royal-flash-logo.png" alt="로얄플래시 로고" />
					<WelcomeMessage>
						<span>Royal Flash</span> 팀은 당신의 내일을 응원합니다!
					</WelcomeMessage>
				</LogoMessageWrapper>
				<LogInForm onSubmit={handleSubmit(submitData)} autoComplete="off">
					<TextField
						required
						id="email-input"
						label="Email"
						variant="outlined"
						{...register('email')}
					/>
					<TextField
						required
						id="password-input"
						label="Password"
						variant="outlined"
						{...register('password')}
					/>
					<LogInButtonBox>
						<LogInButton type="submit" value="로그인" />
					</LogInButtonBox>
				</LogInForm>
				<RegisterLinkWrapper>
					<RegisterLink to={'/signup'}>
						<span>아직 회원이 아니신가요?</span>
					</RegisterLink>
				</RegisterLinkWrapper>
			</LogInBox>
		</Background>
	);
}

const Background = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;

const LogInBox = styled(Container)`
	border: 1px solid var(--border-color);
	border-radius: 10px;
	width: 400px;
	padding: 30px;
	height: 600px;
	background-color: #fff;
`;

const LogoMessageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin-bottom: 30px;
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

const LogInForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const LogInButtonBox = styled(Box)`
	text-align: center;
`;

const LogInButton = styled.input`
	width: 150px;
	height: 30px;
	background-color: var(--button-color);
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 5px;
	margin-top: 20px;
	cursor: pointer;

	:hover {
		transition: 0.1s ease-in;
		background-color: var(--secondary-color);
	}
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
