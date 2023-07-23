import { searchSchema } from '../schemas/searchSchema';

export type SearchRequest = z.infer<typeof searchSchema>;

export interface SearchQuizletItem {
	// _id: string;
	// title: string;
	// taglist: string[];
	// description: string;
	// numOfCards: number;
	// owner: string;
	// ownerNickname: string;
	// ownerAvatarId: string;

	// TODO: tmp
	_id: string;
	title: string;
	taglist: string[];
	description: string;
	questionCardList: string[];
	owner: string;
	createAt: string;
}

export interface SearchApiResponse {
	// page: number;
	// totalPage: number;
	quizletList: Array<SearchQuizletItem>;
}
