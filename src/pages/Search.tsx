import React, { useState } from 'react';
import { StyledContainer } from '../components/quizlet/styles';
import { QuizletItem, SearchForm } from '../components';
import { fetchAllQuizletSearch } from '../api/search';
import { SearchQuizletItem } from '../types';
import styled from '@emotion/styled';

function Search() {
	const [quizletList, setQuizletList] = useState<SearchQuizletItem[]>([]);

	const handleSubmit = () => {
		(async () => {
			const res = await fetchAllQuizletSearch({
				keyword: '',
				tagList: [],
				pageSize: 10,
				page: 1,
			});

			const { isSuccess, page, totalPages, quizletList } = res;
			console.log(isSuccess, page, totalPages, quizletList);

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
					{quizletList.map(({ _id: quizletId, ...quizletInfo }) => (
						<QuizletItem
							key={quizletId}
							quizletId={quizletId}
							link={`/quizlet/detail/${quizletId}`}
							{...quizletInfo}
						/>
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

export default Search;
