import React from 'react';
import styled from '@emotion/styled';
import * as Theme from '../../constants';

const Container = styled.div`
	display: flex;
	width: 100%;
	background-color: ${Theme.LAYOUT_BG_COLOR};

	/* tmp: width 확인 위함 */
	border: 1px solid darkgray;
	${Theme.MQ[1]} {
		border: 1px solid yellow;
	}
`;

const Wrapper = styled.div`
	display: flex;
	min-width: ${Theme.MIN_WIDTH_PX};
	max-width: ${Theme.MAX_WIDTH_PX};
	margin: 0 auto;
	width: calc(100% - 20px);
`;

function Header() {
	return (
		<Container>
			<Wrapper>
				<h3>header</h3>
			</Wrapper>
		</Container>
	);
}

export default Header;
