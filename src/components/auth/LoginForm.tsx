import React from 'react';
import styled from '@emotion/styled';
import { TextField, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/authSchema';

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<loginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const logUserIn = (data: loginSchema) => {
		console.log('It works! :', data);

		// 💡 TODO: API 연동
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
				<SubmitButton type="submit" value="가입하기" />
			</ButtonBox>
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

export default LoginForm;
