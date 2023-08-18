import styled from '@emotion/styled';
import { MemeberCard } from '.';

interface TeamMemberProps {
	info: {
		name: string;
		role: string;
		mail: string;
		blogUrl: string;
		githubUrl: string;
	}[];
}

function TeamMember({ info }: TeamMemberProps) {
	return (
		<Container>
			{info.map(({ name, role, mail, blogUrl, githubUrl }) => (
				<MemeberCard
					key={mail}
					name={name}
					role={role}
					mail={mail}
					blogUrl={blogUrl}
					githubUrl={githubUrl}
				/>
			))}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	height: 80px;
	gap: 20px;
	align-items: flex-end;
`;

export default TeamMember;
