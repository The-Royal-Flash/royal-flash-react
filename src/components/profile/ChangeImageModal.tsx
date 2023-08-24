import styled from '@emotion/styled';
import { Modal } from '../common';
import { Button, TextField } from '@mui/material';

interface ChangeImageModalProps {
	open: boolean;
	title: string;
	onClose: () => void;
}

function ChangeImageModal({ open, title, onClose }: ChangeImageModalProps) {
	return (
		<Modal open={open} title={title} onClose={() => onClose()}>
			<ModalContents>
				<ChangeNicknameForm
					id="ChangeNicknameForm"
					// onSubmit={handleSubmit(changeNickname)}
				>
					<NicknameInputBox>
						<TextField
							required
							// {...register('nickname')}
							// label="New Nickname"
							// variant="outlined"
							// error={errors.nickname ? true : false}
							// helperText={errors?.nickname?.message}
							// defaultValue={currentNickname}
						/>
					</NicknameInputBox>
					<StyledButton
						variant="contained"
						color="error"
						form="ChangeNicknameForm"
						type="submit"
					>
						이미지 변경
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

export default ChangeImageModal;
