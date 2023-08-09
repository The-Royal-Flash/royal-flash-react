import { http } from './base';
import { BaseApiResponse, StudyQuizletResponse } from '../types';
import { StudyLogRequest } from '../types/study';

export const fetchQuizletById = async (
	quizletId: string,
	mode: string,
): Promise<StudyQuizletResponse> =>
	await http.get(`quizlet/study/${quizletId}/${mode}`);

export const createStudyLog = async (
	studyLogInfo: StudyLogRequest,
): Promise<BaseApiResponse> => {
	return await http.post(
		`quizlet/study/${studyLogInfo.quizletId}`,
		studyLogInfo,
	);
};
