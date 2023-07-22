import React from 'react';
import {
	Control,
	Controller,
	FieldErrors,
	UseFormRegister,
} from 'react-hook-form';
import styled from '@emotion/styled';
import { MuiChipsInput } from 'mui-chips-input';
import { TextField } from '@mui/material';
import {
	BaseQuizlet,
	CreateQuizletRequest,
	EditQuizletRequest,
} from '../../types';
import StyledBox from './StyledBox';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

interface QuizletInfoInputFieldProps<T extends BaseQuizlet> {
	register: UseFormRegister<T>;
	control: Control<T>;
	errors: FieldErrors<T>;
}

function QuizletInfoInputField(
	props: QuizletInfoInputFieldProps<CreateQuizletRequest>,
): JSX.Element;
function QuizletInfoInputField(
	props: QuizletInfoInputFieldProps<EditQuizletRequest>,
): JSX.Element;
function QuizletInfoInputField({ register, control, errors }: BaseQuizlet) {
	return (
		<StyledBox>
			<Wrapper>
				<TextInput
					label="제목"
					variant="outlined"
					error={!!errors.title}
					helperText={errors.title?.message}
					{...register('title')}
				/>
				<Controller
					control={control}
					name={'tagList'}
					render={({ field, fieldState }) => (
						<StyledChipsInput
							label="태그 목록"
							placeholder="관련 태그를 입력 후 엔터를 눌러주세요."
							variant="outlined"
							{...field}
							error={fieldState.invalid}
						/>
					)}
				/>
				<TextInput
					label="설명"
					variant="outlined"
					multiline
					error={!!errors.description}
					helperText={errors.description?.message}
					{...register('description')}
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
		padding: 30px 15px;
		gap: 10px;
	}
	${desktopMediaQuery} {
		padding: 50px 40px;
		gap: 20px;
	}
`;

const TextInput = styled(TextField)`
	width: 100%;
	.MuiInputBase-root {
		background-color: #fff;
	}
`;

const StyledChipsInput = styled(MuiChipsInput)`
	width: 100%;
	.MuiInputBase-root {
		background-color: #fff;
	}
`;

export default QuizletInfoInputField;
