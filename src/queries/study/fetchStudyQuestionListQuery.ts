import { fetchQuizletById } from '../../api';

const staleTime = 1000;

const fetchStudyQuestionListQuery = (quizletId: string, mode: string) => ({
	queryKey: ['study', quizletId],
	queryFn: async () => await fetchQuizletById(quizletId, mode),
	staleTime,
});

export default fetchStudyQuestionListQuery;
