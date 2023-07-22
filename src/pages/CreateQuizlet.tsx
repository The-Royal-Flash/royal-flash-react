import React from 'react';
import { CreateQuizletForm } from '../components';
import { StyledContainer, StyledTitle } from '../components/quizlet/styles';

function CreateQuizlet() {
	return (
		<StyledContainer>
			<StyledTitle>새로운 학습세트 만들기</StyledTitle>
			<CreateQuizletForm />
		</StyledContainer>
	);
}

export default CreateQuizlet;
