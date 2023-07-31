import React from 'react';
import styled from '@emotion/styled';
import {
	useController,
	UseFormRegister,
	Path,
	Control,
	UseFormTrigger,
	FieldValues,
	PathValue,
} from 'react-hook-form';
import { useDebounce } from '../../hooks';
import { TextField } from '@mui/material';
import { AUTH_LABELS } from '../../constants';

interface InputFieldProps<TSchema extends FieldValues> {
	variant?: string;
	isOutlined?: boolean;
	isPassword?: boolean;
	trigger: UseFormTrigger<TSchema>;
	name: Path<TSchema>;
	register: UseFormRegister<TSchema>;
	control: Control<TSchema>;
	uniqueState?: boolean;
	checkState?: boolean;
	checkForDuplicate?: (
		event: React.MouseEvent<HTMLSpanElement>,
		dataType: string,
	) => Promise<void>;
}

function FormInput<TSchema extends {}>({
	variant = 'unwrapped',
	isOutlined = true,
	isPassword = false,
	register,
	name,
	control,
	trigger,
	uniqueState,
	checkState,
	checkForDuplicate,
}: InputFieldProps<TSchema>) {
	const {
		field: { onChange },
		fieldState: { isDirty, error },
	} = useController({
		name,
		control,
	});

	const debouncedOnChange = useDebounce(() => trigger(name), 200);
	const debouncedOnChangeForCP = useDebounce(
		() => trigger('confirmPassword' as Path<TSchema>),
		200,
	);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(
			event.target.value as
				| PathValue<TSchema, Path<TSchema>>
				| React.ChangeEvent<Element>,
		);

		debouncedOnChange();
		if (name === 'password') debouncedOnChangeForCP();
	};

	return variant === 'unwrapped' ? (
		<StyledTextField
			required
			id={`${name}-input`}
			label={AUTH_LABELS[name as string]}
			variant={isOutlined ? 'outlined' : 'standard'}
			name={name}
			error={isDirty && error ? true : false}
			helperText={isDirty && error ? error?.message : null}
			onChange={handleInputChange}
			type={isPassword ? 'password' : ''}
			disabled={uniqueState}
		/>
	) : (
		<InputButtonWrapper>
			<StyledTextField
				required
				id={`${name}-input`}
				label={AUTH_LABELS[name as string]}
				variant={isOutlined ? 'outlined' : 'standard'}
				{...register(name)}
				error={isDirty && error ? true : false}
				helperText={
					uniqueState
						? `사용 가능한 ${name === 'email' ? '이메일' : '닉네임'}입니다.`
						: checkState && !uniqueState
						? `중복된 ${name === 'email' ? '이메일' : '닉네임'}입니다.`
						: error?.message
						? error.message
						: ''
				}
				disabled={uniqueState}
				onChange={handleInputChange}
			/>
			<DuplicateChecker
				onClick={
					checkForDuplicate
						? async (event) => await checkForDuplicate(event, name)
						: () => {}
				}
				disabled={uniqueState}
			>
				중복확인
			</DuplicateChecker>
		</InputButtonWrapper>
	);
}

const DuplicateChecker = styled.button`
	cursor: pointer;
	background-color: #fff;
	border: none;
	transition: 0.1s ease-in;
	color: gray;
	font-size: 12px;
	min-width: 70px;

	:hover {
		color: var(--font-color);
	}

	:disabled {
		color: lightgray;
	}
`;

const StyledTextField = styled(TextField)`
	min-width: 80%;
	width: 100%;
`;

const InputButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default FormInput;
