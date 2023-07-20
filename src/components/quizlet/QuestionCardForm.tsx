import React from 'react';
import {
	FieldErrors,
	UseFieldArrayRemove,
	UseFormRegister,
} from 'react-hook-form';
import { IconButton, Button, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { QuizletRequest } from '../../types/quizlet';
import StyledBox from './StyledBox';
import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

interface QuestionCardFormProps {
	index: number;
	register: UseFormRegister<QuizletRequest>;
	errors: FieldErrors<QuizletRequest>;
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
			<CloseButton type="button" onClick={() => remove(index)}>
				<StyledCloseIcon />
			</CloseButton>
			<Title>{`Question ${index + 1}`}</Title>
			<Wrapper>
				<TextInput
					label="문제"
					variant="outlined"
					error={!!errors.questionCardList?.[index]?.question}
					helperText={errors.questionCardList?.[index]?.question?.message}
					{...register(`questionCardList.${index}.question`)}
				/>
				<TextInput
					label="참고 링크"
					variant="outlined"
					error={!!errors.questionCardList?.[index]?.link}
					helperText={errors.questionCardList?.[index]?.link?.message}
					{...register(`questionCardList.${index}.link`)}
				/>
				<TextInput
					label="정답"
					variant="outlined"
					multiline
					error={!!errors.questionCardList?.[index]?.answer}
					helperText={errors.questionCardList?.[index]?.answer?.message}
					{...register(`questionCardList.${index}.answer`)}
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

const CloseButton = styled(IconButton)`
	position: relative;
	width: 100%;
`;

const StyledCloseIcon = styled(CloseIcon)`
	position: absolute;
	${mobileMediaQuery} {
		top: 14px;
		right: 14px;
		font-size: 1.8rem;
	}
	${desktopMediaQuery} {
		top: 20px;
		right: 20px;
		font-size: 2.2rem;
	}
`;

const TextInput = styled(TextField)`
	width: 100%;
	.MuiInputBase-root {
		background-color: #fff;
	}
`;

export default QuestionCardForm;
