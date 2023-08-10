import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface QuizletPaginationProps {
	count: number;
	onPageChange: (targetPage: number) => void;
}

function QuizletPagination({ count, onPageChange }: QuizletPaginationProps) {
	return (
		<Stack spacing={2}>
			<StyledPagination
				count={count}
				shape="rounded"
				onClick={(event) =>
					onPageChange(+(event.target as HTMLElement).textContent!)
				}
			/>
		</Stack>
	);
}

const StyledPagination = styled(Pagination)`
	margin: 50px 0;
`;

export default QuizletPagination;
