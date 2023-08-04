import { http } from './base';
import { QuizletResponse } from '../types';

// 학습하기 -- 학습세트 문제 정보 가져오기
export const fetchQuizletById = async (
	email: string,
	quizletId: string,
	mode: string,
): Promise<QuizletResponse> =>
	await http.post(`study/${quizletId}`, { email, quizletId, mode });

// 학습정보제출 -- 학습하기 결과 제출
