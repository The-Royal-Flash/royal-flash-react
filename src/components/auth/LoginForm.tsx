import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { TextField, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/authSchema';
import { logIn } from '../../api';

function LoginForm() {
	const navi = useNavigate();
	const [loginError, setLoginError] = React.useState<null | boolean>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<loginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const logUserIn = async (data: loginSchema) => {
		const user = await logIn(data);

		if (user.data.isSuccess) navi('/');
		else setLoginError(true);
	};

	return (
		<Form onSubmit={handleSubmit(logUserIn)} autoComplete="off">
			<StyledTextField
				required
				id="email-input"
				label="Email"
				variant="outlined"
				{...register('email')}
				error={errors.email ? true : false}
				helperText={errors?.email?.message}
			/>
			<StyledTextField
				required
				id="password-input"
				label="Password"
				variant="outlined"
				type="password"
				{...register('password')}
				error={errors.password ? true : false}
				helperText={errors?.password?.message}
			/>
			<ButtonBox>
				<SubmitButton type="submit" value="로그인" />
			</ButtonBox>
			{loginError && (
				<ErrorMessage>올바른 아이디와 비밀번호를 입력해주세요</ErrorMessage>
			)}
		</Form>
	);
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const ButtonBox = styled(Box)`
	text-align: center;
`;

const StyledTextField = styled(TextField)`
	min-width: 80%;
`;

const SubmitButton = styled.input`
	min-width: 150px;
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

const ErrorMessage = styled.p`
	color: red;
	text-align: center;
`;

export default LoginForm;
