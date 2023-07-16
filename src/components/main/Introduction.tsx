import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import FadeIn from '../common/FadeIn';

function Introduction() {
	return (
		<TopBox>
			<FadeIn index={1}>
				<Title>{'암기를 위한'}</Title>
			</FadeIn>
			<FadeIn index={1}>
				<Title>{'가장 쉬운 방법'}</Title>
			</FadeIn>
			<FadeIn index={1}>
				<Title>{'Royal Flash'}</Title>
			</FadeIn>
			<FadeIn index={2}>
				<SubTitle>{'가장 쉽고 빠르게 외우고 합격하자!'}</SubTitle>
			</FadeIn>
		</TopBox>
	);
}

const TopBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 340px;

	${mobileMediaQuery} {
		margin: 10px 0px;
		padding: 0px 30px;
		border-radius: 5px;
	}
	${desktopMediaQuery} {
		padding: 40px;
		margin-top: 80px;
	}
`;

const Title = styled(Typography)`
	font-weight: 800;
	word-break: keep-all;
	line-height: 1.3;
	color: var(--font-color);
	${mobileMediaQuery} {
		font-size: 2rem;
	}
	${desktopMediaQuery} {
		@media (max-width: 690px) {
			font-size: 4rem;
		}
		font-size: 5rem;
	}
`;

const SubTitle = styled(Typography)`
	font-weight: 600;
	word-break: keep-all;
	color: var(--secondary-color);
	${mobileMediaQuery} {
		margin-top: 10px;
		font-size: 1rem;
	}
	${desktopMediaQuery} {
		margin-top: 20px;
		font-size: 2rem;
	}
`;

export default Introduction;
