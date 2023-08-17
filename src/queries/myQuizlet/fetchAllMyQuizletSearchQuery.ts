import { fetchAllMyQuizletSearch } from '../../api/search';

const staleTime = 3000;

interface fetchAllMyQuizletSearchQueryProps {
	keyword: string;
	page: number;
	order: 'ascending' | 'descending';
	tagList: string[];
	pathname: string;
}

const fetchAllMyQuizletSearchQuery = ({
	keyword,
	page,
	order,
	tagList,
	pathname,
}: fetchAllMyQuizletSearchQueryProps) => ({
	queryKey: [keyword, pathname, page, order, ...tagList],
	queryFn: async () => {
		const data = await fetchAllMyQuizletSearch({
			keyword,
			page,
			pageSize: 5,
			order,
			tagList,
		});

		return data;
	},
	staleTime,
});

export default fetchAllMyQuizletSearchQuery;
