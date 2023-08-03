import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SearchForm } from '../components';
import { Toggler, Quizlets, NoResultMessage } from '../components/myQuizlet';
import { SubmitHandler } from 'react-hook-form';
import { SearchRequest } from '../types';

function MyQuizlet() {
	const [formData, setFormData] = useState<SearchRequest>({
		keyword: '',
		tagList: [],
	});

	const [order, setOrder] = React.useState('내림차순');

	const reorder = () => {
		setOrder(order === '내림차순' ? '오름차순' : '내림차순');

		// 💡 TODO: 유저 학습 세트 데이터 가져온 후, 점수 오름차순/내림차순 정렬
	};

	// TODO: tag 목록 가져오기
	const tags = ['tag1', 'tag2', 'tmp'];

	// TODO: fetchAllMyQuizletSearchQuery 및 pagination 처리

	const onSubmitSearch: SubmitHandler<SearchRequest> = async (formData) => {
		setFormData(formData);
	};

	return (
		<Container>
			<SearchBox>
				<SearchMessage>원하는 학습세트를 검색하세요.</SearchMessage>
				<SearchForm tagList={tags} onSubmit={onSubmitSearch} />
			</SearchBox>
			<Toggler order={order} onChange={reorder} />
			<Quizlets />
			{/* <NoResultMessage /> */}
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
