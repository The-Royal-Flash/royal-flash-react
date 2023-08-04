import { BaseApiResponse } from './response';

export interface QuizletResponse {
	isSuccess: boolean;
	message: string;
	title: string;
	questionCardList: Array<{
		question: string;
		answer: string;
		link: string;
	}>;
}
