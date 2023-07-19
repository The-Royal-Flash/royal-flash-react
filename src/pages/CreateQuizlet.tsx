import React, { useState } from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { desktopMediaQuery, mobileMediaQuery } from '../utils/mediaQueries';
import { createQuizlet } from '../api';

import { createQuizletSchema } from '../schemas/quizletSchema';
import { CreateQuizletRequest } from '../types/quizlet';
import { QuestionCardForm, QuizletForm } from '../components/quizlet';
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

		const res = await createQuizlet(data);
		// if (res.status === 200) {
		// const newQuizletId =
		// redirect(`/quizlet/detail/${newQuizletId}`);
		// }

		// TODO: 에러 처리
	};

	const goBack = () => navi(-1);

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
				<AddQuestionButton
					type="button"
					variant="contained"
					onClick={() => append({ question: '', link: '', answer: '' })}
				>
					<StyledAddIcon />
				</AddQuestionButton>

				<ButtonGroup>
					{errors.questionCardList && fields.length === 0 && (
						<ErrorMessage>{'하나 이상의 문제를 등록해 주세요.'}</ErrorMessage>
					)}
					<StyledButton type="submit" variant="contained">
						학습세트 생성
					</StyledButton>
					<StyledButton type="button" variant="outlined" onClick={goBack}>
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

const AddQuestionButton = styled(Button)`
	border-radius: 100%;
	margin-top: 20px;
	padding: 0px;
	${mobileMediaQuery} {
		min-width: 2.5rem;
		width: 2.5rem;
		height: 2.5rem;
	}
	${desktopMediaQuery} {
		min-width: 3rem;
		width: 3rem;
		height: 3rem;
	}
`;

const StyledAddIcon = styled(AddIcon)`
	padding: 0px;
	${mobileMediaQuery} {
		font-size: 1.3rem;
	}
	${desktopMediaQuery} {
		font-size: 1.7rem;
	}
`;

const ErrorMessage = styled.div`
	color: var(--warn-color);
	font-size: 1.1rem;
`;

export default CreateQuizlet;
