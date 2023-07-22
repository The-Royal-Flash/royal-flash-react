import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	QuestionCardInfo,
	EditQuizletRequest,
	QuizletResponse,
} from '../../types';
import { editQuizletSchema } from '../../schemas/quizletSchema';
import { editQuizlet } from '../../api';
import { fetchQuizletQuery } from '../../queries';
import {
	QuestionCardInputField,
	QuizletInfoInputField,
	RemoveQuestionCard,
} from '.';
import {
	AddQuestionButton,
	ErrorMessage,
	StyledAddIcon,
	StyledButton,
	StyledForm,
	ButtonGroup,
} from './styles';

interface EditQuizletFormProps {
	quizletId: string;
}

const EditQuizletForm = ({ quizletId }: EditQuizletFormProps) => {
	const navi = useNavigate();

	const { data: oldData } = useQuery<QuizletResponse>(
		fetchQuizletQuery(quizletId),
	);
	const [oldQuestionList, setOldQuestionList] = useState<
		Array<QuestionCardInfo>
	>(oldData?.quizlet.questionCardList || []);
	const [questionListToRemove, setQuestionListToRemove] = useState<string[]>(
		[],
	);

	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm<EditQuizletRequest>({
		resolver: zodResolver(editQuizletSchema),
		defaultValues: {
			title: oldData?.quizlet.title,
			description: oldData?.quizlet.description,
			tagList: oldData?.quizlet.tagList,
			questionListToRemove: [],
			questionCardListToAdd: [],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'questionCardListToAdd',
	});

	const handleAddQuestionListToRemove = (questionId: string) => {
		setQuestionListToRemove((prevQuestionListToRemove) => [
			...prevQuestionListToRemove,
			questionId,
		]);
		setOldQuestionList((prevOldQuestionList) =>
			prevOldQuestionList.filter(({ _id }) => _id !== questionId),
		);
	};

	const handleAddNewQuestion = () => {
		append({ question: '', link: '', answer: '' });
	};

	const handleOnSubmit: SubmitHandler<EditQuizletRequest> = async (data) => {
		console.log(data, questionListToRemove);
		const reqData = { ...data, questionListToRemove };
		const res = await editQuizlet(quizletId, reqData);
		if (res.status === 200) {
			navi(`/quizlet/detail/${quizletId}`);
		}
		// TODO: 에러 처리
	};

	const handleRemoveQuizlet = () => {
		// TODO: 학습세트 삭제
		// redirect('/')
	};

	const goBack = () => navi(-1);

	return (
		<StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
			<QuizletInfoInputField
				register={register}
				control={control}
				errors={errors}
			/>
			{oldQuestionList.map(({ _id, ...questionInfo }, index) => (
				<RemoveQuestionCard
					key={_id}
					index={index}
					questionId={_id}
					handleRemove={handleAddQuestionListToRemove}
					{...questionInfo}
				/>
			))}
			{fields.map((field, index) => (
				<QuestionCardInputField
					key={field.id}
					index={index}
					questionNumber={oldQuestionList.length + index + 1}
					listName="questionCardListToAdd"
					register={register}
					errors={errors}
					remove={remove}
				/>
			))}
			<AddQuestionButton
				type="button"
				variant="contained"
				onClick={handleAddNewQuestion}
			>
				<StyledAddIcon />
			</AddQuestionButton>
			<ButtonGroup>
				{errors.questionCardListToAdd && fields.length === 0 && (
					<ErrorMessage>{'하나 이상의 문제를 등록해 주세요.'}</ErrorMessage>
				)}
				<StyledButton type="submit" variant="contained">
					수정
				</StyledButton>
				<StyledButton type="button" variant="outlined" onClick={goBack}>
					취소
				</StyledButton>
				<StyledButton
					type="button"
					variant="outlined"
					color="error"
					onClick={handleRemoveQuizlet}
				>
					삭제
				</StyledButton>
			</ButtonGroup>
		</StyledForm>
	);
};

export default EditQuizletForm;
