import { fetchAllQuizletSearch } from '../../api/search';

const staleTime = 1000;

interface fetchAllQuizletQueryProps {
	keyword: string;
	tagList: string[];
}

const fetchAllQuizletSearchQuery = ({
	keyword,
	tagList,
}: fetchAllQuizletQueryProps) => ({
	queryKey: ['search', keyword, ...tagList],
	queryFn: async ({ pageParam = 1 }) => {
		const { data } = await fetchAllQuizletSearch({
			keyword,
			tagList,
			page: pageParam,
		});
		return data;
	},
	// getNextPageParam: (lastPage, allPages) => {
	// TODO: infinity scroll
	// },
	// select: (data) => ({}),
	staleTime,
});

export default fetchAllQuizletSearchQuery;
