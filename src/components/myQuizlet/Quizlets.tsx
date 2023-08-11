import styled from '@emotion/styled';
import { QuizletCard } from '.';
import { SearchQuizletItem } from '../../types';

interface QuizletsProps {
	quizletList?: Array<SearchQuizletItem>;
	order: string;
}

function Quizlets({ quizletList, order }: QuizletsProps) {
	if (order === 'ascending') {
		quizletList!.sort(
			(a, b) =>
				a.studyLog.numOfQuestionListToReview -
				b.studyLog.numOfQuestionListToReview,
		);
	} else {
		quizletList!.sort(
			(a, b) =>
				b.studyLog.numOfQuestionListToReview -
				a.studyLog.numOfQuestionListToReview,
		);
	}

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
