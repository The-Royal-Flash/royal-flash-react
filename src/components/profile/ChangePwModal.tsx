import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../common';
import { Button, TextField } from '@mui/material';
import { changePassword, logOut } from '../../api';
import { useToastContext } from '../../contexts/ToastContext';
import { useUserContext } from '../../contexts/UserContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../../constants/toast';
import { passwordChangeSchema } from '../../schemas/profileSchema';

interface ChangePwModalProps {
	open: boolean;
	title: string;
	onClose: () => void;
}

function ChangePwModal({ open, title, onClose }: ChangePwModalProps) {
	const { setUser } = useUserContext();
	const naviagte = useNavigate();
	const { addToast } = useToastContext();
	const {
		register,
		setError,
		formState: { errors },
		handleSubmit,
	} = useForm<passwordChangeSchema>({
		resolver: zodResolver(passwordChangeSchema),
	});

	const onSubmit = async (formData: passwordChangeSchema) => {
		try {
			await changePassword({ ...formData });

			logOut();
			setUser(null);
			onClose();
			naviagte('/');
			addToast({
				type: TOAST_TYPE.SUCCESS,
				msg_type: TOAST_MSG_TYPE.SUCCESS_CHANGE_PW,
			});
		} catch (error) {
			setError('password', {
				type: 'custom',
				message: '비밀번호가 틀렸습니다.',
			});
		}
	};

	return (
		<Modal open={open} title={title} onClose={() => onClose()}>
			<ModalContents>
				<ChangePwForm id="ChangePwForm" onSubmit={handleSubmit(onSubmit)}>
					<PwInputBox>
						<p>현재 비밀번호</p>
						<TextField
							label="Current Password"
							{...register('password')}
							required
							variant="outlined"
							type="password"
							error={errors.password ? true : false}
							helperText={errors?.password?.message}
						/>
					</PwInputBox>
					<PwInputBox>
						<p>새로운 비밀번호</p>
						<TextField
							required
							{...register('newPassword')}
							label="New Password"
							variant="outlined"
							type="password"
							error={errors.newPassword ? true : false}
							helperText={errors?.newPassword?.message}
						/>
						<TextField
							required
							{...register('newConfirmPassword')}
							label="Confirm New Password"
							variant="outlined"
							type="password"
							error={errors.newConfirmPassword ? true : false}
							helperText={errors?.newConfirmPassword?.message}
						/>
					</PwInputBox>
					<StyledButton
						name="비밀번호 변경"
						variant="contained"
						color="error"
						form="ChangePwForm"
						type="submit"
					>
						비밀번호 변경
					</StyledButton>
				</ChangePwForm>
			</ModalContents>
		</Modal>
	);
}

const ModalContents = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	text-align: center;
	width: 80%;
`;

const ChangePwForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;
`;

const PwInputBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;

	> p {
		font-size: 18px;
		text-align: start;
		margin-bottom: 15px;
		font-weight: bold;
	}
`;

const StyledButton = styled(Button)`
	font-size: 14px;
`;

export default ChangePwModal;
