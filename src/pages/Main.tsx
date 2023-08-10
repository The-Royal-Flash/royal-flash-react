import styled from '@emotion/styled';
import {
	Introduction,
	IntroductionCreateQuizlet,
	IntroductionMyQuizlet,
	IntroductionSearch,
	IntroductionStudy,
} from '../components';
import { desktopMediaQuery } from '../utils/mediaQueries';

function Main() {
	return (
		<Container>
			<Introduction />
			<IntroductionStudy />
			<IntroductionSearch />
			<IntroductionCreateQuizlet />
			<IntroductionMyQuizlet />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	${desktopMediaQuery} {
		margin-top: 50px;
	}
`;

export default Main;
