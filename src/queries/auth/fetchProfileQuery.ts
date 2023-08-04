import { fetchProfile } from '../../api';

const staleTime = 1000;

const fetchProfileQuery = () => ({
	queryKey: ['profile'],
	queryFn: fetchProfile,
	retry: false,
	staleTime,
});

export default fetchProfileQuery;
