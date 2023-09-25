import styled from '@emotion/styled';
import { ImageButton } from '../common';
import { useNavigate } from 'react-router-dom';

function LogoAndMessage({ variant }: LogoAndMessageProps) {
	const navigate = useNavigate();
	return (
		<LogoMessageWrapper>
			<ImageButton
				buttonName="main"
				width={100}
				height={100}
				handleClick={() => navigate('/')}
			>
				<Logo src="/logo/royal-flash-logo.png" alt="로얄플래시 로고" />
			</ImageButton>
			{variant === 'login' ? (
				<WelcomeMessage>
					<span>Royal Flash</span> 팀은 당신의 내일을 응원합니다!
				</WelcomeMessage>
			) : (
				<WelcomeMessage>
					회원가입 후 내일을 위한 준비를 시작하세요.
				</WelcomeMessage>
			)}
		</LogoMessageWrapper>
	);
}

interface LogoAndMessageProps {
	variant: string;
}

const LogoMessageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin-bottom: 30px;
	align-items: center;
`;

const Logo = styled.img`
	width: 100px;
	margin-bottom: 30px;
`;

const WelcomeMessage = styled.p`
	color: var(--font-color);
	size: 16px;

	> span {
		font-weight: bold;
	}
`;

export default LogoAndMessage;
