import { http } from './base';

// 학습세트 생성

// 학습세트 수정

// 학습세트 삭제

// 학습세트 상세정보
const fetchQuizletDetail = async (quizletId: string) =>
	await http.get(`/api/quizlet/detail/${quizletId}`);

export { fetchQuizletDetail };
