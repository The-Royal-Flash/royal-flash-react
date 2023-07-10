import React from 'react';
import { useParams } from 'react-router-dom';

function QuizletDetail() {
	const { quizletId } = useParams();
	return (
		<div>
			<h2>학습세트 상세 페이지</h2>
			<p>{quizletId}</p>
		</div>
	);
}

export default QuizletDetail;
