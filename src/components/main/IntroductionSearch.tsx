import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';
import BoxTitle from './BoxTitle';
import SlideBox from './SlideBox';

function IntroductionSearch() {
	const navi = useNavigate();

	return (
		<SlideBox>
			<BoxTitle>{'원하는 학습 주제를 검색해보세요'}</BoxTitle>
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
	);
}

const GradientImage = styled.div`
	width: 100%;
	height: 400px;
	margin: 20px 0px;
	border-radius: 10px;
	background: linear-gradient(to bottom, transparent, var(--light-bg-color)),
		url('/public/images/search-page.png');
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
