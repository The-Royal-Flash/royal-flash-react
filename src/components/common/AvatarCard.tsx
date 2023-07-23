import React from 'react';
import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface AvatarCardProps {
	email: string;
	nickname: string;
	avatarUrl?: string;
}

function AvatarCard({ email, nickname, avatarUrl }: AvatarCardProps) {
	return (
		<Container elevation={2}>
			<AvatarWrapper>
				{!!avatarUrl ? <AvatarImg src={avatarUrl} /> : <AvatarIcon />}
			</AvatarWrapper>
			<Nickname>{nickname}</Nickname>
			<Email>{email}</Email>
		</Container>
	);
}

const Container = styled(Paper)`
	border: 1px solid #e5eaee;
	display: grid;
	grid-template-columns: 50px 1fr;
	grid-template-rows: 1fr 1fr;
	column-gap: 20px;
	border-radius: 10px;
	margin-top: 35px;
	padding: 12px;
`;

const AvatarIcon = styled(AccountCircleIcon)`
	font-size: 50px;
	color: gray;
`;

const AvatarImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 100%;
`;

const AvatarWrapper = styled.div`
	grid-row: 1/3;
	display: flex;
	align-items: center;
`;

const Nickname = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
	color: black;
`;

const Email = styled.div`
	font-size: 1rem;
	font-weight: 400;
	color: gray;
`;

export default AvatarCard;
