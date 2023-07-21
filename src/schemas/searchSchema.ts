import { z } from 'zod';

const searchSchema = z.object({
	keyword: z.string(),
	tagList: z.array(z.string()),
});

export { searchSchema };
