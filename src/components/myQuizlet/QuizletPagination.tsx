import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface QuizletPaginationProps {
	total: number;
	onPageChange: (targetPage: number) => void;
}

function QuizletPagination({ total, onPageChange }: QuizletPaginationProps) {
	return (
		<Stack spacing={2}>
			<StyledPagination
				count={total}
				shape="rounded"
				onChange={(_, page) => onPageChange(page)}
			/>
		</Stack>
	);
}

const StyledPagination = styled(Pagination)`
	margin: 50px 0;
`;

export default QuizletPagination;
