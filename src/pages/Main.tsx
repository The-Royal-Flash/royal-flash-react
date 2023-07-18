import React from 'react';
import styled from '@emotion/styled';
import {
	Introduction,
	IntroductionCreateQuizlet,
	IntroductionSearch,
} from '../components';

function Main() {
	return (
		<Container>
			<Introduction />
			{/* 검색 */}
			<IntroductionSearch />
			{/* TODO: 인기 목록 */}
			{/* TODO: 생성 */}
			<IntroductionCreateQuizlet />
			{/* 관리 */}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	margin: 50px 0;
`;

export default Main;
