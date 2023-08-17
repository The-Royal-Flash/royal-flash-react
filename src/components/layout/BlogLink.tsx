import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

interface BlogLinkProps {
	blogUrl: string;
}

function BlogLink({ blogUrl }: BlogLinkProps) {
	return (
		<Tooltip title="blog">
			<Container to={blogUrl} target="_blank" rel="noopener noreferrer">
				B
			</Container>
		</Tooltip>
	);
}

const Container = styled(Link)`
	display: flex;
	width: 24px;
	height: 24px;
	align-items: center;
	justify-content: center;
	margin-top: 3px;
	font-size: 18px;
	font-weight: 700;
	border-radius: 22px;
	color: rgb(55, 66, 77);
	background-color: white;
	user-select: none;
	text-decoration: none;
	:hover {
		background-color: rgb(79, 178, 236);
	}
`;

export default BlogLink;
