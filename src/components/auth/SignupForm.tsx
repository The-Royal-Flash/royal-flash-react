import React from 'react';
import styled from '@emotion/styled';
import { TextField, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../schemas/authSchema';
import {
	fetchEmailDuplicationStatus,
	fetchNicknameDuplicationStatus,
} from '../../api';

function SignupForm() {
	const [isEmailUnique, setIsEmailUnique] = React.useState(false);
	const [isNicknameUnique, setIsNicknameUnique] = React.useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<signupSchema>({
		resolver: zodResolver(signupSchema),
	});

	const signUserUp = (data: signupSchema) => {
		console.log('It works! :', data);

		if (!isEmailUnique || !isNicknameUnique) {
			window.alert('중복 확인 후 진행해 주세요.');
			return;
		}

		// 💡 TODO: API 연동
	};

	const checkForDuplicate = async (
		event: React.MouseEvent<HTMLSpanElement>,
		dataType: string,
	) => {
		const target = event.target as HTMLInputElement;
		const userInput = target.parentNode?.querySelector('input')?.value;

		if (dataType === 'email') {
			const {
				data: { isSuccess, message },
			} = await fetchEmailDuplicationStatus(userInput as string);

			if (!isSuccess) {
				window.alert(message);
			} else {
				window.alert('사용 가능한 이메일입니다!');
				setIsEmailUnique(true);
			}
		} else {
			const {
				data: { isSuccess, message },
			} = await fetchNicknameDuplicationStatus(userInput as string);

			if (!isSuccess) {
				window.alert(message);
			} else {
				window.alert('사용 가능한 닉네임입니다!');
				setIsNicknameUnique(true);
			}
		}
	};

	return (
		<Form onSubmit={handleSubmit(signUserUp)} autoComplete="off">
			<StyledTextField
				required
				id="name-input"
				label="Name"
				variant="outlined"
				{...register('name')}
				error={errors.name ? true : false}
				helperText={errors?.name?.message}
			/>
			<InputButtonWrapper>
				<StyledTextField
					required
					id="email-input"
					label="Email"
					variant="outlined"
					{...register('email')}
					error={errors.email ? true : false}
					helperText={errors?.email?.message}
					disabled={isEmailUnique}
				/>
				<DuplicateChecker
					onClick={(event) => checkForDuplicate(event, 'email')}
				>
					중복확인
				</DuplicateChecker>
			</InputButtonWrapper>
			<InputButtonWrapper>
				<StyledTextField
					required
					id="nickname-input"
					label="Nickname"
					variant="outlined"
					{...register('nickname')}
					error={errors.nickname ? true : false}
					helperText={errors?.nickname?.message}
					disabled={isNicknameUnique}
				/>
				<DuplicateChecker
					onClick={(event) => checkForDuplicate(event, 'nickname')}
				>
					중복확인
				</DuplicateChecker>
			</InputButtonWrapper>
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
			<StyledTextField
				required
				id="confirmPassword-input"
				label="Confirm Password"
				variant="outlined"
				type="password"
				{...register('confirmPassword')}
				error={errors.confirmPassword ? true : false}
				helperText={errors?.confirmPassword?.message}
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

const DuplicateChecker = styled.span`
	cursor: pointer;
	transition: 0.1s ease-in;
	color: gray;

	:hover {
		color: var(--font-color);
	}
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

const InputButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default SignupForm;
