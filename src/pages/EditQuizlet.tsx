import React from 'react';
import { useParams } from 'react-router-dom';
import { EditQuizletForm } from '../components';
import { StyledContainer, StyledTitle } from '../components/quizlet/styles';

function EditQuizlet() {
	const { quizletId } = useParams();

	// TODO: quizletId가 undefined인 경우 에러 처리

	return (
		<StyledContainer>
			<StyledTitle>학습세트 수정하기</StyledTitle>
			<React.Suspense fallback={<>"loading..."</>}>
				<EditQuizletForm quizletId={quizletId!} />
			</React.Suspense>
		</StyledContainer>
	);
}

export default EditQuizlet;
