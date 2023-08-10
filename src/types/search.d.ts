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
	questionCardList: string[];
	owner: QuizletOwnerInfo;
}

export interface SearchApiResponse {
	isSuccess: boolean;
	page: number;
	totalPages: number;
	quizletList: Array<SearchQuizletItem>;
}

export interface MySearchApiResponse extends SearchApiResponse {
	totalPage: number;
}

export interface TagApiResponse {
	isSuccess: boolean;
	message: string;
	tagList: string[];
}
