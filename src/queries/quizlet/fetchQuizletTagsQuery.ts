import { fetchAllQuizletTags } from '../../api/search';

const staleTime = 60000;

const fetchQuizletTagsQuery = () => ({
	queryKey: ['tags'],
	queryFn: async () => {
		const { tagList } = await fetchAllQuizletTags();
		return tagList;
	},
	staleTime,
});

export default fetchQuizletTagsQuery;
