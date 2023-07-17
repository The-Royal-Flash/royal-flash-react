import React from 'react';
import styled from '@emotion/styled';
import { QuizletCard } from '.';

function Quizlets() {
	return (
		<Container>
			<QuizletCard />
			<QuizletCard />
			<QuizletCard />
			<QuizletCard />
		</Container>
	);
}

const Container = styled.div`
	width: 80%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export default Quizlets;
