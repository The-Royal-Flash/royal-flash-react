import React from 'react';
import { useParams } from 'react-router-dom';

function EditQuizlet() {
	const { quizletId } = useParams();

	return (
		<div>
			<h2>학습세트 수정하기</h2>
			<p>{quizletId}</p>
		</div>
	);
}

export default EditQuizlet;
