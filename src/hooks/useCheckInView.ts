import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function useCheckInView(threshold: number = 0.5) {
	const [isInView, setIsInView] = useState(false);

	const [ref, inView] = useInView({ threshold });

	useEffect(() => {
		if (inView) {
			setIsInView(true);
		}
	}, [inView]);

	return { ref, isInView };
}

export default useCheckInView;
