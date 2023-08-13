import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SpreadLogoWithText from './SpreadLogoWithText';
import { ExpandTooltipButton } from '../common';
import { useUserContext } from '../../contexts/UserContext';

function DesktopHeader() {
	const navigate = useNavigate();
	const { user, logoutUser } = useUserContext();

	return (
		<>
			<Flex>
				<SpreadLogoWithText />
				<ExpandTooltipButton
					tooltip="Search"
					widthToExpand={70}
					handleClick={() => {
						navigate('/quizlet');
					}}
					icon={<SearchIcon />}
				/>
			</Flex>
			<Flex>
				{!user ? (
					<ExpandTooltipButton
						tooltip="로그인"
						widthToExpand={60}
						handleClick={() => {
							navigate('/login');
						}}
						icon={<LoginIcon />}
					/>
				) : (
					<>
						<ExpandTooltipButton
							tooltip="프로필"
							widthToExpand={70}
							handleClick={() => {
								navigate('/profile');
							}}
							icon={<PersonIcon />}
						/>
						<ExpandTooltipButton
							tooltip="나의 학습"
							widthToExpand={70}
							handleClick={() => {
								navigate('/quizlet/my-quizlet');
							}}
							icon={<AutoStoriesIcon />}
						/>
						<ExpandTooltipButton
							tooltip="학습세트 생성"
							widthToExpand={70}
							handleClick={() => {
								navigate('/quizlet/create');
							}}
							icon={<PostAddIcon />}
						/>
						<ExpandTooltipButton
							tooltip="학습세트 관리"
							widthToExpand={70}
							handleClick={() => {
								navigate('/quizlet/my-quizlet/owned');
							}}
							icon={<StyleIcon />}
						/>
						<ExpandTooltipButton
							tooltip="로그아웃"
							widthToExpand={70}
							handleClick={() => {
								logoutUser();
								navigate('/');
							}}
							icon={<LogoutIcon />}
						/>
					</>
				)}
			</Flex>
		</>
	);
}

const Flex = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
	box-sizing: border-box;
`;

export default DesktopHeader;
