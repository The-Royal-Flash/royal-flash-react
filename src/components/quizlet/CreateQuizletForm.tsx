import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateQuizletRequest } from '../../types';
import { createQuizletSchema } from '../../schemas/quizletSchema';
import { createQuizlet } from '../../api';
import { CreateQuestionCardInputField, CreateQuizletInfoInputField } from '.';
import {
	AddQuestionButton,
	ErrorMessage,
	StyledAddIcon,
	StyledButton,
	StyledForm,
	ButtonGroup,
	StyledLoadingButton,
} from './styles';

function CreateQuizletForm() {
	const navi = useNavigate();

	const {
		handleSubmit,
		register,
		control,
		formState: { errors, isSubmitting },
	} = useForm<CreateQuizletRequest>({
		resolver: zodResolver(createQuizletSchema),
		defaultValues: {
			title: '',
			description: '',
			tagList: [],
			questionCardList: [{ question: '', link: '', answer: '' }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'questionCardList',
	});

	const handleOnSubmit: SubmitHandler<CreateQuizletRequest> = async (data) => {
		const res = await createQuizlet(data);
		if (res.status === 200 && res.data.newQuizletId) {
			navi(`/quizlet/detail/${res.data.newQuizletId}`);
		}

		// TODO: 에러 처리
	};

	const goBack = () => navi(-1);
	return (
		<StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
			<CreateQuizletInfoInputField control={control} />

			{fields.map((field, index) => (
				<CreateQuestionCardInputField
					key={field.id}
					index={index}
					questionNumber={index + 1}
					register={register}
					errors={errors}
					remove={remove}
				/>
			))}
			<AddQuestionButton
				name="문제 추가"
				type="button"
				variant="contained"
				onClick={() => append({ question: '', link: '', answer: '' })}
			>
				<StyledAddIcon />
			</AddQuestionButton>

			<ButtonGroup>
				{errors.questionCardList && fields.length === 0 && (
					<ErrorMessage>{'하나 이상의 문제를 등록해 주세요.'}</ErrorMessage>
				)}
				{!isSubmitting ? (
					<>
						<StyledButton
							name="학습세트 생성"
							type="submit"
							variant="contained"
						>
							학습세트 생성
						</StyledButton>
						<StyledButton
							name="학습세트 생성 취소"
							type="button"
							variant="outlined"
							onClick={goBack}
						>
							취소
						</StyledButton>
					</>
				) : (
					<StyledLoadingButton />
				)}
			</ButtonGroup>
		</StyledForm>
	);
}

export default CreateQuizletForm;
