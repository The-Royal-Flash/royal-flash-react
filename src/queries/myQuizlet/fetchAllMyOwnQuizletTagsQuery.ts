import { fetchAllMyOwnQuizletTags } from '../../api/search';

const staleTime = 60000;

const fetchAllMyOwnQuizletTagsQuery = () => ({
	queryKey: ['tags'],
	queryFn: async () => {
		const { tagList } = await fetchAllMyOwnQuizletTags();

		return tagList;
	},
	staleTime,
});

export default fetchAllMyOwnQuizletTagsQuery;
