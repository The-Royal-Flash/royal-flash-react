import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function TeamMemberMobile() {
	return (
		<Container>
			<Card>
				<Title>
					<SubTitle>FE</SubTitle>
					Sunhwa
				</Title>
				<ProfileInfo>
					<ProfileLink to="#">
						<InfoIcon fontSize="inherit" />
					</ProfileLink>
					<ProfileLink to="#">
						<GitHubIcon fontSize="inherit" />
					</ProfileLink>
					<ProfileLink to="#">
						<LinkedInIcon fontSize="inherit" />
					</ProfileLink>
				</ProfileInfo>
			</Card>
			<Card>
				<Title>
					<SubTitle>FE</SubTitle>Kyusung
				</Title>
				<ProfileInfo>
					<ProfileLink to="#">
						<InfoIcon fontSize="inherit" />
					</ProfileLink>
					<ProfileLink to="#">
						<GitHubIcon fontSize="inherit" />
					</ProfileLink>
					<ProfileLink to="#">
						<LinkedInIcon fontSize="inherit" />
					</ProfileLink>
				</ProfileInfo>
			</Card>
			<Card>
				<Title>
					<SubTitle>BE</SubTitle>Hyeonseok
				</Title>
				<ProfileInfo>
					<ProfileLink to="#">
						<InfoIcon fontSize="inherit" />
					</ProfileLink>
					<ProfileLink to="#">
						<GitHubIcon fontSize="inherit" />
					</ProfileLink>
					<ProfileLink to="#">
						<LinkedInIcon fontSize="inherit" />
					</ProfileLink>
				</ProfileInfo>
			</Card>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 240px;
	height: 140px;
	gap: 10px;
`;

const Card = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 80px;
	padding: 0.3rem;
	background: #48525d;
	border-radius: 8px;
	box-shadow: -5px 6px 3px rgba(0, 0, 0, 0.18);
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
	color: white;
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 16px;
	font-weight: 500;
	color: rgb(209, 229, 240);
`;

const SubTitle = styled.span`
	font-size: 16px;
	font-weight: 500;
	margin: 0px 7px;
	color: rgb(102, 176, 219);
`;

const ProfileInfo = styled.div`
	padding: 0px;
	display: flex;
	flex-direction: row;
	gap: 8px;
	margin-top: 4px;
`;

const ProfileLink = styled(Link)`
	user-select: none;
	text-decoration: none;
	color: white;
	color: inherit;
	font-size: 24px;
	:hover {
		/* border-bottom: 1px solid white; */
		color: rgb(79, 178, 236);
	}
`;

export default TeamMemberMobile;
