import React from 'react';
import {
	FieldErrors,
	UseFieldArrayRemove,
	UseFormRegister,
} from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { CreateQuizletRequest } from '../../types/quizlet';
import StyledBox from './StyledBox';

interface QuestionCardFormProps {
	index: number;
	register: UseFormRegister<CreateQuizletRequest>;
	errors: FieldErrors<CreateQuizletRequest>;
	remove: UseFieldArrayRemove;
}

function QuestionCardForm({
	index,
	register,
	errors,
	remove,
}: QuestionCardFormProps) {
	return (
		<StyledBox key={index}>
			<TextField
				label="문제"
				variant="outlined"
				error={!!errors.questionCardList?.[index]?.question}
				helperText={errors.questionCardList?.[index]?.question?.message}
				{...register('description')}
				{...register(`questionCardList.${index}.question`)}
			/>
			<TextField
				label="링크"
				variant="outlined"
				error={!!errors.questionCardList?.[index]?.link}
				helperText={errors.questionCardList?.[index]?.link?.message}
				{...register(`questionCardList.${index}.link`)}
			/>
			<TextField
				label="정답"
				variant="outlined"
				multiline
				error={!!errors.questionCardList?.[index]?.answer}
				helperText={errors.questionCardList?.[index]?.answer?.message}
				{...register(`questionCardList.${index}.answer`)}
			/>
			<Button type="button" onClick={() => remove(index)}>
				삭제
			</Button>
		</StyledBox>
	);
}

export default QuestionCardForm;
