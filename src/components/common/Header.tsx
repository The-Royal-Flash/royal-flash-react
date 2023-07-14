import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandTooltipButton from './ExpandTooltipButton';
import SpreadLogoWithText from './SpreadLogoWithText';
import ImageButton from './ImageButton';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

function Header() {
	const move = useNavigate();

	const isLogin = true;
	// TODO: 로그인 상태 가져오기

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
				)}
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	background: var(--bg-color);
	margin-bottom: 10px;
	width: 100%;
	user-select: none;
	${mobileMediaQuery} {
		min-height: 50px;
	}
	${desktopMediaQuery} {
		min-height: 90px;
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
	${mobileMediaQuery} {
		margin: 0 auto;
	}
	${desktopMediaQuery} {
		height: 70px;
		margin: 10px auto;
	}
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
	color: var(--border-color);
	border: 1px solid var(--border-color);
	border-radius: 13px;
	padding: 4px;
`;

export default Header;
