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
	width: ${(props) => (props.isHover ? '190px' : '150px')};
	transition: all 0.3s ease;
	cursor: pointer;
	display: flex;
	flex-direction: row;
`;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
`;

const LogoText = styled.div<LogoWrapperProps>`
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
			<Flex>
				<LogoText isHover={isHover}>{'Royal'}</LogoText>
				<LogoText isHover={isHover}>{'Flash'}</LogoText>
			</Flex>
			<SpreadLogo active={isHover} />
		</LogoWrapper>
	);
}

export default SpreadLogoWithText;
