import React from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { Chip, Paper } from '@mui/material';
import { StyledTitle } from './styles';
import { fetchQuizletDetailQuery } from '../../queries';
import { desktopMediaQuery, mobileMediaQuery } from '../../mediaQueries';
import { AvatarCard, QuestionCarousel } from '../';

interface QuizletDetailInfoProps {
	quizletId: string;
}

function QuizletDetailInfo({ quizletId }: QuizletDetailInfoProps) {
	const { data: quizlet } = useQuery(fetchQuizletDetailQuery(quizletId));

	return (
		<Container>
			<StyledTitle>{quizlet?.title}</StyledTitle>
			<ChipWrapper>
				{quizlet?.tagList.map((tag, index) => (
					<StyledChip key={index} label={tag} variant="filled" />
				))}
			</ChipWrapper>
			<Description>{quizlet?.description}</Description>
			<AvatarCard
				email={quizlet?.owner.email!}
				nickname={quizlet?.owner.nickname!}
				avatarUrl={quizlet?.owner.avatarUrl}
			/>
			<QuestionCarousel questionList={quizlet?.questionCardList || []} />
			{/* TODO: 학습 기록 있는 경우 학습 현황 */}
			{/* TODO: 학습하기 버튼 (전체/오답) */}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	${mobileMediaQuery} {
		padding: 0 20px;
	}
	${desktopMediaQuery} {
		padding: 0 30px;
	}
`;

const ChipWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 12px;
	gap: 10px;
`;

const StyledChip = styled(Chip)`
	padding: 5px;
	font-size: 1.1rem;
	font-weight: 600;
	border-radius: 5px;
	background-color: #c6e3f5;
	color: var(--font-color);
`;

const Description = styled.p`
	margin-top: 20px;
	font-size: 1.1rem;
`;

export default QuizletDetailInfo;
