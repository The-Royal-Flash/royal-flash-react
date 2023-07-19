import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextField, Typography } from '@mui/material';
import { desktopMediaQuery, mobileMediaQuery } from '../utils/mediaQueries';
import { QuestionCardForm, QuizletForm } from '../components/quizlet';
import { Form, useNavigate } from 'react-router-dom';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createQuizletSchema } from '../schemas/quizletSchema';
import { CreateQuizletRequest } from '../types/quizlet';

function CreateQuizlet() {
	const navi = useNavigate();

	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm<CreateQuizletRequest>({
		resolver: zodResolver(createQuizletSchema),
		defaultValues: {
			title: '',
			description: '',
			tagList: [],
			questionCardList: [{ question: '', link: '', answer: '' }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'questionCardList',
	});

	const onSubmitHandler: SubmitHandler<CreateQuizletRequest> = async (data) => {
		const { title, description, tagList, questionCardList } = data;
		console.log(title, description, tagList, questionCardList);
	};

	return (
		<Container>
			<Title>새로운 학습세트 만들기</Title>
			<StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
				<QuizletForm register={register} control={control} errors={errors} />
				{fields.map((_, index) => (
					<QuestionCardForm
						key={index}
						index={index}
						register={register}
						errors={errors}
						remove={remove}
					/>
				))}
				<ButtonGroup>
					<Button
						type="button"
						variant="contained"
						onClick={() => append({ question: '', link: '', answer: '' })}
					>
						문제 추가
					</Button>
					<StyledButton type="submit" variant="contained">
						학습세트 생성
					</StyledButton>
					<StyledButton type="button" variant="outlined">
						취소
					</StyledButton>
				</ButtonGroup>
			</StyledForm>
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

const StyledForm = styled(Form)`
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
