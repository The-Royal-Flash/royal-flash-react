import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { Autocomplete, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import { StyledContainer } from '../components/quizlet/styles';
import { QuizletItem, SearchForm } from '../components';
import { SearchRequest } from '../types';
import { fetchAllQuizletSearchQuery } from '../queries';

function Search() {
	const [observerRef, observerInView] = useInView({ threshold: 0.5 });

	const [formData, setFormData] = useState<SearchRequest>({
		keyword: '',
		tagList: [],
	});

	const { handleSubmit, register, control } = useForm<SearchRequest>({
		defaultValues: {
			keyword: '',
			tagList: [],
		},
	});

	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
		fetchAllQuizletSearchQuery({
			keyword: formData.keyword,
			tagList: formData.tagList,
		}),
	);

	useEffect(() => {
		if (isFetching) return;
		if (hasNextPage && observerInView) {
			fetchNextPage();
		}
	}, [observerInView]);

	// TODO: fetchAllQuizletSearchQuery - select에서 처리
	const quizletList = data
		? data.pages.map((res) => res.quizletList).flat()
		: [];

	const handleOnSubmit: SubmitHandler<SearchRequest> = async (formData) => {
		setFormData(formData);
	};

	return (
		<StyledContainer>
			<Container>
				<QuizletFormWrapper>
					{/* <SearchForm onSubmit={handleSubmit} /> */}
					<QuizletForm onSubmit={handleSubmit(handleOnSubmit)}>
						<SearchWrapper>
							<SearchInput label="Search" {...register('keyword')} />
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
									options={['tag1', 'tag2', 'tmp']}
									getOptionLabel={(option) => option}
									onChange={(_, value) => field.onChange(value)}
									renderInput={(params) => (
										<TextField {...params} label="Tags" variant="outlined" />
									)}
								/>
							)}
						/>
					</QuizletForm>
				</QuizletFormWrapper>
				<QuizletListWrapper>
					{quizletList.map(({ _id: quizletId, ...quizletInfo }) => (
						<QuizletItem
							key={quizletId}
							quizletId={quizletId}
							link={`/quizlet/detail/${quizletId}`}
							{...quizletInfo}
						/>
					))}
				</QuizletListWrapper>
				{hasNextPage && <Observer ref={observerRef} />}
				<LoadingBox>{isFetching && <CircularProgress />}</LoadingBox>
			</Container>
		</StyledContainer>
	);
}

const Container = styled.div`
	width: 100%;
	padding: 20px;
`;

const QuizletFormWrapper = styled.div`
	width: 100%;
`;

const QuizletForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const SearchWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const SearchInput = styled(TextField)`
	width: 100%;
`;

const SearchButton = styled(Button)``;

const SearchButtonIcon = styled(SearchIcon)`
	font-size: 2rem;
`;

const QuizletListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	gap: 10px;
`;

const Observer = styled.div`
	height: 20px;
`;

const LoadingBox = styled.div`
	display: flex;
	justify-content: center;
`;

export default Search;
