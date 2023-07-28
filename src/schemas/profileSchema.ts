import { z } from 'zod';

const passwordChangeSchema = z
	.object({
		password: z
			.string()
			.min(6, { message: '비밀번호는 6자 이상이어야 합니다.' })
			.regex(/^[A-Za-z0-9]{6,20}$/, {
				message: '영문 또는 숫자를 6~20자 입력하세요.',
			}),
		newPassword: z
			.string()
			.min(6, { message: '비밀번호는 6자 이상이어야 합니다.' })
			.regex(/^[A-Za-z0-9]{6,20}$/, {
				message: '영문 또는 숫자를 6~20자 입력하세요.',
			}),
		newConfirmPassword: z
			.string()
			.min(6, { message: '비밀번호는 6자 이상이어야 합니다.' })
			.regex(/^[A-Za-z0-9]{6,20}$/, {
				message: '영문 또는 숫자를 6~20자 입력하세요.',
			}),
	})
	.refine((data) => data.newPassword === data.newConfirmPassword, {
		path: ['newConfirmPassword'],
		message: '비밀번호가 일치하지 않습니다.',
	});

type passwordChangeSchema = z.infer<typeof passwordChangeSchema>;

export { passwordChangeSchema };
