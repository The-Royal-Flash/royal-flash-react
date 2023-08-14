import {
	Control,
	Controller,
	FieldErrors,
	UseFormRegister,
} from 'react-hook-form';
import { CreateQuizletRequest } from '../../types';
import StyledBox from './styles/StyledBox';
import { QuizletInfoContainer, StyledChipsInput, TextInput } from './styles';

interface QuizletInfoInputFieldProps {
	register: UseFormRegister<CreateQuizletRequest>;
	control: Control<CreateQuizletRequest>;
	errors: FieldErrors<CreateQuizletRequest>;
}

function CreateQuizletInfoInputField({
	register,
	control,
	errors,
}: QuizletInfoInputFieldProps) {
	return (
		<StyledBox>
			<QuizletInfoContainer>
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
			</QuizletInfoContainer>
		</StyledBox>
	);
}

export default CreateQuizletInfoInputField;
