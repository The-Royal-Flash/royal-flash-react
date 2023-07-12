import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import { BREAK_POINTS } from '../../constants';
import TeamMember from './TeamMember';
import TeamMemberMobile from './TeamMemberMobile';

const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 10px 0;
	background: var(--footer-bg-color);
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: var(--min-width-px);
	max-width: var(--max-width-px);
	margin: 0 auto;
	width: calc(100% - 20px);
	padding: 15px 40px;
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	const isDesktopMode = useMediaQuery(
		`@media(min-width: ${BREAK_POINTS.desktop_min})`,
	);

	return (
		<Container>
			<Wrapper>
				<InfoWrapper>
					<LogoImg src="/logo/royal-flash-logo.png" />
					<Info>반드시 취직하구 행복합시동</Info>
					<Info>All Copyrights Reserved Royal Flash 2023</Info>
				</InfoWrapper>
				{isDesktopMode ? <TeamMember /> : <TeamMemberMobile />}
			</Wrapper>
		</Container>
	);
}

export default Footer;
