import { BaseApiResponse } from '../types/response';
import {
	SearchApiResponse,
	SearchRequest,
	TagApiResponse,
} from '../types/search';
import { http } from './base';

// 학습세트 검색 (전체)
export const fetchAllQuizletSearch = async (
	searchInfo: SearchRequest & { page: number; pageSize: number },
) => {
	const response = await http.get<SearchApiResponse>('/search', searchInfo);
	return response;
};

// 학습세트 검색 (나의 학습세트)
// export const fetchAllMyQuizletSearch

// 태그 목록 가져오기 - 모든 학습세트 전체
export const fetchAllQuizletTags = async () =>
	await http.get<TagApiResponse>('/quizlet/tag');

// 태그 목록 가져오기 - 로그인한 사용자의 학습기록이 있는 학습 세트
export const fetchAllMyquizletTags = async () =>
	await http.get<BaseApiResponse>('/myquizlet/tag');
