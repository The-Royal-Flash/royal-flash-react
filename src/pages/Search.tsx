import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import { StyledContainer } from '../components/quizlet/styles';
import { QuizletItem, SearchForm } from '../components';
import { SearchRequest } from '../types';
import { fetchAllQuizletSearchQuery, fetchQuizletTagsQuery } from '../queries';

function Search() {
	const [observerRef, observerInView] = useInView({ threshold: 0.5 });

	const [formData, setFormData] = useState<SearchRequest>({
		keyword: '',
		tagList: [],
	});

	const { data: tags } = useQuery(fetchQuizletTagsQuery());

	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
		fetchAllQuizletSearchQuery({
			keyword: formData.keyword,
			tagList: formData.tagList,
		}),
	);

	useEffect(() => {
		if (isFetching) return;
		if (hasNextPage && observerInView) fetchNextPage();
	}, [observerInView]);

	const handleOnSubmit: SubmitHandler<SearchRequest> = async (formData) => {
		setFormData(formData);
	};

	return (
		<StyledContainer>
			<Container>
				<QuizletFormWrapper>
					<SearchForm tagList={tags || []} onSubmit={handleOnSubmit} />
				</QuizletFormWrapper>
				<QuizletListWrapper>
					{data?.pages.length ? (
						data?.pages.map(({ _id: quizletId, ...quizletInfo }) => (
							<QuizletItem
								key={quizletId}
								quizletId={quizletId}
								link={`/quizlet/detail/${quizletId}`}
								{...quizletInfo}
							/>
						))
					) : (
						// TODO:
						// <NoResultMessage />
						<>검색 결과가 없습니다.</>
					)}
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

const QuizletListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	gap: 17px;
`;

const Observer = styled.div`
	height: 20px;
`;

const LoadingBox = styled.div`
	display: flex;
	justify-content: center;
`;

export default Search;
