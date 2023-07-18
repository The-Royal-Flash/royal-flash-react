import { z } from 'zod';

const CreateQuizletSchema = z.object({
	title: z.string().min(5, '5자 이상의 제목을 입력해 주세요.'),
	description: z.string().min(10, '10자 이상의 설명을 입력해 주세요.'),
	url: z.string(),
	questionCardList: z
		.object({
			question: z.string().min(3, '3자 이상의 문제를 입력해 주세요.'),
			answer: z.string().min(1, '모범 답안을 입력해 주세요.'),
			link: z.string(),
		})
		.array()
		.nonempty(),
});

export { CreateQuizletSchema };
