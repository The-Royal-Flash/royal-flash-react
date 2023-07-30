import { searchSchema } from '../schemas/searchSchema';

export type SearchRequest = z.infer<typeof searchSchema>;

export interface QuizletOwnerInfo {
	_id: string;
	avatarUrl: string;
	nickname: string;
}

export interface SearchQuizletItem {
	_id: string;
	title: string;
	tagList: string[];
	description: string;
	numOfQuestionCard: number;
	owner: QuizletOwnerInfo;
}

export interface SearchApiResponse {
	isSuccess: boolean;
	page: number;
	totalPages: number;
	quizletList: Array<SearchQuizletItem>;
}
