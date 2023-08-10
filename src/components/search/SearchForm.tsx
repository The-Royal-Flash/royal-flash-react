import { Form } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { Autocomplete, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchRequest } from '../../types';

interface SearchFormProps {
	tagList: string[];
	onSubmit: SubmitHandler<SearchRequest>;
}

function SearchForm({ tagList, onSubmit }: SearchFormProps) {
	const { handleSubmit, register, control } = useForm<SearchRequest>({
		defaultValues: {
			keyword: '',
			tagList: [],
		},
	});

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<SearchWrapper>
				<StyledInput label="Search" {...register('keyword')} />
				<SearchButton type="submit" variant="contained">
					<SearchButtonIcon />
				</SearchButton>
			</SearchWrapper>
			<Controller
				name="tagList"
				control={control}
				render={({ field }) => (
					<Autocomplete
						{...field}
						multiple={true}
						options={tagList}
						getOptionLabel={(option) => option}
						onChange={(_, value) => field.onChange(value)}
						renderInput={(params) => (
							<StyledInput {...params} label="Tags" variant="outlined" />
						)}
					/>
				)}
			/>
		</StyledForm>
	);
}

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const SearchWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const StyledInput = styled(TextField)`
	width: 100%;
`;

const SearchButton = styled(Button)``;

const SearchButtonIcon = styled(SearchIcon)`
	font-size: 2rem;
`;

export default SearchForm;
