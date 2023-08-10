import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import BoxTitle from './BoxTitle';
import SlideBox from './SlideBox';
import { FadeIn } from '../common';
import { useCheckInView } from '../../hooks';

function IntroductionSearch() {
	const navi = useNavigate();
	const { ref, isInView } = useCheckInView(0.5, true);

	return (
		<>
			<Container ref={ref}>
				{isInView && (
					<>
						<FadeIn index={1}>
							<Text>Royal Flash와 함께</Text>
						</FadeIn>
						<FadeIn index={2}>
							<Text>쉽고 빠른 학습 시작하기</Text>
						</FadeIn>
						<FadeIn index={3}>
							<Text>나에게 필요한 학습 세트를 찾아보세요!</Text>
						</FadeIn>
					</>
				)}
			</Container>
			<SlideBox>
				<BoxTitle>{'원하는 학습 주제를 검색해보세요.'}</BoxTitle>
				<Description>제목과 태그로 원하는 학습세트를 찾아보세요.</Description>
				<GradientImage />
				<ResponsiveButton
					variant="contained"
					onClick={() => {
						navi('/quizlet');
					}}
				>
					학습세트 검색하기
				</ResponsiveButton>
			</SlideBox>
		</>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	width: 100%;
	${mobileMediaQuery} {
		padding: 100px 0 70px;
		height: 300px;
	}
	${desktopMediaQuery} {
		padding-top: 150px;
		height: 400px;
	}
`;

const Text = styled(Typography)`
	font-weight: 500;
	color: var(--dark-gray);
	${mobileMediaQuery} {
		font-size: 1.4rem;
	}
	${desktopMediaQuery} {
		font-size: 1.7rem;
	}
`;

const Description = styled(Typography)`
	color: var(--gray-2);
	${mobileMediaQuery} {
		font-size: 0.9rem;
		margin: 15px 0 10px;
	}
	${desktopMediaQuery} {
		font-size: 1.3rem;
		margin: 30px 0 20px;
	}
`;

const GradientImage = styled.div`
	width: 100%;
	height: 400px;
	margin: 20px 0px;
	border-radius: 10px;
	background: linear-gradient(to bottom, transparent, var(--box-bg-color)),
		url('/images/search-page.png');
	background-size: cover;
	background-position: top;
	${mobileMediaQuery} {
		height: 150px;
	}
	${desktopMediaQuery} {
		@media (max-width: 900px) {
			height: 240px;
		}
		height: 400px;
	}
`;

const ResponsiveButton = styled(Button)`
	width: 50%;
	${mobileMediaQuery} {
		font-size: 1rem;
	}
	${desktopMediaQuery} {
		font-size: 1.4rem;
	}
`;

export default IntroductionSearch;
