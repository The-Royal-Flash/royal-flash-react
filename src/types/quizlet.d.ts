import { z } from 'zod';
import {
	editQuizletSchema,
	createQuizletSchema,
} from '../schemas/quizletSchema';
import { BaseApiResponse } from './response';

/** 학습세트 기본 정보 */
export interface BaseQuizletInfo {
	/** 학습세트 제목 */
	title: string;
	/** 학습세트 설명 */
	description: string;
	/** 학습세트 태그 목록 */
	tagList: string[];
}

/** 암키 카드 */
export interface QuestionCard {
	/** 문제 */
	question: string;
	/** 정답 */
	answer: string;
	/** 관련 정보 url */
	link?: string;
}

/** 학습 문제(암기) 카드 정보 (id 포함) */
export interface QuestionCardInfo extends QuestionCard {
	_id: string;
}

/** 학습 세트 정보 */
export interface QuizletInfo extends BaseQuizletInfo {
	questionCardList: Array<QuestionCardInfo>;
}

/** 학슴세트 생성, 수정 BaseQuizlet */
export type BaseQuizlet = z.infer<typeof baseQuizletSchema>;

/** 학습 세트 생성 */
export type CreateQuizletRequest = z.infer<typeof createQuizletSchema>;

export interface CreateQuizletResponse extends BaseApiResponse {
	data: {
		isSuccess: boolean;
		message: string;
		newQuizletId: string;
	};
}

/** 학습세트 기본 정보 (수정시 사용) */
export interface QuizletResponse {
	quizlet: QuizletInfo;
}

/** 학습 세트 수정 */
export type EditQuizletRequest = z.infer<typeof editQuizletSchema>;

/** 학습 세트의 학습(문제) 카드 */
export type QuizletQuestionCard = z.infer<
	typeof createQuizletSchema
>['questionCardList'][number];

/** 학습 기록이 있는 학습 세트의 기본 정보 */
export interface BaseMyQuizlet {
	/** 학습 (완료) 횟수 */
	studyCount: number;
	/** 문제(질문) 수 */
	numOfQuestionList: number;
	/** 복습할(오답노트) 문제 수 */
	numOfQuestionListToReview: number;
	/** 정답 문제 수 */
	numOfQuestionListToCorrect: number;
	/** 최신 학습 일시 */
	lastQuizDate: string; // string
}

/** 학습 세트 상세 정보  */
export interface QuizletDetailInfo extends BaseQuizletInfo {
	questionList: Array<{ _id: string; question: string }>;
	owner: {
		_id: string;
		name: string;
		nickname: string;
		email: string;
		avatarUrl: string;
	};
	studyLog?: BaseMyQuizlet;
}
export interface QuizletDetailResponse extends QuizletDetailInfo {
	isSuccess: boolean;
}

// /** 페이지네이션 필수 정보 */
// export interface BasePagenation {
// 	/** 현재 페이지 번호 */
// 	page: number;
// 	/** 전체 페이지 수 */
// 	totalPages: number;
// }

// /** 학습세트 검색 페이지에서 보여질 학습세트 정보 */
// export interface SearchQuizlet extends QuizletInfo {
// 	/** 암기 카드 수 */
// 	numOfCards: number;
// 	/** 학습세트 작성자 */
// 	owner: string; // userId
// 	/** 학습세트 작성자 사진 url */
// 	ownerAvatarUrl?: string;
// }

// /** 나의 학습세트 검색 페이지에서 보여질 학습세트 정보 */
// export interface MyQuizlet extends BaseMyQuizlet {
// 	/** 학습세트 제목 */
// 	title: string;
// 	/** 태그 목록 */
// 	tagList: string[];
// }

// /** 학습세트 검색 결과 - 학습세트 목록 */
// export interface SearchResponse extends BasePagenation {
// 	/** 학습세트 목록 검색 결과 */
// 	quizletList: Array<SearchQuizlet>;
// }

// /** 나의 학습세트 검색 결과 - 학습세트 목록 */
// export interface MyQuizletSearchResponse extends BasePagenation {
// 	/** 나의 학습세트 목록 검색 결과  */
// 	quizletList: Array<MyQuizlet>;
// }
