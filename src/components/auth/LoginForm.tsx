import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/authSchema';
import { logIn } from '../../api';
import { FormInput } from '.';
import { UserContext } from '../../contexts/UserContext';

function LoginForm() {
	const navi = useNavigate();
	const [loginError, setLoginError] = React.useState<null | boolean>(null);
	const { setUser } = React.useContext(UserContext);

	const { control, register, trigger, handleSubmit } = useForm<loginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const logUserIn = async (data: loginSchema) => {
		const user = await logIn(data);

		if (!user.data.isSuccess) {
			setLoginError(true);
		} else {
			const { email, nickname } = user;

			setUser({ email, nickname });
			navi('/');
		}
	};

	return (
		<Form onSubmit={handleSubmit(logUserIn)} autoComplete="off" noValidate>
			<FormInput
				register={register}
				name="email"
				trigger={trigger}
				control={control}
			/>
			<FormInput
				register={register}
				name="password"
				isPassword={true}
				trigger={trigger}
				control={control}
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
