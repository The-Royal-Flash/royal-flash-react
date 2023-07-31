import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import SlideBox from './SlideBox';
import BoxTitle from './BoxTitle';
import AnimationCardSetList from './AnimationCardSetList';

function IntroductionCreateQuizlet() {
	const navi = useNavigate();
	return (
		<SlideBox>
			<BoxTitle>{'나에게 딱! 맞는 학습세트 만들기'}</BoxTitle>

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
