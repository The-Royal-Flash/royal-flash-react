import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import * as Theme from '../../constants';
import SpreadLogo from './SpreadLogo';

type LogoWrapperProps = {
	isHover: boolean;
};

const LogoWrapper = styled(Link)<LogoWrapperProps>`
	width: ${(props) => (props.isHover ? '170px' : '140px')};
	transition: all 0.3s ease;
	cursor: pointer;
	display: flex;
	flex-direction: row;
`;

const LogoText = styled.div<LogoWrapperProps>`
	width: 80px;
	margin-top: 4px;
	color: ${(props) => (props.isHover ? Theme.COLOR.primary : '#474a4d')};
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
