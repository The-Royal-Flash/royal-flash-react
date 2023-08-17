import { Control, Controller } from 'react-hook-form';
import { EditQuizletRequest } from '../../types';
import StyledBox from './styles/StyledBox';
import { QuizletInfoContainer, StyledChipsInput, TextInput } from './styles';

interface EditQuizletInfoInputFieldProps {
	control: Control<EditQuizletRequest>;
}

function EditQuizletInfoInputField({
	control,
}: EditQuizletInfoInputFieldProps) {
	return (
		<StyledBox>
			<QuizletInfoContainer>
				<Controller
					control={control}
					name="title"
					render={({ field, fieldState }) => (
						<TextInput
							{...field}
							label="제목"
							variant="outlined"
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
						/>
					)}
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
							validate={(chipValue: string) => !field.value.includes(chipValue)}
							error={fieldState.invalid}
						/>
					)}
				/>
				<Controller
					control={control}
					name="description"
					render={({ field, fieldState }) => (
						<TextInput
							label="설명"
							variant="outlined"
							multiline
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
							{...field}
						/>
					)}
				/>
			</QuizletInfoContainer>
		</StyledBox>
	);
}

export default EditQuizletInfoInputField;
