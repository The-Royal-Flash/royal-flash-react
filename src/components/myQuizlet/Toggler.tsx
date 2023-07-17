import React from 'react';
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
				{order} 정렬
			</StyledToggleButton>
		</Container>
	);
}

const Container = styled.div`
	width: 80%;
	padding: 20px;
	display: flex;
	justify-content: right;
	/* border: 1px dashed salmon; */
`;

const StyledToggleButton = styled(ToggleButton)`
	padding: 10px 20px;
	font-size: 12px;
	font-weight: bold;
`;

export default Toggler;
