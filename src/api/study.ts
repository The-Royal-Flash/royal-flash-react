import { http } from './base';
import { QuizletResponse } from '../types';

export const fetchQuizletById = async (
	quizletId: string,
	mode: string,
): Promise<QuizletResponse> =>
	await http.get(`quizlet/study/${quizletId}/${mode}`);

// 학습정보제출 -- 학습하기 결과 제출
