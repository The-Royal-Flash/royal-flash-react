import styled from '@emotion/styled';
import { TextField, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, signupSchema } from '../../schemas';

function AuthForm({ variant }: AuthFormProps) {
	const schemaInUse = variant === 'login' ? loginSchema : signupSchema;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<signupSchema>({
		resolver: zodResolver(schemaInUse),
	});

	const signUserUp = (data: signupSchema) => {
		console.log('It works! :', data);

		// 💡 TODO: API 연동
	};

	const logUserIn = (data: loginSchema) => {
		console.log('It works! :', data);

		// 💡 TODO: API 연동
	};

	return (
		<LogInForm onSubmit={handleSubmit(signUserUp)} autoComplete="off">
			{variant === 'signup' && (
				<TextField
					required
					id="name-input"
					label="Name"
					variant="outlined"
					{...register('name')}
					error={errors.name ? true : false}
					helperText={errors?.name?.message}
				/>
			)}
			<TextField
				required
				id="email-input"
				label="Email"
				variant="outlined"
				{...register('email')}
				error={errors.email ? true : false}
				helperText={errors?.email?.message}
			/>
			<TextField
				required
				id="password-input"
				label="Password"
				variant="outlined"
				type="password"
				{...register('password')}
				error={errors.password ? true : false}
				helperText={errors?.password?.message}
			/>
			{variant === 'signup' && (
				<TextField
					required
					id="confirmPassword-input"
					label="Confirm Password"
					variant="outlined"
					type="password"
					{...register('confirmPassword')}
					error={errors.confirmPassword ? true : false}
					helperText={errors?.confirmPassword?.message}
				/>
			)}
			<LogInButtonBox>
				<LogInButton type="submit" value="가입하기" />
			</LogInButtonBox>
		</LogInForm>
	);
}

interface AuthFormProps {
	variant: string;
}

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

export default AuthForm;
