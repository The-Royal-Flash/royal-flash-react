import { fetchQuizlet } from '../../api/quizlet';

const staleTime = 1000;

const fetchQuizletQuery = (quizletId: string) => ({
	queryKey: ['quizlet', quizletId],
	queryFn: async () => fetchQuizlet(quizletId),
	suspense: true,
	staleTime,
});

export default fetchQuizletQuery;
