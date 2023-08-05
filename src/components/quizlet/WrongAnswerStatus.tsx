import styled from '@emotion/styled';
import { CircularProgress, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { StatusContainer } from './styles';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';

interface WrongAnswerStatusProps {
	numOfQuestionList: number;
	numOfQuestionListToReview: number;
}

function WrongAnswerStatus({
	numOfQuestionList,
	numOfQuestionListToReview,
}: WrongAnswerStatusProps) {
	return (
		<StatusContainer>
			<Container>
				<IconWrapper>
					<ProgressIconWrapper>
						<ProgressBackground variant="determinate" value={100} size={60} />
						<WrongProgress
							variant="determinate"
							value={(numOfQuestionListToReview / numOfQuestionList) * 100}
							size={60}
						/>
					</ProgressIconWrapper>
					<Icon />
				</IconWrapper>

				<Wrapper>
					<Label>오답 문항 수</Label>
					<ScoreWrapper>
						<WrongQuestion>{numOfQuestionListToReview}</WrongQuestion>
						<AllQuestion>/ {numOfQuestionList}</AllQuestion>
					</ScoreWrapper>
				</Wrapper>
			</Container>
		</StatusContainer>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
	height: 100%;
	${mobileMediaQuery} {
		height: 100px;
		padding: 22px 10px 22px 23px;
	}
	${desktopMediaQuery} {
		padding: 20px 10px 17px 20px;
		@media (min-width: 900px) {
			padding: 20px 10% 17px;
			gap: 30px;
		}
	}
`;

const IconWrapper = styled.div`
	display: inline-flex;
	position: relative;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
`;

const Icon = styled(MenuBookIcon)`
	width: 27px;
	height: 27px;
`;

const ProgressIconWrapper = styled.div`
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const WrongProgress = styled(CircularProgress)`
	position: absolute;
	margin: auto auto;
`;
const ProgressBackground = styled(CircularProgress)`
	position: absolute;
	margin: auto auto;
	color: #d9d9d9;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Label = styled(Typography)`
	font-weight: 600;
	${mobileMediaQuery} {
		font-size: 1.2rem;
	}
	${desktopMediaQuery} {
		font-size: 0.9rem;
		font-weight: 700;
		@media (min-width: 900px) {
			font-size: 1.2rem;
		}
	}
`;

const ScoreWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: baseline;
	gap: 10px;
	${mobileMediaQuery} {
		margin-top: -10px;
	}
	${desktopMediaQuery} {
		margin-top: -7px;
	}
`;

const WrongQuestion = styled.div`
	font-size: 2.2rem;
	font-weight: 600;
	color: var(--card-color);
`;

const AllQuestion = styled.div`
	font-size: 1.1rem;
	font-weight: 500;
	color: var(--footer-bg-color);
`;

export default WrongAnswerStatus;
