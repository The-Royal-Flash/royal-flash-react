import styled from '@emotion/styled';
import { Grow, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import RuleIcon from '@mui/icons-material/Rule';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import { useCheckInView } from '../../hooks';
import StudyLog from '../quizlet/StudyLog';

function IntroductionMyQuizlet() {
	const { ref: titleRef, isInView: isTitleInView } = useCheckInView(0.4, true);
	const { ref, isInView } = useCheckInView(0.4, true);
	const { ref: studyLogRef, isInView: isStudyLogInView } = useCheckInView(
		0.4,
		true,
	);

	return (
		<Container>
			<div ref={titleRef}>
				<Grow in={isTitleInView} timeout={1000}>
					<Title>
						<MyQuizletIcon />
						나의 학습
					</Title>
				</Grow>
				<Grow in={isTitleInView} timeout={1500}>
					<Text>나의 학습세트를 한눈에 조회하고 관리하세요.</Text>
				</Grow>
			</div>

			<IntroWrapper ref={ref}>
				<Wrapper>
					<Grow in={isInView} timeout={2000}>
						<ListWrapper>
							<TextItem>
								<DoneOutlineIcon />
								학습 횟수
							</TextItem>
							<TextItem>
								<CalendarMonthIcon />
								학습 일시
							</TextItem>
							<TextItem>
								<RuleIcon />
								최근 학습 점수
							</TextItem>
						</ListWrapper>
					</Grow>
				</Wrapper>
				<Grow in={isInView} timeout={2000}>
					<ImageWrapper>
						{/* TODO: MyQuizlet 완료 후 이미지 변경 */}
						<Image src="/images/myquizlet.png" />
					</ImageWrapper>
				</Grow>
			</IntroWrapper>
			<div ref={studyLogRef}>
				<Grow in={isStudyLogInView} timeout={2500}>
					<StudyLogWrapper>
						<Text>학습 중인 학습 현황을 한눈에 확인하세요.</Text>
						<StudyLog
							studyLog={{
								studyCount: 5,
								numOfQuestionList: 100,
								numOfQuestionListToReview: 12,
								numOfQuestionListToCorrect: 88,
								lastQuizDate: '2023-01-20',
							}}
						/>
					</StudyLogWrapper>
				</Grow>
			</div>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	padding: 100px 40px 150px;
`;

const IntroWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 50px;
	${mobileMediaQuery} {
		margin-top: 30px;
		flex-direction: column;
		gap: 20px;
	}
	${desktopMediaQuery} {
		margin-top: 50px;
		flex-direction: row;
		justify-content: center;
	}
`;

const StudyLogWrapper = styled.div`
	${mobileMediaQuery} {
		padding: 10px;
	}
	${desktopMediaQuery} {
		padding: 0px;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	gap: 8px;
	${mobileMediaQuery} {
		width: 100%;
		align-items: center;
	}
	${desktopMediaQuery} {
		width: calc(50% - 50px);
	}
`;

const Wrapper = styled(TextWrapper)`
	display: flex;
	justify-content: flex-start;
	height: 100%;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	font-weight: 700;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 1.6rem;
	}
	${desktopMediaQuery} {
		font-size: 1.9rem;
	}
`;

const Text = styled(Typography)`
	font-weight: 400;
	color: var(--gray-3);
	word-break: keep-all;
	${mobileMediaQuery} {
		font-size: 1.4rem;
	}
	${desktopMediaQuery} {
		font-size: 1.5rem;
	}
`;

const ImageWrapper = styled.div`
	${mobileMediaQuery} {
		width: 100%;
		display: flex;
		justify-content: center;
		padding-bottom: 40px;
	}
	${desktopMediaQuery} {
		width: calc(50% - 50px);
		padding: 0 25px;
	}
`;

const Image = styled.img`
	${mobileMediaQuery} {
		width: 80%;
	}
	${desktopMediaQuery} {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const MyQuizletIcon = styled(AutoStoriesIcon)`
	${mobileMediaQuery} {
		font-size: 1.7rem;
	}
	${desktopMediaQuery} {
		font-size: 2rem;
	}
	margin-right: 10px;
`;

const ListWrapper = styled.div`
	margin-top: 30px;
	border: 1px dashed var(--gray-2);
	border-radius: 10px;
	padding: 20px;
	${mobileMediaQuery} {
		width: 70%;
	}
	${desktopMediaQuery} {
		width: 100%;
	}
`;

const TextItem = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	font-weight: 500;
	color: var(--gray-3);
	word-break: keep-all;
	${mobileMediaQuery} {
		font-size: 1.1rem;
	}
	${desktopMediaQuery} {
		font-size: 1.3rem;
	}
`;

export default IntroductionMyQuizlet;
