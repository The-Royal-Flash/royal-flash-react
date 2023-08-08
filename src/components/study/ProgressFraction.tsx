import styled from '@emotion/styled';

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
	}

	> p:nth-of-type(2) {
		color: #000;
	}
`;

export default ProgressFraction;
