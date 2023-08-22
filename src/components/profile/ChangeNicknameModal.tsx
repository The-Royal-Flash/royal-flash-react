import styled from '@emotion/styled';
import { Modal } from '../common';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nicknameSchema } from '../../schemas/authSchema';
import { checkForDuplicate } from '../../api';
import useNicknameMutation from '../../hooks/mutation/useNicknameMutation';

interface ChangeNicknameModal {
	open: boolean;
	title: string;
	currentNickname: string;
	updateDisplayNickname: (newNickname: string) => void;
	onClose: () => void;
}

function ChangeNicknameModal({
	open,
	title,
	onClose,
	updateDisplayNickname,
	currentNickname,
}: ChangeNicknameModal) {
	const { mutate: mutateNickname } = useNicknameMutation({
		updateDisplayNickname,
		currentNickname,
	});

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

		try {
			const data = await checkForDuplicate(newNickname, 'nickname');

			if (data.isSuccess) {
				mutateNickname(newNickname);
				onClose();
			}
		} catch (error) {
			setError('nickname', {
				type: 'custom',
				message: '이미 사용 중인 닉네임입니다.',
			});
		}

		// if (data.isSuccess) {
		// 	mutateNickname(newNickname);
		// 	onClose();
		// } else {
		// 	setError('nickname', {
		// 		type: 'custom',
		// 		message: '이미 사용 중인 닉네임입니다.',
		// 	});
		// }
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
