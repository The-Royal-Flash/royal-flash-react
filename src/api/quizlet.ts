import { http } from './base';
import { CreateQuizletRequest } from '../types/quizlet';

// 학습세트 생성
export const createQuizlet = async (quizletInfo: CreateQuizletRequest) =>
	await http.post(`127.0.0.1/quizlet/create`, quizletInfo);
// await http.post(`/api/quizlet/create`, quizletInfo);

// 학습세트 수정

// 학습세트 삭제

// 학습세트 상세정보
export const fetchQuizletDetail = async (quizletId: string) =>
	await http.get(`/api/quizlet/detail/${quizletId}`);
