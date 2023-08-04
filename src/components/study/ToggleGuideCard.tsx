import React from 'react';
import styled from '@emotion/styled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

interface ToggleGuideCardProps {
	target: string;
	display: boolean;
}

interface ContainerProps {
	display: boolean;
}

function ToggleGuideCard({ target, display }: ToggleGuideCardProps) {
	return (
		<Container display={display}>
			<p>{target === 'answer' ? '답안 보기' : '질문 보기'}</p>
			<AutoStoriesIcon color="inherit" />
		</Container>
	);
}

const Container = styled.div<ContainerProps>`
	opacity: ${(props) => (props.display ? 1 : 0)};
	transition: 0.1s ease-in;
	width: 100%;
	height: 100%;
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 9999;
	background-color: #000000b9;
	border-radius: 10px 10px 0 0;
	color: #fff;
`;

export default ToggleGuideCard;
