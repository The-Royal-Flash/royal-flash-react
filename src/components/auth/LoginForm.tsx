import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/authSchema';
import { logIn } from '../../api';
import { FormInput } from '.';
import { useUserContext } from '../../contexts/UserContext';
import { ButtonBox, Form, SubmitButton } from './styles';

function LoginForm() {
	const navi = useNavigate();
	const [loginError, setLoginError] = React.useState<null | boolean>(null);
	const { setUser } = useUserContext();

	const { control, register, trigger, handleSubmit } = useForm<loginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const logUserIn = async (data: loginSchema) => {
		const res = await logIn(data);

		if (!res.data.isSuccess) {
			setLoginError(true);
		} else {
			setUser(res.data.user);
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
				<SubmitButton variant="contained" type="submit" value="로그인">
					로그인
				</SubmitButton>
			</ButtonBox>
			{loginError && (
				<ErrorMessage>올바른 아이디와 비밀번호를 입력해주세요</ErrorMessage>
			)}
		</Form>
	);
}

const ErrorMessage = styled.p`
	color: red;
	text-align: center;
`;

export default LoginForm;
