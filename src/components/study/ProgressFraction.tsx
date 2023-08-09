import styled from '@emotion/styled';
import { mobileMediaQuery } from '../../utils/mediaQueries';

interface ProgressFractionProps {
	numerator: number;
	denominator?: number;
}

function ProgressFraction({ numerator, denominator }: ProgressFractionProps) {
	return (
		<Container>
			<p>{numerator}</p>
			<p>/{denominator}</p>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	margin-bottom: 10px;

	> p {
		font-weight: bold;
		font-size: 25px;
		color: var(--primary-color);

		${mobileMediaQuery} {
			font-size: 14px;
		}
	}

	> p:nth-of-type(2) {
		color: #000;
	}
`;

export default ProgressFraction;
