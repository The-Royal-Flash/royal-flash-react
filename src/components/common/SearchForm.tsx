import React from 'react';
import styled from '@emotion/styled';
import { MuiChipsInput } from 'mui-chips-input';
import { TextField } from '@mui/material';

function SearchForm() {
	const [tags, setTags] = React.useState<string[]>([]);
	const [keyword, setKeyword] = React.useState('');

	const addChip = (newChip: string[]) => {
		setTags(newChip);
	};

	const updateKeyword = (event: React.ChangeEvent) => {
		const newKeyword = (event.target as HTMLInputElement).value;

		console.log(newKeyword);
	};

	const search = (event: React.KeyboardEvent) => {
		if (event.key !== 'Enter') return;

		// 💡 TODO: 검색 API 연동
	};

	return (
		<Container>
			<StyledTextField
				label="Search"
				variant="outlined"
				onChange={updateKeyword}
				onKeyDown={search}
			/>
			<StyledChipsInput
				label="Tags"
				value={tags}
				onChange={addChip}
				onKeyDown={search}
			/>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 30px;
`;

const StyledTextField = styled(TextField)`
	width: 100%;
`;

const StyledChipsInput = styled(MuiChipsInput)`
	width: 100%;
`;

export default SearchForm;
