import { QuizletInfo } from './quizlet';

// export interface BaseApiResponse {
// 	status: number;
// 	statusText: string;
// 	data: {
// 		isSuccess: boolean;
// 		message: string;
// 	};
// }

export interface BaseApiResponse {
	isSuccess: boolean;
	message: string;
}

// TODO: TypeScript 기존 type 부분 수정 찾아보기
export interface QuizletResponse extends BaseApiResponse {
	quizlet: {
		/** 학습세트 제목 */
		title: string;
		/** 학습세트 설명 */
		description: string;
		/** 학습세트 태그 목록 */
		tagList: string[];
		/** 문제 정보 */
		questionCardList: Array<{
			/** 문제 id */
			_id: string;
			/** 문제 */
			question: string;
			/** 정답 */
			answer: string;
			/** 관련 정보 url */
			link?: string;
		}>;
	};
}
