import { z } from 'zod';

/** 공통 학습세트 스키마 */
export const baseQuizletSchema = z.object({
	title: z.string().min(3, '3자 이상의 제목을 입력해 주세요.'),
	description: z.string().min(5, '5자 이상의 설명을 입력해 주세요.'),
	tagList: z.array(z.string()),
});

/** 학습 문제 스키마 */
const quizletCardSchema = z.object({
	question: z.string().min(3, '3자 이상의 문제를 입력해 주세요.'),
	answer: z.string().min(1, '모범 답안을 입력해 주세요.'),
	link: z
		.string()
		.url('http 또는 https로 시작하는 url 주소를 입력해주세요.')
		.optional()
		.or(z.literal('')),
});

/** 학습세트 생성 스키마 */
export const createQuizletSchema = baseQuizletSchema.extend({
	questionCardList: z.array(quizletCardSchema).min(1),
});

/** 학습세트 수정 스키마 */
export const editQuizletSchema = baseQuizletSchema.extend({
	questionListToRemove: z.array(z.string()),
	questionCardListToAdd: z.array(quizletCardSchema),
});
