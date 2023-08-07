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
import { deleteQuizlet, editQuizlet } from '../../api';
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
import { useToastContext } from '../../contexts/ToastContext';
import { TOAST_MSG_TYPE, TOAST_TYPE } from '../../constants/toast';

interface EditQuizletFormProps {
	quizletId: string;
}

const EditQuizletForm = ({ quizletId }: EditQuizletFormProps) => {
	const navigate = useNavigate();
	const { addToast } = useToastContext();

	const { data: oldData } = useQuery<QuizletResponse>(
		fetchQuizletQuery(quizletId),
	);

	const [oldQuestionList, setOldQuestionList] = useState<
		Array<QuestionCardInfo>
	>(oldData?.questionCardList || []);
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
			title: oldData?.title,
			description: oldData?.description,
			tagList: oldData?.tagList,
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
		const res = await editQuizlet(quizletId, { ...data, questionListToRemove });
		console.log(res);
		navigate(`/quizlet/detail/${quizletId}`);
	};

	const handleRemoveQuizlet = async () => {
		const {
			data: { isSuccess },
		} = await deleteQuizlet(quizletId);

		if (isSuccess) {
			addToast({
				type: TOAST_TYPE.SUCCESS,
				msg_type: TOAST_MSG_TYPE.SUCCESS_DELETE,
			});
			navigate(`/`);
		} else {
			addToast({
				type: TOAST_TYPE.ERROR,
				msg_type: TOAST_MSG_TYPE.FAIL_DELETE,
			});
			navigate(`/`);
		}
	};

	const goBack = () => navigate(-1);

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
