import React from 'react';
import styled from '@emotion/styled';

interface ContainerProps {
	tooltip: string;
	widthToExpand: number;
}

interface ExpandIconButtonProps extends ContainerProps {
	icon: React.ReactNode;
	handleClick: () => void;
}

const Container = styled.button<ContainerProps>`
	display: flex;
	position: relative;
	border: none;
	cursor: pointer;
	align-items: center;
	padding-right: 10px;
	padding-left: 5px;
	width: 40px;
	height: 60px;
	border-radius: 5px;
	border: 2.5px solid var(--border-color);
	background: var(--button-color);
	box-shadow:
		0px 3px 1px -2px rgba(0, 0, 0, 0.2),
		0px 2px 2px 0px rgba(0, 0, 0, 0.14),
		0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	transition: all 0.3s ease;

	:after {
		content: '';
		opacity: 0;
		color: white;
		font-weight: 500;
		font-size: 17px;
		transition: all 0.3s ease;
	}

	:hover {
		width: ${(props) => 40 + props.widthToExpand}px;
		background: var(--secondary-color);
		border: 2.5px solid var(--secondary-color);
		transition: all 0.3s ease;
		:after {
			content: '${(props) => props.tooltip}';
			text-align: left;
			padding-left: 30px;
			margin-left: 3px;
			color: white;
			opacity: 1;
			transition: all 0.2s ease 0.1s;
		}
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	top: 14px;
	left: 3.4px;
	width: 30px;
	height: 30px;
	color: white;
	font-size: 28px;
`;

function ExpandTooltipButton({
	tooltip,
	widthToExpand,
	icon,
	handleClick,
}: ExpandIconButtonProps) {
	return (
		<Container
			onClick={handleClick}
			tooltip={tooltip}
			widthToExpand={widthToExpand}
		>
			<IconWrapper>{icon}</IconWrapper>
		</Container>
	);
}

export default ExpandTooltipButton;
