import { http } from './base';
import { BaseApiResponse, QuizletResponse } from '../types';
import { STUDY_MODE } from '../constants';
import { StudyLogRequest } from '../types/study';

// 학습하기 -- 학습세트 문제 정보 가져오기
export const fetchQuizletById = async (
	quizletId: string,
	mode: keyof typeof STUDY_MODE,
): Promise<QuizletResponse> =>
	await http.get(`quizlet/study/${quizletId}`, { mode });

// 학습정보제출 -- 학습하기 결과 제출
export const createStudyLog = async (
	studyLogInfo: StudyLogRequest,
): Promise<BaseApiResponse> =>
	await http.post(`quizlet/study/${studyLogInfo.quizletId}`, studyLogInfo);
