import {
	FieldErrors,
	UseFieldArrayRemove,
	UseFormRegister,
} from 'react-hook-form';
import { CreateQuizletRequest } from '../../types';
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
	register: UseFormRegister<CreateQuizletRequest>;
	errors: FieldErrors<CreateQuizletRequest>;
	remove: UseFieldArrayRemove;
}

function CreateQuestionCardInputField({
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
					error={!!errors['questionCardList']?.[index]?.question}
					helperText={errors['questionCardList']?.[index]?.question?.message}
					{...register(`questionCardList.${index}.question`)}
				/>
				<TextInput
					label="참고 링크"
					variant="outlined"
					error={!!errors['questionCardList']?.[index]?.link}
					helperText={errors['questionCardList']?.[index]?.link?.message}
					{...register(`questionCardList.${index}.link`)}
				/>
				<TextInput
					label="답안"
					variant="outlined"
					multiline
					error={!!errors['questionCardList']?.[index]?.answer}
					helperText={errors['questionCardList']?.[index]?.answer?.message}
					{...register(`questionCardList.${index}.answer`)}
				/>
			</QuestionCardContainer>
		</StyledBox>
	);
}

export default CreateQuestionCardInputField;
