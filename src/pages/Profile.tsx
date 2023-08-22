import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import { uploadImage } from '../api';
import { fetchProfileQuery } from '../queries';
import { ChangePwModal, ChangeNicknameModal } from '../components';
import { useToastContext } from '../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../constants/toast';
import { ProfileResponse } from '../types';

function Profile() {
	const { addToast } = useToastContext();
	const { data: res } = useQuery<ProfileResponse>(fetchProfileQuery());
	const navigate = useNavigate();

	if (!res?.isSuccess) {
		navigate('/');
		addToast({
			type: TOAST_TYPE.ERROR,
			msg_type: TOAST_MSG_TYPE.NEED_AUTH,
		});
	}

	const [displayNickname, setDisplayNickname] = useState(res?.user.nickname);
	const [editingNickname, setEditingNickname] = useState(false);
	const [changingPw, setChangingPw] = useState(false);
	const [imagePath, setImagePath] = useState(
		res?.user.avatarUrl || '/logo/royal-flash-logo.png',
	);

	const changeImage = async (event: React.FormEvent) => {
		const target = event.target as HTMLInputElement;
		const file = target.files![0];

		const formData = new FormData();
		formData.append('image', file);

		const res = await uploadImage(formData);

		console.log(res);
	};

	const updateDisplayNickname = (newNickname: string) => {
		setDisplayNickname(newNickname);
	};

	return (
		<Container>
			{changingPw && (
				<ChangePwModal
					open={changingPw}
					title="비밀번호 변경"
					onClose={() => setChangingPw(false)}
				/>
			)}
			{editingNickname && (
				<ChangeNicknameModal
					open={editingNickname}
					currentNickname={displayNickname as string}
					title="닉네임 변경"
					updateDisplayNickname={updateDisplayNickname}
					onClose={() => setEditingNickname(false)}
				/>
			)}
			<Section>
				<UserImage src={imagePath} alt="User Image" />
				<Button variant="contained" component="label" onChange={changeImage}>
					사진 변경
					<input hidden accept="image/*" multiple type="file" />
				</Button>
				<Message>환영합니다 {displayNickname}님!</Message>
			</Section>
			<Section>
				<Box>
					<BoxTitle>Personal Information</BoxTitle>
					<StyledInput
						id="profile-name-input"
						label="Name"
						variant="standard"
						value={res?.user?.name}
						disabled
					/>
					<StyledInput
						id="profile-email-input"
						label="Email"
						variant="standard"
						value={res?.user?.email}
						disabled
					/>
					<NicknameForm>
						<StyledInput
							id="profile-nickname-input"
							label="Nickname"
							variant="standard"
							value={displayNickname}
							disabled
						/>
						<StyledEditIcon onClick={() => setEditingNickname(true)} />
					</NicknameForm>
				</Box>
			</Section>
			<Section>
				<Box>
					<BoxTitle>Security</BoxTitle>
					<ModalLinkWrapper>
						<p onClick={() => setChangingPw(true)}>Change Password</p>
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
	margin: 30px 0;
`;
const Section = styled.section`
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
	border: 1px solid var(--box-border-color);
	width: 120px;
	border-radius: 60px;
`;

const Message = styled.p`
	font-size: 14px;
	margin-top: 10px;
`;

const StyledInput = styled(TextField)`
	width: 100%;
`;

const ModalLinkWrapper = styled.div`
	margin-top: 20px;

	> p {
		font-weight: bold;
		font-size: 14px;
		color: gray;
		cursor: pointer;
		transition: 0.1s ease-in;
	}

	> p:hover {
		color: black;
	}
`;

const NicknameForm = styled.form`
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

// const DuplicateChecker = styled.button`
// 	cursor: pointer;
// 	background-color: #fff;
// 	border: none;
// 	transition: 0.1s ease-in;
// 	color: gray;
// 	font-size: 12px;
// 	min-width: 70px;

// 	:hover {
// 		color: var(--font-color);
// 	}

// 	:disabled {
// 		color: lightgray;
// 	}
// `;

export default Profile;
