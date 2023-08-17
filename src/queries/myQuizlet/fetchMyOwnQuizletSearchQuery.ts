import { fetchMyOwnQuizletSearch } from '../../api/search';

const staleTime = 3000;

interface fetchMyOwnQuizletSearchQueryProps {
	keyword: string;
	page: number;
	order: 'ascending' | 'descending';
	tagList: string[];
	pathname: string;
}

const fetchMyOwnQuizletSearchQuery = ({
	keyword,
	page,
	order,
	tagList,
	pathname,
}: fetchMyOwnQuizletSearchQueryProps) => ({
	queryKey: [keyword, page, pathname, order, ...tagList],
	queryFn: async () => {
		const data = await fetchMyOwnQuizletSearch({
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

export default fetchMyOwnQuizletSearchQuery;
