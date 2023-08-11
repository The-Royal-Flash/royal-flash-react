import styled from '@emotion/styled';
import { ToggleButton } from '@mui/material';

interface TogglerProps {
	order: string;
	onChange: () => void;
}

function Toggler({ order, onChange }: TogglerProps) {
	return (
		<Container>
			<StyledToggleButton value="score" onChange={onChange}>
				{order === 'ascending' ? '낮은 점수부터 보기' : '높은 점수부터 보기'}
			</StyledToggleButton>
		</Container>
	);
}

const Container = styled.div`
	width: 80%;
	padding: 0 20px;
	display: flex;
	justify-content: right;
`;

const StyledToggleButton = styled(ToggleButton)`
	padding: 10px 20px;
	font-size: 12px;
	font-weight: bold;
`;

export default Toggler;
