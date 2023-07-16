import { z } from 'zod';

const signupSchema = z
	.object({
		name: z.string().min(1, { message: '이름을 입력해 주세요.' }).max(20),
		nickname: z
			.string()
			.min(3, { message: '최소 3글자 이상이어야 합니다.' })
			.max(20),
		email: z
			.string()
			.min(1, { message: '이메일을 입력해 주세요.' })
			.email({ message: '이메일 형식에 맞게 입력해주세요.' }),
		password: z
			.string()
			.min(1, { message: '비밀번호를 입력해 주세요.' })
			.regex(/^[A-Za-z0-9]{6,20}$/, {
				message: '영문 또는 숫자를 6~20자 입력하세요.',
			}),
		confirmPassword: z
			.string()
			.min(1, { message: '비밀번호를 다시 입력해 주세요.' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: '비밀번호가 일치하지 않습니다.',
	});

type signupSchema = z.infer<typeof signupSchema>;

export default signupSchema;
