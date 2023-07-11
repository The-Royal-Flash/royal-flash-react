import React from 'react';
import styled from '@emotion/styled';
import * as Theme from '../../constants';
import TeamMember from './TeamMember';

const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 10px 0;
	background: #69737ce6;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: ${Theme.MIN_WIDTH_PX};
	max-width: ${Theme.MAX_WIDTH_PX};
	margin: 0 auto;
	width: calc(100% - 20px);
	padding: 15px 40px;
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const LogoImg = styled.img`
	width: 60px;
	height: auto;
	margin-bottom: 5px;
`;

const Info = styled.div`
	font-size: 12px;
	color: #d4dce4;
`;

function Footer() {
	return (
		<Container>
			<Wrapper>
				<InfoWrapper>
					<LogoImg src="/logo/royal-flash-logo.png" />
					<Info>반드시 취직하구 행복합시동</Info>
					<Info>All Copyrights Reserved Royal Flash 2023</Info>
				</InfoWrapper>
				<TeamMember />
			</Wrapper>
		</Container>
	);
}

export default Footer;
