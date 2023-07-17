import {
	LogoAndMessage,
	LoginForm,
	SignupForm,
	InterchangeButton,
} from '../auth';

interface AuthContentsProps {
	variant: string;
}

function AuthContents({ variant }: AuthContentsProps) {
	return (
		<>
			<LogoAndMessage variant={variant} />
			{variant === 'login' ? <LoginForm /> : <SignupForm />}
			<InterchangeButton variant={variant} />
		</>
	);
}

export default AuthContents;
