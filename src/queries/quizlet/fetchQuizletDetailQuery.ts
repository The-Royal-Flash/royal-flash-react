import { fetchQuizletDetail } from '../../api/quizlet';

const staleTime = 1000;

const fetchQuizletDetailQuery = (quizletId: string) => ({
	queryKey: ['quizlet-detail', quizletId],
	queryFn: async () => {
		const { quizlet } = await fetchQuizletDetail(quizletId);
		return quizlet;
	},
	suspense: true,
	staleTime,
});

export default fetchQuizletDetailQuery;
