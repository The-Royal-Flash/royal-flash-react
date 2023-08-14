import { fetchAllQuizletSearch } from '../../api/search';
import { SearchApiResponse } from '../../types';

const staleTime = 60000;
const pageSize = 10;

interface fetchAllQuizletQueryProps {
	keyword: string;
	tagList: string[];
}

const fetchAllQuizletSearchQuery = ({
	keyword = '',
	tagList = [],
}: fetchAllQuizletQueryProps) => ({
	queryKey: ['search', keyword, ...tagList],
	queryFn: async ({ pageParam = 1 }) => {
		const data = await fetchAllQuizletSearch({
			keyword,
			tagList,
			pageSize,
			page: pageParam,
		});
		return data;
	},
	getNextPageParam: (lastPage: SearchApiResponse) => {
		return +lastPage.page === +lastPage.totalPages ? false : +lastPage.page + 1;
	},
	staleTime,
});

export default fetchAllQuizletSearchQuery;
