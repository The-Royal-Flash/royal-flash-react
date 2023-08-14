import styled from '@emotion/styled';
import {
	desktopMediaQuery,
	mobileMediaQuery,
} from '../../../utils/mediaQueries';

const QuizletInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	${mobileMediaQuery} {
		padding: 30px 15px;
		gap: 10px;
	}
	${desktopMediaQuery} {
		padding: 50px 40px;
		gap: 20px;
	}
`;

export default QuizletInfoContainer;
