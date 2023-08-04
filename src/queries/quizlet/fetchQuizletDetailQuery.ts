import { fetchQuizletDetail } from '../../api/quizlet';

const staleTime = 1000;

const fetchQuizletDetailQuery = (quizletId: string) => ({
	queryKey: ['quizlet-detail', quizletId],
	queryFn: async () => {
		const res = await fetchQuizletDetail(quizletId);
		return res;
	},
	suspense: true,
	staleTime,
});

export default fetchQuizletDetailQuery;
