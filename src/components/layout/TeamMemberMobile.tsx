import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import BlogLink from './BlogLink';
import { Tooltip } from '@mui/material';

interface TeamMemberMobileProps {
	info: {
		name: string;
		role: string;
		mail: string;
		blogUrl: string;
		githubUrl: string;
	}[];
}

function TeamMemberMobile({ info }: TeamMemberMobileProps) {
	return (
		<Container>
			{info.map(({ name, role, mail, blogUrl, githubUrl }) => (
				<Card key={mail}>
					<Title>
						<SubTitle>{role === 'Frontend' ? 'FE' : 'BE'}</SubTitle>
						{name}
					</Title>
					<ProfileInfo>
						<BlogLink blogUrl={blogUrl} />
						<Tooltip title="github">
							<ProfileLink
								target="_blank"
								rel="noopener noreferrer"
								to={githubUrl}
							>
								<GitHubIcon fontSize="inherit" />
							</ProfileLink>
						</Tooltip>
						<Tooltip title="mail">
							<ProfileLink
								to="#"
								onClick={(e) => {
									window.location.href = `mailto:${mail}`;
									e.preventDefault();
								}}
							>
								<EmailIcon fontSize="inherit" />
							</ProfileLink>
						</Tooltip>
					</ProfileInfo>
				</Card>
			))}
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
