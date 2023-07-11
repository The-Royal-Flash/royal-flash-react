import React from 'react';
import styled from '@emotion/styled';
import * as Theme from '../../constants';

const Container = styled.div`
	display: flex;
	width: 100%;
	background-color: ${Theme.LAYOUT_BG_COLOR};
	padding: 10px 0;
`;

const Wrapper = styled.div`
	display: flex;
	min-width: ${Theme.MIN_WIDTH_PX};
	max-width: ${Theme.MAX_WIDTH_PX};
	margin: 0 auto;
	width: calc(100% - 20px);
`;

function Footer() {
	return (
		<Container>
			<Wrapper>
				<h3>footer</h3>
			</Wrapper>
		</Container>
	);
}

export default Footer;
