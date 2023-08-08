import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import LogoutIcon from '@mui/icons-material/Logout';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import { ExpandTooltipButton, ImageButton } from '../common';
import SpreadLogoWithText from './SpreadLogoWithText';
import { useUserContext } from '../../contexts/UserContext';

function Header() {
	const move = useNavigate();
	const { user, logoutUser } = useUserContext();

	const isMobile = useMediaQuery(mobileMediaQuery);

	return (
		<Container>
			<Wrapper>
				{isMobile ? (
					<>
						<Flex>
							<ImageButton
								width={50}
								height={50}
								handleClick={() => {
									move('/');
								}}
							>
								<LogoImg src="/logo/royal-flash-logo.png" />
							</ImageButton>
						</Flex>
						<Flex>
							<Tooltip title="Search">
								<ColorIconButton
									onClick={() => {
										move('/quizlet');
									}}
								>
									<ResponsiveSearchIcon />
								</ColorIconButton>
							</Tooltip>
							{!user ? (
								<Button
									size="small"
									variant="contained"
									startIcon={<ResponsiveLoginIcon />}
									sx={{ padding: '4px 8px' }}
								>
									Login
								</Button>
							) : (
								<>
									<Tooltip title="Profile">
										<ColorIconButton
											onClick={() => {
												move('/profile');
											}}
										>
											<PersonIcon />
										</ColorIconButton>
									</Tooltip>
									<Tooltip title="My Quizlet">
										<ColorIconButton
											onClick={() => {
												move('/quizlet/my-quizlet');
											}}
										>
											<StyleIcon />
										</ColorIconButton>
									</Tooltip>
									<Tooltip title="Logout">
										<ColorIconButton
											onClick={() => {
												logoutUser();
												move('/');
											}}
										>
											<LogoutIcon />
										</ColorIconButton>
									</Tooltip>
								</>
							)}
						</Flex>
					</>
				) : (
					<>
						<Flex>
							<SpreadLogoWithText />
							<ExpandTooltipButton
								tooltip="Search"
								widthToExpand={70}
								handleClick={() => {
									move('/quizlet');
								}}
								icon={<ResponsiveSearchIcon />}
							/>
						</Flex>
						<Flex>
							{!user ? (
								<ExpandTooltipButton
									tooltip="Login"
									widthToExpand={60}
									handleClick={() => {
										move('/login');
									}}
									icon={<ResponsiveLoginIcon />}
								/>
							) : (
								<>
									<ExpandTooltipButton
										tooltip="Profile"
										widthToExpand={70}
										handleClick={() => {
											move('/profile');
										}}
										icon={<PersonIcon />}
									/>
									<ExpandTooltipButton
										tooltip="My Quizlet"
										widthToExpand={70}
										handleClick={() => {
											move('/quizlet/my-quizlet');
										}}
										icon={<StyleIcon />}
									/>
									<ExpandTooltipButton
										tooltip="Logout"
										widthToExpand={70}
										handleClick={() => {
											logoutUser();
											move('/');
										}}
										icon={<LogoutIcon />}
									/>
								</>
							)}
						</Flex>
					</>
				)}
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	position: sticky;
	display: flex;
	top: 0;
	width: 100%;
	height: var(--header-height);
	min-height: var(--header-height);
	background: white;
	border-bottom: 1px solid var(--light-gray);
	user-select: none;
	z-index: 1000;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
	min-width: var(--min-width);
	max-width: var(--max-width);
	width: calc(100% - 40px);
	margin: 0 auto;
`;

const Flex = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
	box-sizing: border-box;
`;

const LogoImg = styled.img`
	height: auto;
	width: 50px;
`;

const ResponsiveSearchIcon = styled(SearchIcon)`
	${mobileMediaQuery} {
		font-size: 22px;
	}
	${desktopMediaQuery} {
		font-size: 28px;
	}
`;

const ResponsiveLoginIcon = styled(LoginIcon)`
	${mobileMediaQuery} {
		font-size: 22px;
	}
	${desktopMediaQuery} {
		font-size: 28px;
	}
`;

const ColorIconButton = styled(IconButton)`
	color: var(--btn-border-color);
	border: 1px solid var(--btn-border-color);
	border-radius: 13px;
	padding: 4px;
`;

export default Header;
