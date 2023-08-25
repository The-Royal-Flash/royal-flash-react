import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { mobileMediaQuery } from '../../utils/mediaQueries';

interface NoResultMessageProps {
	ownedOnly: boolean;
}

function NoResultMessage({ ownedOnly }: NoResultMessageProps) {
	const navigate = useNavigate();

	return (
		<Container>
			<ErrorIcon />
			<ErrorMessage>
				Uh oh! 검색 내용에 맞는 결과가 없어요! 다른 내용으로 검색해보세요.
			</ErrorMessage>
			<ButtonBox>
				<BackButton
					variant="outlined"
					startIcon={<UndoIcon />}
					onClick={() => navigate(0)}
				>
					돌아가기
				</BackButton>
				{ownedOnly && (
					<BackButton
						variant="outlined"
						startIcon={<CreateNewFolderIcon />}
						onClick={() => navigate('/quizlet/create')}
					>
						학습세트 만들기
					</BackButton>
				)}
			</ButtonBox>
		</Container>
	);
}

const Container = styled.div`
	height: 500px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: center;

	${mobileMediaQuery} {
		width: 80%;
	}
`;

const ErrorIcon = styled(SearchOffIcon)`
	color: gray;
	font-size: 50px;
`;

const ErrorMessage = styled.p`
	color: gray;
`;

const ButtonBox = styled.div`
	display: flex;
	gap: 10px;
`;

const BackButton = styled(Button)`
	width: 200px;
	margin-top: 20px;
`;

export default NoResultMessage;
