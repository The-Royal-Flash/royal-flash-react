import { LogoAndMessage, AuthForm, InterchangeButton } from '../auth';

function AuthContents({ variant }: AuthContentsProps) {
	return (
		<>
			<LogoAndMessage variant={variant} />
			<AuthForm variant={variant} />
			<InterchangeButton variant={variant} />
		</>
	);
}

interface AuthContentsProps {
	variant: string;
}

export default AuthContents;
