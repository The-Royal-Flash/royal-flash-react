import styled from '@emotion/styled';
import { QuizletCard } from '.';
import { SearchQuizletItem } from '../../types';
import { mobileMediaQuery } from '../../utils/mediaQueries';

interface QuizletsProps {
	quizletList?: Array<SearchQuizletItem>;
	ownedOnly: boolean;
}

function Quizlets({ quizletList, ownedOnly }: QuizletsProps) {
	return (
		<Container>
			{quizletList?.map((quizlet) => (
				<QuizletCard
					key={quizlet._id}
					quizlet={quizlet}
					ownedOnly={ownedOnly}
				/>
			))}
		</Container>
	);
}

const Container = styled.div`
	width: 80%;
	${mobileMediaQuery} {
		width: 100%;
	}
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export default Quizlets;
