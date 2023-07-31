import React from 'react';
import {
	FieldErrors,
	UseFieldArrayRemove,
	UseFormRegister,
} from 'react-hook-form';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import {
	BaseQuizlet,
	CreateQuizletRequest,
	EditQuizletRequest,
} from '../../types';
import { desktopMediaQuery, mobileMediaQuery } from '../../mediaQueries';
import {
	StyledBox,
	QuestionCardRemoveButton,
	QuestionCardTitle,
} from './styles';

export interface QuestionCardInputFieldProps<T extends BaseQuizlet> {
	index: number;
	questionNumber: number;
	listName: 'questionCardList' | 'questionCardListToAdd';
	register: UseFormRegister<T>;
	errors: FieldErrors<T>;
	remove: UseFieldArrayRemove;
}

function QuestionCardInputField(
	props: QuestionCardInputFieldProps<CreateQuizletRequest>,
): JSX.Element;
function QuestionCardInputField(
	props: QuestionCardInputFieldProps<EditQuizletRequest>,
): JSX.Element;
function QuestionCardInputField({
	index,
	questionNumber,
	listName,
	register,
	errors,
	remove,
}: QuestionCardInputFieldProps<BaseQuizlet>) {
	return (
		<StyledBox>
			<QuestionCardRemoveButton handleOnClick={() => remove(index)} />
			<QuestionCardTitle>{`Question ${questionNumber}`}</QuestionCardTitle>
			<Wrapper>
				<TextInput
					label="문제"
					variant="outlined"
					error={!!errors[`${listName}`]?.[index]?.question}
					helperText={errors[`${listName}`]?.[index]?.question?.message}
					{...register(`${listName}.${index}.question`)}
				/>
				<TextInput
					label="참고 링크"
					variant="outlined"
					error={!!errors[`${listName}`]?.[index]?.link}
					helperText={errors[`${listName}`]?.[index]?.link?.message}
					{...register(`${listName}.${index}.link`)}
				/>
				<TextInput
					label="답안"
					variant="outlined"
					multiline
					error={!!errors[`${listName}`]?.[index]?.answer}
					helperText={errors[`${listName}`]?.[index]?.answer?.message}
					{...register(`${listName}.${index}.answer`)}
				/>
			</Wrapper>
		</StyledBox>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	${mobileMediaQuery} {
		padding: 10px 15px 30px;
		gap: 10px;
		margin-top: 10px;
	}
	${desktopMediaQuery} {
		padding: 20px 40px 50px;
		gap: 20px;
	}
`;

const TextInput = styled(TextField)`
	width: 100%;
	.MuiInputBase-root {
		background-color: #fff;
	}
`;

export default QuestionCardInputField;
