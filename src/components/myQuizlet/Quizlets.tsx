import styled from '@emotion/styled';
import { QuizletCard } from '.';
import { SearchQuizletItem } from '../../types';

interface QuizletsProps {
	quizletList?: Array<SearchQuizletItem>;
}

function Quizlets({ quizletList }: QuizletsProps) {
	return (
		<Container>
			{quizletList?.map((quizlet) => (
				<QuizletCard key={quizlet._id} quizlet={quizlet} />
			))}
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
