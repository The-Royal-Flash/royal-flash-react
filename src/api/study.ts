import { http } from './base';
import { BaseApiResponse, StudyQuizletResponse } from '../types';
import { STUDY_MODE } from '../constants';
import { StudyLogRequest } from '../types/study';

// 학습하기 -- 학습세트 문제 정보 가져오기
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
