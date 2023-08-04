import React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import { checkForDuplicate, changeNickname } from '../api';
import { ChangePwModal } from '../components';
import { useUserContext } from '../contexts/UserContext';
import { useToastContext } from '../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../constants/toast';

function Profile() {
	const { user, setUser } = useUserContext();
	const { addToast } = useToastContext();

	// TODO: profile api
	// const { data } = useQuery<ProflieResponse>(fetchProfileQuery());

	const [nickname, setNickname] = React.useState(user!.nickname);
	const [editingNickname, setEditingNickname] = React.useState(false);
	const nicknameFieldRef = React.useRef<HTMLDivElement>(null);
	const [changingPw, setChangingPw] = React.useState(false);

	/*----- nicknameField에 focus -----*/
	React.useEffect(() => {
		if (!editingNickname) return;

		nicknameFieldRef.current?.querySelector('input')?.focus();
	}, [editingNickname]);

	/*----- nicknameField 값 업데이트 -----*/
	const updateNickname = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const target = event?.target as HTMLInputElement;
		const newValue = target.value.trim();

		setNickname(newValue);
	};

	/*----- 중복 확인 -----*/
	const handleDuplicateCheck = async (
		event: React.MouseEvent<HTMLSpanElement>,
		dataType = 'nickname',
	) => {
		event.preventDefault();

		// 1. 현재 유저의 닉네임과 새로운 값이 같은 경우
		if (nickname === user!.nickname) {
			addToast({
				type: TOAST_TYPE.ERROR,
				msg_type: TOAST_MSG_TYPE.CHANGE_NICKNAME,
			});

			nicknameFieldRef.current?.querySelector('input')?.focus();
			return;
		}

		// 2. 새로 입력된 닉네임의 길이가 3글자 이상이 아닌 경우
		if (nickname.length < 3) {
			addToast({
				type: TOAST_TYPE.ERROR,
				msg_type: TOAST_MSG_TYPE.NICKNAME_LENGTH,
			});

			nicknameFieldRef.current?.querySelector('input')?.focus();
			return;
		}

		// 3. 닉네임 중복확인 후 변경
		const data = await checkForDuplicate(event, dataType);

		if (data.isSuccess) {
			const confirm = window.confirm(
				`닉네임을 '${nickname}'으로 변경하시겠습니까?`,
			);

			if (confirm) {
				setEditingNickname(false);

				const { data } = await changeNickname(nickname);
				if (data.isSuccess) setUser({ ...user!, nickname });
			} else {
				nicknameFieldRef.current?.querySelector('input')?.focus();
			}
		}
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
			<Section>
				<UserImage
					src={user?.avatarUrl || '/logo/royal-flash-logo.png'}
					alt="User Image"
				/>
				<StyledButton variant="contained" size="small">
					사진 변경
				</StyledButton>
				<Message>환영합니다 {user?.nickname}님!</Message>
			</Section>
			<Section>
				<Box>
					<BoxTitle>Personal Information</BoxTitle>
					<StyledInput
						id="profile-name-input"
						label="Name"
						variant="standard"
						value={user?.name}
						disabled
					/>
					<StyledInput
						id="profile-email-input"
						label="Email"
						variant="standard"
						value={user?.email}
						disabled
					/>
					<NicknameForm>
						<StyledInput
							id="profile-nickname-input"
							label="Nickname"
							variant="standard"
							onChange={updateNickname}
							value={nickname}
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
	border: 1px solid var(--border-color);
	width: 120px;
	border-radius: 60px;
`;

const StyledButton = styled(Button)`
	width: 100px;
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
