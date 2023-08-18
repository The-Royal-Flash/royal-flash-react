import { InfiniteData } from '@tanstack/react-query';
import { fetchAllQuizletSearch } from '../../api/search';
import { SearchApiResponse } from '../../types';

const staleTime = 3000;
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
	select: (data: InfiniteData<SearchApiResponse>) => ({
		...data,
		pages: data.pages.flatMap((page: SearchApiResponse) => page.quizletList),
		page: data.pages.length > 0 ? +data.pages[0].page : 0,
		totalPages: data.pages.length > 0 ? +data.pages[0].totalPages : 0,
	}),
	getNextPageParam: (lastPage: SearchApiResponse) => {
		return +lastPage.page === +lastPage.totalPages ? false : +lastPage.page + 1;
	},
	staleTime,
});

export default fetchAllQuizletSearchQuery;
