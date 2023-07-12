import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import LogoutIcon from '@mui/icons-material/Logout';
import { BREAK_POINTS } from '../../constants';
import ExpandTooltipButton from './ExpandTooltipButton';
import SpreadLogoWithText from './SpreadLogoWithText';
import ImageButton from './ImageButton';

const Container = styled.div`
	display: flex;
	background: var(--bg-color);
	margin-bottom: 10px;
	width: 100%;
	min-height: 50px;
	user-select: none;
	@media (min-width: ${BREAK_POINTS.desktop_min}) {
		min-height: 95px;
	}
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
	@media (max-width: ${BREAK_POINTS.mobile_max}) {
		font-size: 22px;
	}
	@media (min-width: ${BREAK_POINTS.desktop_min}) {
		font-size: 28px;
	}
`;

const ResponsiveLoginIcon = styled(LoginIcon)`
	@media (max-width: ${BREAK_POINTS.mobile_max}) {
		font-size: 22px;
	}
	@media (min-width: ${BREAK_POINTS.desktop_min}) {
		font-size: 28px;
	}
`;

const ColorIconButton = styled(IconButton)`
	color: var(--border-color);
	border: 1px solid var(--border-color);
	border-radius: 13px;
	padding: 4px;
`;

function Header() {
	const move = useNavigate();

	const isLogin = true;
	// TODO: 로그인 상태 가져오기

	const isDesktopMode = useMediaQuery(
		`@media(min-width: ${BREAK_POINTS.desktop_min})`,
	);

	return (
		<Container>
			<Wrapper>
				{isDesktopMode ? (
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
							{!isLogin ? (
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
											// TODO: 로그아웃 기능
											console.log('logout');
										}}
										icon={<LogoutIcon />}
									/>
								</>
							)}
						</Flex>
					</>
				) : (
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
							{!isLogin ? (
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
												// TODO: 로그아웃 기능
												console.log('logout');
											}}
										>
											<LogoutIcon />
										</ColorIconButton>
									</Tooltip>
								</>
							)}
						</Flex>
					</>
				)}
			</Wrapper>
		</Container>
	);
}

export default Header;
