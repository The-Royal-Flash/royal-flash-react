import styled from '@emotion/styled';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { StatusContainer } from './styles';
import { Typography } from '@mui/material';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

interface LearningCountStatusProps {
	studyCount: number;
}

function LearningCountStatus({ studyCount }: LearningCountStatusProps) {
	return (
		<StatusContainer>
			<Container>
				<Wrapper>
					<Icon />
					<Label>학습 횟수</Label>
				</Wrapper>
				<StudyCount>
					{studyCount}
					<Text>회</Text>
				</StudyCount>
			</Container>
		</StatusContainer>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	${mobileMediaQuery} {
		height: 100px;
		padding: 0 30px;
	}
	${desktopMediaQuery} {
		padding: 10px 20px;
		@media (min-width: 900px) {
			padding: 0 10%;
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Label = styled(Typography)`
	font-weight: 600;
	${mobileMediaQuery} {
		font-size: 1.4rem;
	}
	${desktopMediaQuery} {
		font-size: 1.3rem;
		@media (min-width: 900px) {
			font-size: 1.6rem;
		}
	}
`;

const Icon = styled(PlaylistAddCheckIcon)`
	color: var(--primary-color);
`;

const StudyCount = styled.div`
	font-size: 2.8rem;
	font-weight: 600;
`;

const Text = styled.span`
	font-size: 1rem;
	font-weight: 500;
	margin-left: 4px;
`;

export default LearningCountStatus;
