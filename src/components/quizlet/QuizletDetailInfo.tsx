import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { Button, Chip, Paper, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { StyledTitle } from './styles';
import { fetchQuizletDetailQuery } from '../../queries';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import { AvatarCard, QuestionCarousel } from '../';
import StudyLog from './StudyLog';
import { useNavigate } from 'react-router-dom';
import { STUDY_MODE } from '../../constants';
import { useUserContext } from '../../contexts/UserContext';

interface QuizletDetailInfoProps {
	quizletId: string;
}

function QuizletDetailInfo({ quizletId }: QuizletDetailInfoProps) {
	const { user } = useUserContext();
	const { data: quizlet } = useQuery(fetchQuizletDetailQuery(quizletId));
	const navigate = useNavigate();

	const goStudy = (mode: keyof typeof STUDY_MODE) => {
		navigate(`/study/${quizletId}/${mode}`);
	};

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
			<QuestionCarousel questionList={quizlet?.questionList || []} />

			{quizlet?.studyLog?.studyCount && (
				<StudyLog studyLog={quizlet.studyLog} />
			)}

			{user ? (
				<Wrapper elevation={3}>
					<Title>
						<Icon />
						학습을 시작해보세요.
					</Title>
					<ButtonWrapper>
						<StudyAllButton
							variant="outlined"
							onClick={() => goStudy(STUDY_MODE.ALL)}
						>
							<ButtonText>전체 학습하기</ButtonText>
						</StudyAllButton>
						{(quizlet?.studyLog?.numOfQuestionListToReview ?? 0) > 0 && (
							<StudyWrongButton
								variant="contained"
								onClick={() => goStudy(STUDY_MODE.WRONG)}
							>
								<ButtonText>오답 학습하기</ButtonText>
							</StudyWrongButton>
						)}
					</ButtonWrapper>
				</Wrapper>
			) : (
				<Wrapper elevation={3}>
					<Title>
						<Icon />
						로그인 후 학습을 시작해보세요.
					</Title>
				</Wrapper>
			)}
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

const Wrapper = styled(Paper)`
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: space-between;
	width: 100%;
	margin-top: 50px;
	padding: 40px;
	border: 1px solid #ededed;
`;

const Title = styled.div`
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--font-color);
	display: flex;
	align-items: center;
	gap: 14px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const Icon = styled(SchoolIcon)`
	color: var(--dark-yellow-color);
	color: var(--button-color);
	width: 40px;
	height: 40px;
`;

const BaseButton = styled(Button)`
	display: flex;
	flex-direction: row;
`;

const StudyAllButton = styled(BaseButton)``;

const StudyWrongButton = styled(BaseButton)``;

const ButtonText = styled(Typography)`
	font-size: 1rem;
`;

export default QuizletDetailInfo;
