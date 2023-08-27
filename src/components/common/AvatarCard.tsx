import styled from '@emotion/styled';
import { AvatarImage } from '.';

interface AvatarCardProps {
	email: string;
	nickname: string;
	avatarUrl?: string;
}

function AvatarCard({ email, nickname, avatarUrl }: AvatarCardProps) {
	return (
		<Container>
			<AvatarWrapper>
				<AvatarImage
					src={avatarUrl}
					style={{ width: '40px', height: '40px', borderRadius: '100%' }}
				/>
			</AvatarWrapper>
			<Nickname>{nickname}</Nickname>
			<Email>{email}</Email>
		</Container>
	);
}

const Container = styled.div`
	border: 1px solid var(--box-border-color);
	display: grid;
	grid-template-columns: 50px 1fr;
	column-gap: 3px;
	border-radius: 10px;
	margin-top: 35px;
	padding: 12px;
`;

const AvatarWrapper = styled.div`
	grid-row: 1/3;
	display: flex;
	align-items: center;
`;

const Nickname = styled.div`
	font-size: 1rem;
	font-weight: 500;
	color: black;
`;

const Email = styled.div`
	font-size: 0.7rem;
	font-weight: 400;
	color: gray;
`;

export default AvatarCard;
