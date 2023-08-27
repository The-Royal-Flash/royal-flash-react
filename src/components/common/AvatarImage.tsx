import { CSSProperties } from 'react';

interface AvatarImageProps {
	src: string | undefined;
	style?: CSSProperties;
}

function AvatarImage({ src, style }: AvatarImageProps) {
	return (
		<img
			src={src}
			alt="User Image"
			style={style}
			onError={(event) => {
				event.currentTarget.src = '/images/default-profile.png';
			}}
		/>
	);
}

export default AvatarImage;
