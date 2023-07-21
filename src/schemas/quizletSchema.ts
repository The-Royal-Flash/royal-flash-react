import { z } from 'zod';

const baseQuizletSchema = z.object({
	title: z.string().min(3, '3자 이상의 제목을 입력해 주세요.'),
	description: z.string().min(5, '5자 이상의 설명을 입력해 주세요.'),
	tagList: z.array(z.string()),
});

const quizletSchema = baseQuizletSchema.extend({
	questionCardList: z
		.array(
			z.object({
				question: z.string().min(3, '3자 이상의 문제를 입력해 주세요.'),
				answer: z.string().min(1, '모범 답안을 입력해 주세요.'),
				link: z.string(),
			}),
		)
		.min(1),
});

const editQuizletSchema = baseQuizletSchema.extend({
	questionListToRemove: z.array(z.string()),
	questionCardListToAdd: z.array(
		z.object({
			question: z.string().min(3, '3자 이상의 문제를 입력해 주세요.'),
			answer: z.string().min(1, '모범 답안을 입력해 주세요.'),
			link: z.string(),
		}),
	),
});

export { quizletSchema, editQuizletSchema };
