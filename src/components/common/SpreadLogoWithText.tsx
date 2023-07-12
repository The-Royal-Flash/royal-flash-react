import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import SpreadLogo from './SpreadLogo';
import { LinkProps } from '@mui/material';

type LogoWrapperProps = {
	isHover: boolean;
};

const LogoWrapper = styled(Link)<
	LinkProps & React.RefAttributes<HTMLAnchorElement> & LogoWrapperProps
>`
	width: ${(props) => (props.isHover ? '170px' : '140px')};
	transition: all 0.3s ease;
	cursor: pointer;
	display: flex;
	flex-direction: row;
`;

const LogoText = styled.div<LogoWrapperProps>`
	width: 80px;
	margin-top: 4px;
	color: ${(props) =>
		props.isHover ? 'var(--yellow-color)' : 'var(--font-color)'};
	font-size: 24px;
	font-weight: 800;
	transition: all 0.3s ease;
`;

function SpreadLogoWithText() {
	const [isHover, setIsHover] = React.useState(false);
	const handleOnMouseOver = () => {
		setIsHover(true);
	};
	const handleMouseOut = () => {
		setIsHover(false);
	};

	return (
		<LogoWrapper
			to={'/'}
			isHover={isHover}
			onMouseOver={handleOnMouseOver}
			onMouseOut={handleMouseOut}
		>
			<LogoText isHover={isHover}>
				{'Royal'}
				<br />
				{'Flash'}
			</LogoText>
			<SpreadLogo active={isHover} />
		</LogoWrapper>
	);
}

export default SpreadLogoWithText;
