import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../common';
import { TextField, Button } from '@mui/material';
import { changePassword } from '../../api';
import { passwordChangeSchema } from '../../schemas/profileSchema';

interface ChangePwModalProps {
	open: boolean;
	title: string;
	onClose: () => void;
}

function ChangePwModal({ open, title, onClose }: ChangePwModalProps) {
	const {
		register,
		setError,
		formState: { errors },
		handleSubmit,
	} = useForm<passwordChangeSchema>({
		resolver: zodResolver(passwordChangeSchema),
	});

	const onSubmit = async (data: passwordChangeSchema) => {
		const res = await changePassword({ ...data });

		if (res.data.isSuccess) {
			onClose();
		} else {
			// 💡 TODO: API 호출 실패하면의 로직이 제대로 수행되지 않음 (확인 필요!)
			setError('password', {
				type: '400',
				message: '비밀번호가 틀렸습니다.',
			});
		}
	};

	return (
		<Modal open={open} title={title} onClose={() => onClose()}>
			<ModalContents>
				<ChangePwForm
					id="ChangePwForm"
					// noValidate
					onSubmit={handleSubmit(onSubmit)}
				>
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
						></TextField>
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
						></TextField>
						<TextField
							required
							{...register('newConfirmPassword')}
							label="Confirm New Password"
							variant="outlined"
							type="password"
							error={errors.newConfirmPassword ? true : false}
							helperText={errors?.newConfirmPassword?.message}
						></TextField>
					</PwInputBox>
					<StyledButton
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
	width: 100px;
	font-size: 10px;
`;

export default ChangePwModal;
