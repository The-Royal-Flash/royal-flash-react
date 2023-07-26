import React from 'react';
import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface QuizletPaginationProps {
	count: number;
	page: number;
}

function QuizletPagination({ count, page }: QuizletPaginationProps) {
	return (
		<Stack spacing={2}>
			<StyledPagination count={count} shape="rounded" />
		</Stack>
	);
}

const StyledPagination = styled(Pagination)`
	margin: 50px 0;
`;

export default QuizletPagination;
