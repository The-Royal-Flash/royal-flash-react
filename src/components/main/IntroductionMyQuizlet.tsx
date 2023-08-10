import styled from '@emotion/styled';
import { Grow, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import RuleIcon from '@mui/icons-material/Rule';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import { useCheckInView } from '../../hooks';

function IntroductionMyQuizlet() {
	const { ref, isInView } = useCheckInView(0.5, true);

	return (
		<Container>
			<Wrapper ref={ref}>
				<Grow in={isInView} timeout={1000}>
					<Title>
						<MyQuizletIcon />
						나의 학습
					</Title>
				</Grow>
				<Grow in={isInView} timeout={2000}>
					<Text>내가 공부한 학습세트를 한눈에 조회하고 관리하세요.</Text>
				</Grow>
				<Grow in={isInView} timeout={3000}>
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
			{/* TODO: MyQuizlet 완료 후 이미지 변경 */}
			<Image src="/images/myquizlet.png" />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 100px;
	${mobileMediaQuery} {
		margin-top: 80px;
		flex-direction: column;
		gap: 30px;
	}
	${desktopMediaQuery} {
		margin-top: 200px;
		flex-direction: row;
		height: 400px;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	gap: 8px;
	${mobileMediaQuery} {
		padding-top: 50px;
		align-items: center;
	}
	${desktopMediaQuery} {
		padding-left: 40px;
	}
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

const Wrapper = styled(TextWrapper)`
	justify-content: flex-start;
	padding: 30px;
`;

const Image = styled.img`
	${mobileMediaQuery} {
		width: 70%;
	}
	${desktopMediaQuery} {
		width: calc(50% - 50px);
		padding: 0 25px;
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
		width: 90%;
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
