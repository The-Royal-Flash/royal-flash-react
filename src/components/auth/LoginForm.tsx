import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/authSchema';
import { logIn } from '../../api';
import { FormInput } from '.';
import { useToastContext } from '../../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../../constants/toast';
import { useUserContext } from '../../contexts/UserContext';
import { ButtonBox, Form, SubmitButton } from './styles';

function LoginForm() {
	const navi = useNavigate();
	const { setUser } = useUserContext();
	const { addToast } = useToastContext();

	const { control, register, trigger, handleSubmit } = useForm<loginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const logUserIn = async (data: loginSchema) => {
		try {
			const res = await logIn(data);
			setUser(res.data.user);
			navi('/');
		} catch (error) {
			addToast({
				type: TOAST_TYPE.ERROR,
				msg_type: TOAST_MSG_TYPE.INVALID_LOGIN,
			});
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
				<SubmitButton
					name="로그인"
					variant="contained"
					type="submit"
					value="로그인"
				>
					로그인
				</SubmitButton>
			</ButtonBox>
		</Form>
	);
}

export default LoginForm;
