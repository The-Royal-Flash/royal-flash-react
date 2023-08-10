import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { SubmitHandler } from 'react-hook-form';
import { SearchRequest } from '../types';
import {
	fetchAllMyQuizletSearchQuery,
	fetchQuizletTagsQuery,
} from '../queries';
import {
	SearchForm,
	Toggler,
	Quizlets,
	NoResultMessage,
	QuizletPagination,
} from '../components';

function MyQuizlet() {
	const [order, setOrder] = useState<'ascending' | 'descending'>('ascending');
	const [page, setPage] = useState(1);
	const [formData, setFormData] = useState<SearchRequest>({
		keyword: '',
		tagList: [],
	});

	const reorder = () => {
		setOrder(order === 'ascending' ? 'descending' : 'ascending');
	};

	// TODO: tag 목록 가져오기
	const { data: tags } = useQuery(fetchQuizletTagsQuery());

	const onSubmitSearch: SubmitHandler<SearchRequest> = async (formData) => {
		setFormData(formData);
	};

	const changePage = (targetPage: number) => {
		setPage(targetPage);
	};

	const { data } = useQuery(
		fetchAllMyQuizletSearchQuery({
			keyword: formData.keyword,
			tagList: formData.tagList ?? [],
			page,
			order,
		}),
	);

	return (
		<Container>
			<SearchBox>
				<SearchMessage>원하는 학습세트를 검색하세요.</SearchMessage>
				<SearchForm tagList={tags || []} onSubmit={onSubmitSearch} />
			</SearchBox>
			<Toggler order={order} onChange={reorder} />
			{data?.quizletList.length ? (
				<Quizlets quizletList={data?.quizletList} />
			) : (
				<NoResultMessage />
			)}
			<QuizletPagination count={data?.totalPage!} onPageChange={changePage} />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SearchBox = styled.div`
	width: 80%;
	padding: 20px;
	margin-top: 20px;
`;

const SearchMessage = styled.p`
	font-weight: bold;
	margin-bottom: 5px;
`;

export default MyQuizlet;
