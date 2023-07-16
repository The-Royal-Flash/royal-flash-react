import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function TeamMember() {
	return (
		<Container>
			<Card>
				<CardHead>
					<Title>Sunhwa</Title>
					<SubTitle>Frontend</SubTitle>
				</CardHead>
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
				<CardHead>
					<Title>Kyusung</Title>
					<SubTitle>Frontend</SubTitle>
				</CardHead>

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
				<CardHead>
					<Title>Hyeonseok</Title>
					<SubTitle>Backend</SubTitle>
				</CardHead>

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
	height: 80px;
	gap: 20px;
	align-items: flex-end;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 130px;
	height: 80px;
	padding: 0.5rem;
	background: #48525d;
	border-radius: 8px;
	backdrop-filter: blur(5px);
	border-bottom: 3px solid rgba(255, 255, 255, 0.44);
	border-left: 3px rgba(255, 255, 255, 0.545) outset;
	box-shadow: -20px 25px 15px rgba(0, 0, 0, 0.28);
	transform: skewX(10deg);
	transition: 0.8s;
	overflow: hidden;
	color: white;

	:hover {
		height: 130px;
		transform: skew(0deg);
		/* background: rgb(65, 65, 66); */
		background: rgba(55, 66, 77, 0.856);
		transition: 0.4s;
	}
`;

const CardHead = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.85rem;
`;

const Title = styled.div`
	font-size: 17px;
	font-weight: 700;
	color: rgb(194, 223, 240);
	text-shadow: -7px 4px 7px rgba(0, 0, 0, 0.273);
`;

const SubTitle = styled(Title)`
	font-size: 12px;
	font-weight: 700;
	color: rgb(102, 176, 219);
`;

const ProfileInfo = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: row;
	gap: 9px;
`;

const ProfileLink = styled(Link)`
	user-select: none;
	text-decoration: none;
	color: white;
	color: inherit;
	font-size: 26px;
	:hover {
		color: rgb(79, 178, 236);
	}
`;

export default TeamMember;
