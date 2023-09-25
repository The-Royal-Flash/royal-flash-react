import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { Button, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';
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

	const goEdit = () => {
		navigate(`/quizlet/edit/${quizletId}`);
	};

	return (
		<Container>
			{quizlet?.owner._id === user?.id && (
				<EditWrapper>
					<EditButton variant="contained" onClick={goEdit}>
						<EditIcon />
						수정하기
					</EditButton>
				</EditWrapper>
			)}
			<StyledTitle>{quizlet?.title}</StyledTitle>
			<ChipWrapper>
				{quizlet?.tagList.map((tag, index) => (
					<StyledChip key={index} label={tag} variant="outlined" />
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
				<Wrapper>
					<Title>
						<Icon />
						학습을 시작해보세요.
					</Title>
					<ButtonWrapper>
						<BaseButton
							name="전체 학습하기"
							variant="outlined"
							onClick={() => goStudy(STUDY_MODE.ALL)}
						>
							전체 학습하기
						</BaseButton>
						{(quizlet?.studyLog?.numOfQuestionListToReview ?? 0) > 0 && (
							<BaseButton
								name="오답 학습하기"
								variant="contained"
								onClick={() => goStudy(STUDY_MODE.WRONG)}
							>
								오답 학습하기
							</BaseButton>
						)}
					</ButtonWrapper>
				</Wrapper>
			) : (
				<Wrapper>
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
	flex-wrap: wrap;
	margin-top: 4px;
	gap: 10px;
`;

const StyledChip = styled(Chip)`
	padding: 0px;
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.01rem;
	height: 28px;
	color: var(--chip-color);
	border: 1px solid var(--chip-color);
`;

const Description = styled.p`
	margin-top: 20px;
	font-size: 1.1rem;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: space-between;
	width: 100%;
	margin-top: 50px;
	padding: 40px;
	border: 1px solid var(--box-border-color);
	${mobileMediaQuery} {
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
	${desktopMediaQuery} {
		flex-direction: row;
	}
`;

const Title = styled.div`
	font-weight: 500;
	color: var(--font-color);
	display: flex;
	align-items: center;
	gap: 14px;
	font-size: 1.4rem;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const Icon = styled(SchoolIcon)`
	color: var(--font-color);
	width: 40px;
	height: 40px;
`;

const BaseButton = styled(Button)`
	display: flex;
	flex-direction: row;
	font-size: 1rem;
`;

const EditWrapper = styled.div`
	position: relative;
	font-size: 1.2rem;
`;

const EditButton = styled(BaseButton)`
	position: absolute;
	right: 0;
	font-size: 1rem;
	gap: 10px;
	${mobileMediaQuery} {
		position: fixed;
		right: 30px;
		bottom: 50px;
		font-size: 0.8rem;
		z-index: 1000;
	}
`;

export default QuizletDetailInfo;
