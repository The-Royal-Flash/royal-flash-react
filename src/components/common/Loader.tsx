import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

function Loader() {
	return (
		<Container>
			<CircularLoading />
			<p>Loading...</p>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	height: 100%;
	color: gray;
`;

const CircularLoading = styled(CircularProgress)`
	color: #aaaaaa;
`;

export default Loader;
