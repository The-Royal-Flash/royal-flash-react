import {
	SearchApiResponse,
	SearchRequest,
	TagApiResponse,
	MySearchApiResponse,
	MyTagsApiResponse,
} from '../types/search';
import { http } from './base';

// 학습세트 검색 (전체)
export const fetchAllQuizletSearch = async (
	searchInfo: SearchRequest & { page: number; pageSize: number },
) => {
	const response = await http.get<SearchApiResponse>('/search', searchInfo);
	return response;
};

// 학습세트 검색 (학습해본 학습세트)
export const fetchAllMyQuizletSearch = async (
	searchInfo: SearchRequest & {
		page: number;
		pageSize: number;
		order: 'ascending' | 'descending';
	},
) => await http.get<MySearchApiResponse>('/search/myquizlet', searchInfo);

// 학습세트 검색 (직접 생성한 학습세트)
export const fetchMyOwnQuizletSearch = async (
	searchInfo: SearchRequest & {
		page: number;
		pageSize: number;
		order: 'asencding' | 'descending';
	},
) => await http.get<MySearchApiResponse>('/search/ownedquizlet', searchInfo);

// 태그 목록 가져오기 - 모든 학습세트 전체
export const fetchAllQuizletTags = async () =>
	await http.get<TagApiResponse>('/quizlet/tag');

// 태그 목록 가져오기 - 로그인한 사용자의 학습기록이 있는 학습 세트
export const fetchAllMyQuizletTags = async () =>
	await http.get<MyTagsApiResponse>('/quizlet/tag/mine');
