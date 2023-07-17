import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { MuiChipsInput } from 'mui-chips-input';

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
				placeholder="학습세트 이름을 입력하세요."
			/>
			<StyledChipsInput
				label="Tags"
				value={tags}
				onChange={addChip}
				placeholder="학습세트와 관련된 태그를 추가하세요."
			/>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const StyledTextField = styled(TextField)`
	width: 100%;
`;

const StyledChipsInput = styled(MuiChipsInput)`
	width: 100%;
`;

export default SearchForm;
