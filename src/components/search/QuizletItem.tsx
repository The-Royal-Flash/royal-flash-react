import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Chip, Typography } from '@mui/material';
import StyleIcon from '@mui/icons-material/Style';
import { QuizletOwnerInfo } from '../../types';
import { AvatarImage } from '../common';

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
				<Title variant="h3">{title}</Title>
				<Description>{description}</Description>
				{tagList?.length > 0 && (
					<TagWrapper>
						{tagList.map((tag) => (
							<Tag
								key={`${quizletId}-${tag}`}
								label={`#${tag}`}
								variant="filled"
							/>
						))}
					</TagWrapper>
				)}
			</Wrapper>
			<OwnerWrapper>
				<AvatarImage
					src={avatarUrl}
					style={{ width: '1.5rem', height: '1.5rem', borderRadius: '100%' }}
				/>
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
	border: 2px solid var(--box-border-color);
	border-radius: 7px;
	transition: 0.1s ease-in;
	background: white;

	:hover {
		scale: 1.008;
		box-shadow:
			0 0 4px rgba(0, 0, 0, 0.1),
			0 3px 7px rgba(0, 0, 0, 0.15),
			0 2px 5px rgba(0, 0, 0, 0.17);
		& h3 {
			color: var(--font-hover-color);
		}
	}
`;

const Wrapper = styled.div`
	transition: 0.1s ease-in;
	padding: 20px 20px 12px;
`;

const NumOfCardContainer = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
`;

const NumOfCardWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 3px;
	color: var(--primary-color);
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
	font-size: 1.5rem;
	white-space: nowrap;
	font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-right: 50px;
`;

const TagWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 10px;
	column-gap: 2px;
`;

const Tag = styled(Chip)`
	height: 1.5rem;
	border-radius: 5px;
	background: white;
	color: var(--chip-color);
	font-weight: 500;
	font-size: 0.9rem;
	justify-content: flex-start;
	> span {
		padding-left: 2px;
	}
`;

const Description = styled.div`
	color: var(--gray-2);
	font-size: 0.85rem;
	padding-left: 2px;
	margin-top: 5px;
`;

const OwnerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0px 20px 10px;
`;

const Nickname = styled.div`
	margin-left: 4px;
	font-size: 0.9rem;
	font-weight: 400;
	color: var(--font-color);
`;

export default QuizletItem;
