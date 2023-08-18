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
	updateAt: string;
	studyLog: {
		createAt: string;
		numOfQuestionListToReview: number;
	};
}

export interface SearchApiResponse {
	isSuccess: boolean;
	page: number;
	totalPages: number;
	quizletList: Array<SearchQuizletItem>;
}

export interface SearchInfiniteResponse {
	quizletList: SearchQuizletItem[];
	page: number;
	totalPages: number;
	// pages: SearchApiResponse[];
	// pageParams: unknown[];
}

export interface MySearchApiResponse extends SearchApiResponse {
	totalPage: number;
}

export interface TagApiResponse {
	isSuccess: boolean;
	message: string;
	tagList: string[];
}

export interface MyTagsApiResponse {
	isSuccess: boolean;
	message: string;
	uniqueTags: string[];
}
