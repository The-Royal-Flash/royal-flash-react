import React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import { checkForDuplicate } from '../api';

function Profile() {
	const [nickname, setNickname] = React.useState('devjames');
	const [editingNickname, setEditingNickname] = React.useState(false);
	const nicknameFieldRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		nicknameFieldRef.current?.querySelector('input')?.focus();
	}, [editingNickname]);

	const updateNickname = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const target = event?.target as HTMLInputElement;
		const newValue = target.value.trim();

		setNickname(newValue);
	};

	const handleDuplicateCheck = async (
		event: React.MouseEvent<HTMLSpanElement>,
		dataType = 'nickname',
	) => {
		const data = await checkForDuplicate(event, dataType);

		if (data.isSuccess) {
			const confirm = window.confirm('닉네임을 변경하시겠습니까?');

			if (confirm) {
				setEditingNickname(false);
				// 💡 Nickname 변경 API 연동하기
			} else {
				nicknameFieldRef.current?.querySelector('input')?.focus();
			}
		}
	};

	return (
		<Container>
			<Section>
				<UserImage src="/public/logo/royal-flash-logo.png" />
				<EditButton variant="contained" size="small">
					사진 변경
				</EditButton>
				<Message>환영합니다 devsqsung님!</Message>
			</Section>
			<Section>
				<Box>
					<BoxTitle>Personal Information</BoxTitle>
					<StyledInput
						id="profile-name-input"
						label="Name"
						variant="standard"
						value={'손규성'}
						disabled
					/>
					<StyledInput
						id="profile-email-input"
						label="Email"
						variant="standard"
						value={'rok.ksohn@gmail.com'}
						disabled
					/>
					<NicknameFieldWrapper>
						<StyledInput
							required
							id="profile-nickname-input"
							label="Nickname"
							variant="standard"
							value={nickname}
							onChange={(event) => updateNickname(event)}
							// error={}
							// helperText={}
							ref={nicknameFieldRef}
							disabled={!editingNickname}
						/>
						{editingNickname ? (
							<DuplicateChecker onClick={handleDuplicateCheck}>
								중복 확인
							</DuplicateChecker>
						) : (
							<StyledEditIcon onClick={() => setEditingNickname(true)} />
						)}
					</NicknameFieldWrapper>
				</Box>
			</Section>
			<Section>
				<Box>
					<BoxTitle>Security</BoxTitle>
					<ModalLinkWrapper>
						<ModalLinkText>Change Password</ModalLinkText>
						<BreakLine />
						<ModalLinkText>Delete Account</ModalLinkText>
					</ModalLinkWrapper>
				</Box>
			</Section>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
const Section = styled.section`
	/* border: 1px solid red; */
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 10px;
`;

const Box = styled.section`
	border: 1px solid lightgray;
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px 20px 30px 20px;
`;

const BoxTitle = styled.p`
	font-weight: bold;
	font-size: 18px;
`;

const UserImage = styled.img`
	border: 1px solid var(--border-color);
	width: 120px;
	border-radius: 60px;
`;

const EditButton = styled(Button)`
	width: 90px;
	font-size: 10px;
`;

const Message = styled.p`
	font-size: 14px;
	margin-top: 10px;
`;

const StyledInput = styled(TextField)`
	width: 100%;
`;

const ModalLinkWrapper = styled.div`
	display: block;
	margin-top: 20px;
`;

const ModalLinkText = styled.p`
	font-weight: bold;
	font-size: 14px;
	color: gray;
	cursor: pointer;
`;

const BreakLine = styled.hr`
	margin: 10px 0;
`;

const NicknameFieldWrapper = styled.div`
	/* border: 1px dashed red; */
	display: flex;
	position: relative;
	align-items: center;
`;

const StyledEditIcon = styled(EditIcon)`
	cursor: pointer;
	color: gray;
	font-size: 14px;
	position: absolute;
	right: 0;

	:hover {
		color: var(--primary-color);
	}
`;

const DuplicateChecker = styled.button`
	cursor: pointer;
	background-color: #fff;
	border: none;
	transition: 0.1s ease-in;
	color: gray;
	font-size: 12px;
	min-width: 70px;

	:hover {
		color: var(--font-color);
	}

	:disabled {
		color: lightgray;
	}
`;

export default Profile;
