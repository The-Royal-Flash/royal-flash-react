import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../schemas/authSchema';
import { signUp, checkForDuplicate } from '../../api';
import { FormInput } from '.';
import { useToastContext } from '../../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../../constants/toast';
import { ButtonBox, Form, SubmitButton } from './styles';

function SignupForm() {
	const [isEmailUnique, setIsEmailUnique] = React.useState(false);
	const [isNicknameUnique, setIsNicknameUnique] = React.useState(false);
	const [emailCheckFailed, setEmailCheckFailed] = React.useState(false);
	const [nicknameCheckFailed, setNicknameCheckFailed] = React.useState(false);

	const navigate = useNavigate();
	const { addToast } = useToastContext();
	const {
		control,
		register,
		trigger,
		handleSubmit,
		formState: { errors },
	} = useForm<signupSchema>({
		resolver: zodResolver(signupSchema),
	});

	const signUserUp = async (data: signupSchema) => {
		if (!isNicknameUnique || !isEmailUnique) {
			addToast({
				type: TOAST_TYPE.ERROR,
				msg_type: TOAST_MSG_TYPE.NEED_CHECK_DUPLICATE,
			});
			return;
		}

		await signUp(data);
		navigate('/');
	};

	const handleDuplicateCheck = async (
		event: React.MouseEvent<HTMLSpanElement>,
		dataType: string,
	) => {
		const target = event.target as HTMLInputElement;
		const userInput = target.parentNode?.querySelector('input')?.value;

		if (!userInput) {
			addToast({
				type: TOAST_TYPE.ERROR,
				msg_type:
					dataType === 'email'
						? TOAST_MSG_TYPE.INPUT_EMAIL
						: TOAST_MSG_TYPE.INPUT_NICKNAME,
			});

			return;
		}

		if (dataType === 'email' && errors.email?.message) return;
		if (dataType === 'nickname' && errors.nickname?.message) return;

		const data = await checkForDuplicate(userInput, dataType);

		if (dataType === 'email') {
			if (data.isSuccess) setIsEmailUnique(true);
			else setEmailCheckFailed(true);
		}

		if (dataType === 'nickname') {
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
				checkForDuplicate={handleDuplicateCheck}
				checkState={emailCheckFailed}
			/>
			<FormInput
				variant="wrapped"
				name="nickname"
				register={register}
				trigger={trigger}
				control={control}
				uniqueState={isNicknameUnique}
				checkForDuplicate={handleDuplicateCheck}
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
				<SubmitButton
					name="가입하기"
					variant="contained"
					type="submit"
					value="가입하기"
				>
					가입하기
				</SubmitButton>
			</ButtonBox>
		</Form>
	);
}

export default SignupForm;
