import React from 'react';
import styled from '@emotion/styled';
import { SearchForm } from '../components/common';
import { Toggler, Quizlets } from '../components/myQuizlet';

function MyQuizlet() {
	const [order, setOrder] = React.useState('내림차순');

	const reorder = () => {
		setOrder(order === '내림차순' ? '오름차순' : '내림차순');
	};

	const filterUserQuizlets = (
		event: React.KeyboardEvent,
		keyword: string,
		tags: string[],
	) => {
		if (event.key !== 'Enter') return;

		console.log(keyword);
		console.log(tags);
	};

	return (
		<Container>
			<SearchBox>
				<SearchMessage>원하는 학습세트를 검색하세요.</SearchMessage>
				<SearchForm onSubmit={filterUserQuizlets} />
			</SearchBox>
			<Toggler order={order} onChange={reorder} />
			<Quizlets />
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
