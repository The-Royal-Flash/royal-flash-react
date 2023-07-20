import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import { desktopMediaQuery, mobileMediaQuery } from '../utils/mediaQueries';
import { Typography } from '@mui/material';
import EditQuizletForm from '../components/quizlet/EditQuizletForm';

function EditQuizlet() {
	const { quizletId } = useParams();

	// TODO: quizletId가 undefined인 경우 에러 처리

	return (
		<Container>
			<Title>학습세트 수정하기</Title>
			<React.Suspense fallback={<>"loading..."</>}>
				<EditQuizletForm quizletId={quizletId!} />
			</React.Suspense>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	${mobileMediaQuery} {
		margin: 20px 0px;
	}
	${desktopMediaQuery} {
		margin: 50px 0px 60px;
	}
`;

const Title = styled(Typography)`
	font-weight: 600;
	word-break: keep-all;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 1.4rem;
	}
	${desktopMediaQuery} {
		font-size: 1.8rem;
	}
`;

export default EditQuizlet;
