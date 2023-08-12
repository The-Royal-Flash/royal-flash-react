import { fetchAllMyQuizletTags } from '../../api/search';

const staleTime = 60000;

const fetchAllMyQuizletTagsQuery = () => ({
	queryKey: ['tags'],
	queryFn: async () => {
		const { uniqueTags } = await fetchAllMyQuizletTags();

		return uniqueTags;
	},
	staleTime,
});

export default fetchAllMyQuizletTagsQuery;
