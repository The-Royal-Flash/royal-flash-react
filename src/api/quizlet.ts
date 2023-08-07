import { http } from './base';
import {
	BaseApiResponse,
	CreateQuizletRequest,
	CreateQuizletResponse,
	EditQuizletRequest,
	QuizletDetailResponse,
	QuizletResponse,
} from '../types';

// 학습세트 생성
export const createQuizlet = async (
	quizletInfo: CreateQuizletRequest,
): Promise<CreateQuizletResponse> =>
	await http.post('quizlet/create', quizletInfo);

// 학습세트 정보
export const fetchQuizlet = async (quizletId: string) =>
	await http.get<QuizletResponse>(`quizlet/info/${quizletId}`);

// 학습세트 수정
export const editQuizlet = async (
	quizletId: string,
	quizletInfo: EditQuizletRequest,
) => await http.post<BaseApiResponse>(`quizlet/edit/${quizletId}`, quizletInfo);

// 학습세트 삭제
export const deleteQuizlet = async (quizletId: string) =>
	await http.delete<BaseApiResponse>(`quizlet/delete/${quizletId}`);

// 학습세트 상세정보
export const fetchQuizletDetail = async (quizletId: string) =>
	await http.get<QuizletDetailResponse>(`quizlet/detail/${quizletId}`);
