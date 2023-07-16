import { motion } from 'framer-motion';
import { Slide } from '@mui/material';
import { useCheckInView } from '../../hooks';
import styled from '@emotion/styled';

interface SlideScrollProps {
	children: React.ReactElement;
}

function SlideScroll({ children }: SlideScrollProps) {
	const { ref, isInView } = useCheckInView(0.5);

	return (
		<Container
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : { opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<Slide in={isInView} direction="up" timeout={1000}>
				{children}
			</Slide>
		</Container>
	);
}
const Container = styled(motion.div)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default SlideScroll;
