import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { SubmitHandler } from 'react-hook-form';
import { SearchRequest } from '../types';
import {
	fetchAllMyQuizletSearchQuery,
	fetchAllMyQuizletTagsQuery,
} from '../queries';
import {
	SearchForm,
	Toggler,
	Quizlets,
	NoResultMessage,
	QuizletPagination,
} from '../components';

function MyQuizlet() {
	const { pathname } = useLocation();
	const ownedOnly = pathname.includes('owned');

	const [order, setOrder] = useState<'ascending' | 'descending'>('ascending');
	const [page, setPage] = useState(1);
	const [formData, setFormData] = useState<SearchRequest>({
		keyword: '',
		tagList: [],
	});

	const reorder = () => {
		setOrder(order === 'ascending' ? 'descending' : 'ascending');
	};

	const changePage = (targetPage: number) => {
		setPage(targetPage);
	};

	const { data: tags } = useQuery(fetchAllMyQuizletTagsQuery());

	const onSubmitSearch: SubmitHandler<SearchRequest> = async (formData) => {
		setFormData(formData);
	};

	// 💡 TODO: ownedOnly를 기준으로 다른 API 호출
	const { data } = useQuery(
		fetchAllMyQuizletSearchQuery({
			keyword: formData.keyword,
			tagList: formData.tagList || [],
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
			<QuizletPagination total={data?.totalPage!} onPageChange={changePage} />
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
