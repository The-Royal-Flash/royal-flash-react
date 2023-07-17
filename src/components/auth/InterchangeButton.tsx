import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function InterchangeButton({ variant }: InterchangeButtonProps) {
	return (
		<RegisterLinkWrapper>
			<RegisterLink to={variant === 'login' ? '/signup' : '/login'}>
				<span>
					{variant === 'login'
						? '아직 회원이 아니신가요?'
						: '이미 회원이신가요?'}
				</span>
			</RegisterLink>
		</RegisterLinkWrapper>
	);
}

interface InterchangeButtonProps {
	variant: string;
}

const RegisterLinkWrapper = styled(Box)`
	width: 100%;
	text-align: center;
	margin-top: 10px;
`;

const RegisterLink = styled(Link)`
	text-align: center;
	color: gray;

	> span {
		font-size: 12px;
		transition: 0.1s ease-in;

		:hover {
			color: var(--font-color);
		}
	}
`;

export default InterchangeButton;
