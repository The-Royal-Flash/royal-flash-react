import { useState } from 'react';
import styled from '@emotion/styled';
import { Modal } from '../common';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nicknameSchema } from '../../schemas/authSchema';
import { useToastContext } from '../../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../../constants/toast';
import { checkForDuplicate } from '../../api';

interface ChangeNicknameModal {
	open: boolean;
	title: string;
	currentNickname: string;
	onClose: () => void;
}

function ChangeNicknameModal({
	open,
	title,
	onClose,
	currentNickname,
}: ChangeNicknameModal) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<nicknameSchema>({
		resolver: zodResolver(nicknameSchema),
	});

	const changeNickname = async ({ nickname: newNickname }: nicknameSchema) => {
		console.log(currentNickname);
		console.log(newNickname);

		checkForDuplicate;
	};

	return (
		<Modal open={open} title={title} onClose={() => onClose()}>
			<ModalContents>
				<ChangeNicknameForm
					id="ChangeNicknameForm"
					onSubmit={handleSubmit(changeNickname)}
				>
					<NicknameInputBox>
						<TextField
							required
							{...register('nickname')}
							label="New Nickname"
							variant="outlined"
							error={errors.nickname ? true : false}
							helperText={errors?.nickname?.message}
						/>
					</NicknameInputBox>
					<StyledButton
						variant="contained"
						color="error"
						form="ChangeNicknameForm"
						type="submit"
					>
						닉네임 변경
					</StyledButton>
				</ChangeNicknameForm>
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

const ChangeNicknameForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;
`;

const NicknameInputBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	height: 80px;

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

export default ChangeNicknameModal;
