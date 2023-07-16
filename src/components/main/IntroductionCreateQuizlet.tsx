import { Button } from '@mui/material';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import styled from '@emotion/styled';
import SlideBox from './SlideBox';
import BoxTitle from './BoxTitle';
import AnimationCards from './AnimationCards';
import { useNavigate } from 'react-router-dom';

function IntroductionCreateQuizlet() {
	const navi = useNavigate();
	return (
		<SlideBox>
			<BoxTitle>{'나에게 딱! 맞는 학습세트 만들기'}</BoxTitle>

			<AnimationCards />

			<ResponsiveButton
				variant="contained"
				onClick={() => {
					navi('/quizlet/create');
				}}
			>
				학습세트 만들기
			</ResponsiveButton>
		</SlideBox>
	);
}

const ResponsiveButton = styled(Button)`
	width: 50%;
	${mobileMediaQuery} {
		font-size: 1rem;
	}
	${desktopMediaQuery} {
		font-size: 1.4rem;
	}
`;

export default IntroductionCreateQuizlet;
