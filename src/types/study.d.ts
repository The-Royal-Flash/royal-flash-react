import { BaseApiResponse } from './response';

export interface QuizletResponse {
	isSuccess: boolean;
	message: string;
	title: string;
	questionCardList: Array<{
		_id: string;
		question: string;
		answer: string;
		link: string;
	}>;
}

export interface StudyLogRequest {
	quizletId: string;
	questionListToReview: string[];
	questionListToCorrect: string[];
	mode: keyof typeof STUDY_MODE;
}
