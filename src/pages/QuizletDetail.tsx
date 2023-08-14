import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledContainer } from '../components/quizlet/styles';
import { QuizletDetailInfo } from '../components';

function QuizletDetail() {
	const { quizletId } = useParams();

	return (
		<StyledContainer>
			<React.Suspense fallback={<>"loading...</>}>
				<QuizletDetailInfo quizletId={quizletId!} />
			</React.Suspense>
		</StyledContainer>
	);
}

export default QuizletDetail;
