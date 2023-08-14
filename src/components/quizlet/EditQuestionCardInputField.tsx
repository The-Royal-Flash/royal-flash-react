import {
	FieldErrors,
	UseFieldArrayRemove,
	UseFormRegister,
} from 'react-hook-form';
import { EditQuizletRequest } from '../../types';
import {
	StyledBox,
	QuestionCardRemoveButton,
	QuestionCardTitle,
	QuestionCardContainer,
	TextInput,
} from './styles';

export interface QuestionCardInputFieldProps {
	index: number;
	questionNumber: number;
	register: UseFormRegister<EditQuizletRequest>;
	errors: FieldErrors<EditQuizletRequest>;
	remove: UseFieldArrayRemove;
}

function EditQuestionCardInputField({
	index,
	questionNumber,
	register,
	errors,
	remove,
}: QuestionCardInputFieldProps) {
	return (
		<StyledBox>
			<QuestionCardRemoveButton handleOnClick={() => remove(index)} />
			<QuestionCardTitle>{`Question ${questionNumber}`}</QuestionCardTitle>
			<QuestionCardContainer>
				<TextInput
					label="문제"
					variant="outlined"
					error={!!errors['questionCardListToAdd']?.[index]?.question}
					helperText={
						errors['questionCardListToAdd']?.[index]?.question?.message
					}
					{...register(`questionCardListToAdd.${index}.question`)}
				/>
				<TextInput
					label="참고 링크"
					variant="outlined"
					error={!!errors['questionCardListToAdd']?.[index]?.link}
					helperText={errors['questionCardListToAdd']?.[index]?.link?.message}
					{...register(`questionCardListToAdd.${index}.link`)}
				/>
				<TextInput
					label="답안"
					variant="outlined"
					multiline
					error={!!errors['questionCardListToAdd']?.[index]?.answer}
					helperText={errors['questionCardListToAdd']?.[index]?.answer?.message}
					{...register(`questionCardListToAdd.${index}.answer`)}
				/>
			</QuestionCardContainer>
		</StyledBox>
	);
}

export default EditQuestionCardInputField;
