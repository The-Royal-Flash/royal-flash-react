import styled from '@emotion/styled';
import { Modal } from '../common';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nicknameSchema } from '../../schemas/authSchema';
import { useToastContext } from '../../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../../constants/toast';
import { checkForDuplicate, updateNickname } from '../../api';

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
	const { addToast } = useToastContext();
	const {
		register,
		formState: { errors },
		handleSubmit,
		setError,
	} = useForm<nicknameSchema>({
		resolver: zodResolver(nicknameSchema),
	});

	const changeNickname = async ({ nickname: newNickname }: nicknameSchema) => {
		if (newNickname === currentNickname) {
			return setError('nickname', {
				type: 'custom',
				message: '현재 닉네임과 같습니다. 다른 닉네임을 입력하세요.',
			});
		}

		const data = await checkForDuplicate(newNickname, 'nickname');

		if (data.isSuccess) {
			await updateNickname(newNickname);
			addToast({
				type: TOAST_TYPE.SUCCESS,
				msg_type: TOAST_MSG_TYPE.SUCCESS_CHANGE_NICKNAME,
			});
			onClose();
		} else {
			addToast({
				type: TOAST_TYPE.ERROR,
				msg_type: TOAST_MSG_TYPE.SERVER_ERROR,
			});
			onClose();
		}
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
							defaultValue={currentNickname}
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
