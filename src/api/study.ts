import { http } from './base';
import { BaseApiResponse, StudyQuizletResponse } from '../types';
import { StudyLogRequest } from '../types/study';

export const fetchQuizletById = async (
	quizletId: string,
	mode: string,
): Promise<StudyQuizletResponse> =>
	await http.get(`quizlet/study/${quizletId}/${mode}`);

// 학습정보제출 -- 학습하기 결과 제출
export const createStudyLog = async (
	studyLogInfo: StudyLogRequest,
): Promise<BaseApiResponse> =>
	await http.post(`quizlet/study/${studyLogInfo.quizletId}`, studyLogInfo);
