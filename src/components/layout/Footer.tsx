import React from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import TeamMember from './TeamMember';
import TeamMemberMobile from './TeamMemberMobile';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

function Footer() {
	const isMobile = useMediaQuery(mobileMediaQuery);
	return (
		<Container>
			<Wrapper>
				<InfoWrapper>
					<LogoImg src="/logo/royal-flash-logo.png" />
					<Info>반드시 취직하구 행복합시동</Info>
					<Info>All Copyrights Reserved Royal Flash 2023</Info>
				</InfoWrapper>
				{isMobile ? <TeamMemberMobile /> : <TeamMember />}
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	width: 100%;
	user-select: none;
	background: var(--footer-bg-color);
	height: var(--footer-height);
	min-height: var(--footer-height);
	${mobileMediaQuery} {
		padding-bottom: 20px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: var(--min-width);
	max-width: var(--max-width);
	margin: 0 auto;
	width: calc(100% - 20px);
	${mobileMediaQuery} {
		flex-direction: column;
		gap: 20px;
		padding: 5px 2px;
	}
	${desktopMediaQuery} {
		padding: 15px 40px;
	}
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	${mobileMediaQuery} {
		padding-right: 10px;
	}
	${desktopMediaQuery} {
		padding-right: 20px;
	}
`;

const LogoImg = styled.img`
	width: 60px;
	height: auto;
	margin-bottom: 5px;
`;

const Info = styled.div`
	color: #d4dce4;
	word-break: keep-all;
	${mobileMediaQuery} {
		font-size: 0.6rem;
	}
	${desktopMediaQuery} {
		@media (max-width: 800px) {
			font-size: 0.7rem;
		}
		font-size: 0.9rem;
	}
`;

export default Footer;
