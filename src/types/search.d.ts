import { searchSchema } from '../schemas/searchSchema';

export type SearchRequest = z.infer<typeof searchSchema>;
