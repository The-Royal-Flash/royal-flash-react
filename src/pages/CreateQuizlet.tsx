import React from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { desktopMediaQuery, mobileMediaQuery } from '../utils/mediaQueries';
import { QuestionCardForm, QuizletForm } from '../components/quizlet';

function CreateQuizlet() {
	return (
		<Container>
			<Title>새로운 학습세트 만들기</Title>
			<Form>
				<QuizletForm />
				<QuestionCardForm />
			</Form>
			<ButtonGroup>
				<StyledButton variant="contained" type="submit">
					학습세트 생성
				</StyledButton>
				<StyledButton variant="outlined" type="submit">
					취소
				</StyledButton>
			</ButtonGroup>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled(Typography)`
	margin-top: 50px;
	font-weight: 600;
	word-break: keep-all;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 1.1rem;
	}
	${desktopMediaQuery} {
		font-size: 1.4rem;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 50px;
	gap: 10px;
`;

const StyledButton = styled(Button)`
	width: 50%;
	${mobileMediaQuery} {
		font-size: 1rem;
	}
	${desktopMediaQuery} {
		font-size: 1.4rem;
	}
`;

export default CreateQuizlet;
