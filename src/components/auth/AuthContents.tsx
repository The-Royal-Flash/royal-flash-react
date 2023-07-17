import { LogoAndMessage, AuthForm, InterchangeButton } from '../auth';

interface AuthContentsProps {
	variant: string;
}

function AuthContents({ variant }: AuthContentsProps) {
	return (
		<>
			<LogoAndMessage variant={variant} />
			<AuthForm variant={variant} />
			<InterchangeButton variant={variant} />
		</>
	);
}

export default AuthContents;
