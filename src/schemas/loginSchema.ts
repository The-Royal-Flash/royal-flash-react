import { z } from 'zod';

const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: '이메일을 입력해 주세요' })
		.email({ message: '이메일 형식에 맞게 입력해주세요.' }),
	password: z
		.string()
		.min(1, { message: '패스워드를 입력해 주세요' })
		.regex(/^[A-Za-z0-9]{6,20}$/, {
			message: '영문 또는 숫자를 6~20자 입력하세요.',
		}),
});

type loginSchema = z.infer<typeof loginSchema>;

export { loginSchema };
