import { fetchQuizletDetail } from '../../api/quizlet';

const staleTime = 1000;

const fetchQuizletQuery = (quizletId: string) => ({
	queryKey: ['quizlet', quizletId],
	queryFn: async () => fetchQuizletDetail(quizletId),
	staleTime,
});

export default fetchQuizletQuery;
