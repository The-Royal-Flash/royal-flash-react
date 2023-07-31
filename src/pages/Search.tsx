import React, { useState } from 'react';
import { StyledContainer } from '../components/quizlet/styles';
import { SearchForm } from '../components';
import { fetchAllQuizletSearch } from '../api/search';
import { SearchQuizletItem } from '../types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

function Search() {
	const [quizletList, setQuizletList] = useState<SearchQuizletItem[]>([]);

	const handleSubmit = () => {
		(async () => {
			const { quizletList } = await fetchAllQuizletSearch({
				keyword: '',
				tagList: [],
			});
			setQuizletList(quizletList);
		})();
	};

	return (
		<StyledContainer>
			<Container>
				<QuizletFormWrapper>
					<SearchForm onSubmit={handleSubmit} />
				</QuizletFormWrapper>
				<QuizletListWrapper>
					{quizletList.map(({ _id, title, description, questionCardList }) => (
						<QuizletItem key={_id} to={`/quizlet/detail/${_id}`}>
							<p>{title}</p>
							<p>{description}</p>
							<p>{questionCardList.length}</p>
						</QuizletItem>
					))}
				</QuizletListWrapper>
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
	margin-top: 20px;
	gap: 10px;
`;

const QuizletItem = styled(Link)`
	width: 100%;
	border: 1px solid gray;
`;

export default Search;
