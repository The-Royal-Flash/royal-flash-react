import { fetchAllMyQuizletSearch } from '../../api/search';

const staleTime = 60000;

interface fetchAllMyQuizletSearchQueryProps {
	keyword: string;
	page: number;
	order: 'ascending' | 'descending';
	tagList: string[];
}

const fetchAllMyQuizletSearchQuery = ({
	keyword,
	page,
	order,
	tagList,
}: fetchAllMyQuizletSearchQueryProps) => ({
	queryKey: [keyword, page, order, ...tagList],
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