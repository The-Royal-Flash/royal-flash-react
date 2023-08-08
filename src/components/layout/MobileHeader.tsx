import { useState } from 'react';
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import {
	AppBar,
	Button,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { ImageButton } from '../common';

function MobileHeader() {
	const navigate = useNavigate();
	const { user, logoutUser } = useUserContext();
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const toggleMenu = () => setIsOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu);

	return (
		<>
			<Container position="fixed">
				<Wrapper>
					<Flex>
						<ImageButton
							width={50}
							height={50}
							handleClick={() => {
								navigate('/');
							}}
						>
							<LogoImg src="/logo/royal-flash-logo.png" />
						</ImageButton>
					</Flex>
					<Flex>
						<Tooltip title="Search">
							<StyledButton
								variant="contained"
								startIcon={<StyledSearchIcon />}
								onClick={() => {
									navigate('/quizlet');
								}}
							>
								Search
							</StyledButton>
						</Tooltip>
						{!user ? (
							<LoginButton
								size="small"
								variant="contained"
								sx={{ padding: '4px 8px' }}
								onClick={() => {
									toggleMenu();
									navigate('/login');
								}}
							>
								Login
							</LoginButton>
						) : (
							<StyledIconButton onClick={toggleMenu}>
								<MenuIcon />
							</StyledIconButton>
						)}
					</Flex>
				</Wrapper>
			</Container>

			<Drawer anchor="top" open={isOpenMenu} onClose={() => toggleMenu()}>
				<MenuContainer>
					<List>
						<ListItemButton
							onClick={() => {
								toggleMenu();
								navigate('/profile');
							}}
						>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText>프로필</ListItemText>
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								toggleMenu();
								navigate('/quizlet/my-quizlet');
							}}
						>
							<ListItemIcon>
								<AutoStoriesIcon />
							</ListItemIcon>
							<ListItemText>나의 학습</ListItemText>
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								toggleMenu();
								navigate('/quizlet/create');
							}}
						>
							<ListItemIcon>
								<PostAddIcon />
							</ListItemIcon>
							<ListItemText>학습세트 생성</ListItemText>
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								toggleMenu();
								// TODO
							}}
						>
							<ListItemIcon>
								<StyleIcon />
							</ListItemIcon>
							<ListItemText>학습세트 관리</ListItemText>
						</ListItemButton>
						<ListItemButton
							onClick={() => {
								toggleMenu();
								logoutUser();
								navigate('/');
							}}
						>
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText>로그아웃</ListItemText>
						</ListItemButton>
					</List>
				</MenuContainer>
			</Drawer>
		</>
	);
}

const Container = styled(AppBar)`
	position: sticky;
	display: flex;
	top: 0;
	width: 100%;
	height: var(--header-height);
	min-height: var(--header-height);
	background: white;
	border-bottom: 1px solid var(--light-gray);
	user-select: none;
	box-shadow: none;
	z-index: 1400;
`;

const Wrapper = styled(Toolbar)`
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

const StyledSearchIcon = styled(SearchIcon)`
	font-size: 30px;
`;

const StyledButton = styled(Button)`
	height: 36px;
	border-radius: 36px;
	padding: 5px 15px 3px;
	font-size: 0.95rem;
`;

const LoginButton = styled(StyledButton)`
	background-color: var(--dark-gray);
`;

const StyledIconButton = styled(IconButton)`
	height: 36px;
	width: 36px;
	border: 1px solid var(--btn-border-color);
	border-radius: 13px;
	padding: 4px;
	color: var(--btn-border-color);
`;

const MenuContainer = styled.div`
	position: relative;
	height: fit-content;
	padding-top: 65px;
`;

export default MobileHeader;
