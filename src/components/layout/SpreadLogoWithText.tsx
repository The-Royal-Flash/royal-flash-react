import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import SpreadLogo from './SpreadLogo';

interface LogoTextProps {
	isHover: boolean;
}

function SpreadLogoWithText() {
	const [isHover, setIsHover] = React.useState(false);
	const handleOnMouseOver = () => {
		setIsHover(true);
	};
	const handleMouseOut = () => {
		setIsHover(false);
	};

	return (
		<LogoLink
			to={'/'}
			onMouseOver={handleOnMouseOver}
			onMouseOut={handleMouseOut}
		>
			<Flex>
				<LogoText isHover={isHover}>{'Royal'}</LogoText>
				<LogoText isHover={isHover}>{'Flash'}</LogoText>
			</Flex>
			<SpreadLogo active={isHover} />
		</LogoLink>
	);
}

const LogoLink = styled(Link)`
	transition: all 0.3s ease;
	cursor: pointer;
	display: flex;
	flex-direction: row;
`;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
`;

const LogoText = styled.div<LogoTextProps>`
	color: ${(props) =>
		props.isHover ? 'var(--btn-color)' : 'var(--font-color)'};
	font-size: 24px;
	font-weight: 800;
	transition: all 0.3s ease;
`;

export default SpreadLogoWithText;
