import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import SlideBox from './SlideBox';
import BoxTitle from './BoxTitle';
import AnimationCardSetList from './AnimationCardSetList';
import { FadeIn, SlideScroll } from '../common';
import { useCheckInView } from '../../hooks';

function IntroductionCreateQuizlet() {
	const navi = useNavigate();
	const { ref, isInView } = useCheckInView(0.4, true);

	return (
		<>
			<Container ref={ref}>
				<Text />
				{isInView && (
					<>
						<FadeIn index={1}>
							<Text>나에게 맞는 학습세트</Text>
						</FadeIn>
						<FadeIn index={2}>
							<Text>기다릴 필요 없이</Text>
						</FadeIn>
						<FadeIn index={3}>
							<Text>손쉽게 만들어보세요.</Text>
						</FadeIn>
					</>
				)}
			</Container>
			<SlideBox>
				<SlideScroll>
					<BoxTitle>{'나에게 딱! 맞는 학습세트 만들기'}</BoxTitle>
				</SlideScroll>

				<AnimationCardSetList />

				<ResponsiveButton
					variant="contained"
					onClick={() => {
						navi('/quizlet/create');
					}}
				>
					학습세트 만들기
				</ResponsiveButton>
			</SlideBox>
		</>
	);
}

const Container = styled.div`
	display: flex;
	width: 100%;
	min-height: 100px;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
	${mobileMediaQuery} {
		padding: 100px 50px 10px;
		height: 250px;
	}
	${desktopMediaQuery} {
		padding: 200px 50px 10px;
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

const ResponsiveButton = styled(Button)`
	width: 50%;
	${mobileMediaQuery} {
		font-size: 1.1rem;
	}
	${desktopMediaQuery} {
		font-size: 1.3rem;
	}
`;

export default IntroductionCreateQuizlet;
