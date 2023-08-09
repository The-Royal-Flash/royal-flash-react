import styled from '@emotion/styled';

interface SpreadLogoProps {
	active: boolean;
}

function SpreadLogo({ active }: SpreadLogoProps) {
	return (
		<Container active={active}>
			<Card order={1} active={active} />
			<Card order={2} active={active} />
			<Card order={3} active={active} />
			<Card order={4} active={active} />
			<Card order={5} active={active}>
				A
			</Card>
		</Container>
	);
}

const Container = styled.div<SpreadLogoProps>`
	position: relative;
	display: flex;
	align-items: center;
	top: 0px;
	left: 43px;
	padding-right: ${(props) => (props.active ? '125px' : '85px')};
	transition: all 0.3s ease;
`;

const Card = styled.div<{
	active: boolean;
	order: number;
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 60px;
	box-sizing: border-box;
	background: white;
	color: var(--primary-color);
	border: 2.5px solid var(--primary-color);
	border-radius: 5px;
	position: absolute;
	font-size: 34px;
	font-weight: 700;
	text-align: center;
	top: 0;
	left: 0;
	box-shadow:
		0px 3px 1px -2px rgba(152, 152, 152, 0.2),
		0px 2px 2px 0px rgba(152, 152, 152, 0.14),
		0px 1px 5px 0px rgba(152, 152, 152, 0.12);
	transition: all 0.3s ease;
	${(props) =>
		props.active &&
		`
    transform: rotate(calc(20deg * ${props.order - 3}))
    translateY(-30px);
    transition: all 0.3s ease;
    top: 25px;
		background: white;
	  border: 2.5px solid var(--btn-color);
    color: var(--btn-color);
  `}
`;

export default SpreadLogo;
