import React, { useState } from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import { zodResolver } from '@hookform/resolvers/zod';
import { editQuizletSchema, quizletSchema } from '../../schemas/quizletSchema';
import { QuizletEditRequest, QuizletRequest } from '../../types/quizlet';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { editQuizlet } from '../../api';
import QuizletForm from './QuizletForm';
import { useQuery } from '@tanstack/react-query';
import { fetchQuizletQuery } from '../../queries';
import QuestionCardForm from './QuestionCardForm';
import RemoveQuestionCard from './RemoveQuestionCard';

interface EditQuizletFormProps {
	quizletId: string;
}

const EditQuizletForm = ({ quizletId }: EditQuizletFormProps) => {
	const navi = useNavigate();

	const { data: oldData } = useQuery(fetchQuizletQuery(quizletId));
	const [numOfQuestions, setNumOfQuestion] = useState(
		oldData?.quizlet?.questionCardList.length || 0,
	);
	const [questionListToRemove, setQuestionListToRemove] = useState<string[]>(
		[],
	);

	console.log(oldData);

	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm<QuizletEditRequest>({
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
	};

	const handleOnSubmit: SubmitHandler<QuizletEditRequest> = async (data) => {
		console.log(data, questionListToRemove);
		const reqData = { ...data, questionListToRemove };

		// const res = await editQuizlet(reqData);
		// if (res.status === 200) {
		// const newQuizletId =
		// redirect(`/quizlet/detail/${newQuizletId}`);
		// }

		// TODO: 에러 처리
	};

	const handleRemoveQuizlet = () => {
		// TODO: 학습세트 삭제
		// redirect('/')
	};

	const goBack = () => navi(-1);

	return (
		<StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
			{/* TODO: TypeScript - QuizletFormProps의 QuizletRequest 타입 변경 방법 */}
			{/* <QuizletForm register={register} control={control} errors={errors} /> */}

			{oldData?.quizlet.questionCardList.map(
				({ _id, ...questionInfo }, index) => (
					<RemoveQuestionCard
						key={_id}
						index={index + 1}
						questionId={_id}
						handleRemove={handleAddQuestionListToRemove}
						{...questionInfo}
					/>
				),
			)}

			{/* TODO: TypeScript - QuestionCardFormProps의 QuizletRequest 타입 변경 방법 */}
			{/* {fields.map((_, index) => (
				<QuestionCardForm
					key={index}
					index={index}
					register={register}
					errors={errors}
					remove={remove}
				/>
			))} */}
			<AddQuestionButton
				type="button"
				variant="contained"
				onClick={() => append({ question: '', link: '', answer: '' })}
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

export default EditQuizletForm;
