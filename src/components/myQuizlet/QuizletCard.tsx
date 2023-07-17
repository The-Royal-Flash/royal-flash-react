import React from 'react';
import styled from '@emotion/styled';
import { Chip, LinearProgress } from '@mui/material';

function QuizletCard() {
	// PLACEHOLDER

	return (
		<Container>
			<QuizletTitle>Frontend Interview Questions - Core 100</QuizletTitle>
			<ChipsWrapper>
				<StyledChip label="frontend" variant="outlined" color="primary" />
				<StyledChip label="javascript" variant="outlined" color="primary" />
				<StyledChip label="web dev" variant="outlined" color="primary" />
				<StyledChip label="interview" variant="outlined" color="primary" />
				<StyledChip label="core" variant="outlined" color="primary" />
				<StyledChip label="questions" variant="outlined" color="primary" />
			</ChipsWrapper>
			<Data>
				<CountData>
					오답노트 <span>35</span>문항
				</CountData>
				<CountData>
					퀴즈 응시 <span>10</span>회
				</CountData>
				<ScoreData>
					<span>Score</span>
					<div>
						<Score>13</Score>/<Total>50</Total>
					</div>
					<LastQuizTime>2023/03/30 22:00</LastQuizTime>
				</ScoreData>
			</Data>
			<ProgressBar
				variant="determinate"
				value={Math.random() * (13 / 50) * 100}
			/>
		</Container>
	);
}

const Container = styled.div`
	border: 1px solid var(--border-color);
	width: 100%;
	padding: 15px;
	position: relative;
	cursor: pointer;
	transition: 0.1s ease-in;

	:hover {
		scale: 1.005;
	}

	:hover > p {
		color: var(--secondary-color);
	}
`;

const QuizletTitle = styled.p`
	padding: 5px;
	font-weight: bold;
`;

const ChipsWrapper = styled.div`
	margin-top: 5px;
`;

const StyledChip = styled(Chip)`
	margin: 5px;
`;

const Data = styled.div`
	position: relative;
	display: flex;
	gap: 30px;
	margin-top: 10px;
	padding: 5px;
	align-items: end;
`;

const CountData = styled.div`
	color: gray;
	font-size: 14px;

	> span {
		color: var(--secondary-color);
		font-size: 20px;
		font-weight: bold;
	}
`;

const ScoreData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	margin-left: auto;
`;

const Score = styled.span`
	color: var(--secondary-color);
	font-size: 20px;
	font-weight: bold;
`;

const Total = styled.span`
	color: gray;
	font-size: 20px;
	font-weight: bold;
`;

const LastQuizTime = styled.span`
	color: gray;
	font-size: 10px;
	font-weight: light;
`;

const ProgressBar = styled(LinearProgress)`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	z-index: 999;
`;

export default QuizletCard;
