import { http } from './base';
import { CreateQuizletRequest } from '../types/quizlet';
import { BaseApiResponse } from '../types/response';

// 학습세트 생성
export const createQuizlet = async (
	quizletInfo: CreateQuizletRequest,
): Promise<BaseApiResponse> =>
	await http.post(`http://localhost:8080/api/quizlet/create`, quizletInfo);
// await http.post(`/api/quizlet/create`, quizletInfo); // mock-server

// 학습세트 수정

// 학습세트 삭제

// 학습세트 상세정보
export const fetchQuizletDetail = async (quizletId: string) =>
	await http.get(`/api/quizlet/detail/${quizletId}`); // mock-server
