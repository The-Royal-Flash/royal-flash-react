import React from 'react';
import {
	FieldErrors,
	UseFieldArrayRemove,
	UseFormRegister,
} from 'react-hook-form';
import styled from '@emotion/styled';
import { IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
	BaseQuizlet,
	CreateQuizletRequest,
	EditQuizletRequest,
} from '../../types';
import StyledBox from './styles/StyledBox';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

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
			<ButtonWrapper>
				<RemoveButton type="button" onClick={() => remove(index)}>
					<StyledCloseIcon />
				</RemoveButton>
			</ButtonWrapper>
			<Title>{`Question ${questionNumber}`}</Title>
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
					label="정답"
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

const Title = styled(Typography)`
	font-weight: 500;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 1.14rem;
		padding-top: 10px;
	}
	${desktopMediaQuery} {
		font-size: 1.6rem;
		padding-top: 20px;
	}
`;

const ButtonWrapper = styled.div`
	position: relative;
	width: 100%;
`;

const RemoveButton = styled(IconButton)`
	position: absolute;
	${mobileMediaQuery} {
		top: 14px;
		right: 14px;
	}
	${desktopMediaQuery} {
		top: 20px;
		right: 20px;
	}
`;

const StyledCloseIcon = styled(CloseIcon)`
	${mobileMediaQuery} {
		font-size: 1.8rem;
	}
	${desktopMediaQuery} {
		font-size: 2.2rem;
	}
`;

const TextInput = styled(TextField)`
	width: 100%;
	.MuiInputBase-root {
		background-color: #fff;
	}
`;

export default QuestionCardInputField;
