import { fetchQuizletDetail } from '../../api/quizlet';

const staleTime = 1000;

const fetchQuizletDetailQuery = (quizletId: string) => ({
	queryKey: ['quizlet-detail', quizletId],
	queryFn: async () => fetchQuizletDetail(quizletId),
	staleTime,
});

export default fetchQuizletDetailQuery;
