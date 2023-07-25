import React from 'react';
import styled from '@emotion/styled';
import {
	useController,
	UseFormRegister,
	Path,
	Control,
	UseFormTrigger,
} from 'react-hook-form';
import { useDebounce } from '../../hooks';
import { signupSchema } from '../../schemas/authSchema';
import { TextField } from '@mui/material';
import { AuthLabels } from '../../constants';

interface InputFieldProps {
	variant?: string;
	isPassword?: boolean;
	trigger: UseFormTrigger<signupSchema>;
	name: Path<signupSchema>;
	register: UseFormRegister<signupSchema>;
	control: Control<signupSchema>;
	uniqueState?: boolean;
	checkState?: boolean;
	checkForDuplicate?: (
		event: React.MouseEvent<HTMLSpanElement>,
		dataType: string,
	) => Promise<void>;
}

function FormInput({
	variant = 'unwrapped',
	isPassword = false,
	register,
	name,
	control,
	trigger,
	uniqueState,
	checkState,
	checkForDuplicate,
}: InputFieldProps) {
	const {
		field: { value, onChange },
		fieldState: { isDirty, error },
	} = useController({
		name,
		control,
		defaultValue: '',
	});

	const debouncedOnChange = useDebounce(() => trigger(name), 200);
	const debouncedOnChangeForCP = useDebounce(
		() => trigger('confirmPassword' as Path<signupSchema>),
		200,
	);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);

		debouncedOnChange();
		if (name === 'password') debouncedOnChangeForCP();
	};

	return variant === 'unwrapped' ? (
		<StyledTextField
			required
			id={`${name}-input`}
			label={AuthLabels[name]}
			variant="outlined"
			value={value}
			name={name}
			error={isDirty && error ? true : false}
			helperText={isDirty && error ? error?.message : null}
			onChange={handleInputChange}
			type={isPassword ? 'password' : ''}
		/>
	) : (
		<InputButtonWrapper>
			<StyledTextField
				required
				id={`${name}-input`}
				label={AuthLabels[name]}
				variant="outlined"
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

	:hover {
		color: var(--font-color);
	}

	:disabled {
		color: lightgray;
	}
`;

const StyledTextField = styled(TextField)`
	min-width: 80%;
`;

const InputButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default FormInput;
