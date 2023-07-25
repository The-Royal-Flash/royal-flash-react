import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../schemas/authSchema';
import { checkEmail, checkNickname, signUp } from '../../api';
import { FormInput } from '.';

function SignupForm() {
	const [isEmailUnique, setIsEmailUnique] = React.useState(false);
	const [isNicknameUnique, setIsNicknameUnique] = React.useState(false);
	const [emailCheckFailed, setEmailCheckFailed] = React.useState(false);
	const [nicknameCheckFailed, setNicknameCheckFailed] = React.useState(false);

	const navi = useNavigate();
	const { control, register, trigger, handleSubmit } = useForm<signupSchema>({
		resolver: zodResolver(signupSchema),
	});

	const signUserUp = async (data: signupSchema) => {
		if (!isNicknameUnique || !isEmailUnique) {
			window.alert('중복 확인 후 진행해 주세요.');
			return;
		}

		const result = await signUp(data);
		console.log(result);
		navi('/');
	};

	const checkForDuplicate = async (
		event: React.MouseEvent<HTMLSpanElement>,
		dataType: string,
	) => {
		const target = event.target as HTMLInputElement;
		const userInput = target.parentNode?.querySelector('input')?.value;

		if (dataType === 'email') {
			const { data } = await checkEmail(userInput as string);

			if (data.isSuccess) setIsEmailUnique(true);
			else setEmailCheckFailed(true);
		}

		if (dataType === 'nickname') {
			const { data } = await checkNickname(userInput as string);

			if (data.isSuccess) setIsNicknameUnique(true);
			else setNicknameCheckFailed(true);
		}
	};

	return (
		<Form onSubmit={handleSubmit(signUserUp)} autoComplete="off" noValidate>
			<FormInput
				register={register}
				name="name"
				trigger={trigger}
				control={control}
			/>
			<FormInput
				variant="wrapped"
				name="email"
				register={register}
				trigger={trigger}
				control={control}
				uniqueState={isEmailUnique}
				checkForDuplicate={checkForDuplicate}
				checkState={emailCheckFailed}
			/>
			<FormInput
				variant="wrapped"
				name="nickname"
				register={register}
				trigger={trigger}
				control={control}
				uniqueState={isNicknameUnique}
				checkForDuplicate={checkForDuplicate}
				checkState={nicknameCheckFailed}
			/>
			<FormInput
				register={register}
				isPassword={true}
				name="password"
				trigger={trigger}
				control={control}
			/>
			<FormInput
				register={register}
				isPassword={true}
				name="confirmPassword"
				trigger={trigger}
				control={control}
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

export default SignupForm;
