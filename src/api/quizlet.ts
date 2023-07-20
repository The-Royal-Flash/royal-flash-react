import { http } from './base';
import { QuizletRequest } from '../types/quizlet';
import { BaseApiResponse } from '../types/response';

// 학습세트 생성
export const createQuizlet = async (
	quizletInfo: QuizletRequest,
): Promise<BaseApiResponse> => await http.post('quizlet/create', quizletInfo);

// 학습세트 정보
export const fetchQuizlet = async (quizletId: string) =>
	await http.get<BaseApiResponse>(`quizlet/info/${quizletId}`);

// 학습세트 수정
export const editQuizlet = async (
	quizletId: string,
	quizletInfo: QuizletRequest,
) => await http.post<BaseApiResponse>(`quizlet/edit/${quizletId}`, quizletInfo);

// 학습세트 삭제
export const deleteQuizlet = async (quizletId: string) =>
	await http.get<BaseApiResponse>(`quizlet/detail/${quizletId}`);

// 학습세트 상세정보
export const fetchQuizletDetail = async (quizletId: string) =>
	await http.get<BaseApiResponse>(`quizlet/detail/${quizletId}`);
