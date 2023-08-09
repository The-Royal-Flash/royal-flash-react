import styled from '@emotion/styled';

function EmptyCard() {
	return <Container></Container>;
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 9999;
	background-color: #fff;
	border-radius: 10px 10px 0 0;
`;

export default EmptyCard;
