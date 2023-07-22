import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateQuizletRequest } from '../../types';
import { createQuizletSchema } from '../../schemas/quizletSchema';
import { createQuizlet } from '../../api';
import { QuestionCardInputField, QuizletInfoInputField } from '.';
import {
	AddQuestionButton,
	ErrorMessage,
	StyledAddIcon,
	StyledButton,
	StyledForm,
	ButtonGroup,
} from './styles';

function CreateQuizletForm() {
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

	const handleOnSubmit: SubmitHandler<CreateQuizletRequest> = async (data) => {
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
		<StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
			<QuizletInfoInputField
				register={register}
				control={control}
				errors={errors}
			/>

			{fields.map((field, index) => (
				<QuestionCardInputField
					key={field.id}
					index={index}
					questionNumber={index}
					listName="questionCardList"
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
	);
}

export default CreateQuizletForm;
