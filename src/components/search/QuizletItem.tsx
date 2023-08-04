import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Chip, Divider, Typography } from '@mui/material';
import StyleIcon from '@mui/icons-material/Style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { QuizletOwnerInfo } from '../../types';

interface QuizletItem {
	quizletId: string;
	title: string;
	tagList: string[];
	description: string;
	questionCardList: string[];
	owner: QuizletOwnerInfo;
	link: string;
}

function QuizletItem({
	quizletId,
	title,
	tagList,
	description,
	questionCardList,
	link,
	owner: { avatarUrl, nickname },
}: QuizletItem) {
	return (
		<Container to={link}>
			<Wrapper>
				<NumOfCardContainer>
					<NumOfCardWrapper>
						<CardIcon />
						<NumOfCard>{questionCardList.length}</NumOfCard>
					</NumOfCardWrapper>
				</NumOfCardContainer>
				<Title>{title}</Title>
				{tagList?.length > 0 && (
					<TagWrapper>
						{tagList.map((tag) => (
							<Tag key={`${quizletId}-${tag}`} label={tag} variant="filled" />
						))}
					</TagWrapper>
				)}
				<Description>{description}</Description>
			</Wrapper>
			<StyledDivider />
			<OwnerWrapper>
				{!!avatarUrl ? <AvatarImg src={avatarUrl} /> : <AvatarIcon />}
				<Nickname>{nickname}</Nickname>
			</OwnerWrapper>
		</Container>
	);
}

const Container = styled(Link)`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	border: 2px solid #dcdcdc;
	border-radius: 7px;
	transition: 0.1s ease-in;
	:hover {
		scale: 1.008;
		border: 2px solid #b6c6d0;
		& > hr {
			border: 1px solid #b6c6d0;
		}
		& > div:first-child {
			/* background: rgb(173 173 173 / 10%); */
			background-color: #d1e0e970;
		}
	}
`;

const Wrapper = styled.div`
	transition: 0.1s ease-in;
	padding: 15px;
`;

const NumOfCardContainer = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
`;

const NumOfCardWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 3px;
	color: var(--card-color);
`;

const NumOfCard = styled(Typography)`
	font-size: 1rem;
	font-weight: 600;
`;

const CardIcon = styled(StyleIcon)`
	font-size: 1.5rem;
`;

const Title = styled(Typography)`
	color: var(--font-color);
	font-size: 1.3rem;
	white-space: nowrap;
	font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-right: 50px;
`;

const TagWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 3px;
	gap: 5px;
`;

const Tag = styled(Chip)`
	background: var(--chip-color);
	font-weight: 600;
	border-radius: 5px;
	font-size: 0.8rem;
	height: 1.4rem;
`;

const Description = styled.div`
	color: var(--footer-bg-color);
	font-size: 0.85rem;
	padding-left: 2px;
	margin-top: 17px;
`;

const StyledDivider = styled(Divider)`
	color: var(--footer-bg-color);
	border: 1px solid #dcdcdc;
	transition: 0.1s ease-in;
`;

const OwnerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 3px 10px;
`;

const AvatarIcon = styled(AccountCircleIcon)`
	font-size: 1.5rem;
	color: gray;
`;

const AvatarImg = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 100%;
`;

const Nickname = styled.div`
	margin-left: 4px;
	font-size: 0.9rem;
	font-weight: 400;
	color: var(--footer-bg-color);
`;

export default QuizletItem;
