import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { IconButton, MobileStepper } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ClassIcon from '@mui/icons-material/Class';
import { MIN_SWIPE_DISTANCE } from '../../constants';

interface QuestionCarouselProps {
	questionList: Array<{ _id: string; question: string }>;
}

interface CardProps {
	currentSlide: number;
	duration: number;
}

const DURATION = 500;

function QuestionCarousel({ questionList }: QuestionCarouselProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isMoving, setIsMoving] = useState(false);
	const cardWrapperRef = useRef<HTMLDivElement>(null);
	const touchStartX = useRef<number | null>(null);
	const numOfQuestions = questionList.length;

	const movePrev = () => {
		if (!isMoving && currentSlide > 0) {
			setIsMoving(true);
			setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
		}
	};

	const moveNext = () => {
		if (!isMoving && currentSlide < numOfQuestions - 1) {
			setIsMoving(true);
			setCurrentSlide((prevSlide) =>
				Math.min(prevSlide + 1, numOfQuestions - 1),
			);
		}
	};

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		touchStartX.current = e.touches[0].clientX;
		console.log('handleTouchStart', isMoving, currentSlide, touchStartX);
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (!touchStartX.current) return;

		const touchX = e.touches[0].clientX;
		const touchDiff = touchX - touchStartX.current;

		if (touchDiff > MIN_SWIPE_DISTANCE) {
			movePrev();
			touchStartX.current = touchX;
		} else if (touchDiff > -1 * MIN_SWIPE_DISTANCE) {
			moveNext();
			touchStartX.current = touchX;
		}
	};

	const handleTouchEnd = () => {
		touchStartX.current = null;
	};

	const handleTransitionEnd = () => {
		setIsMoving(false);
	};

	return (
		<Carousel>
			<CardContainer>
				<CardLabel>
					<ClassIcon />
					문제 {currentSlide + 1}
				</CardLabel>
				<CardWrapper
					ref={cardWrapperRef}
					currentSlide={currentSlide}
					duration={isMoving ? DURATION : 0}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
					onTransitionEnd={handleTransitionEnd}
				>
					{questionList.map(({ question }, index) => (
						<Card key={`card-${index}`}>
							<CardContent>{question}</CardContent>
						</Card>
					))}
				</CardWrapper>
			</CardContainer>
			{numOfQuestions > 1 && (
				<StepperWrapper>
					<Stepper
						variant={'text'}
						steps={numOfQuestions}
						activeStep={currentSlide}
						position="static"
						nextButton={
							<MoveButton
								onClick={moveNext}
								disabled={currentSlide === numOfQuestions - 1}
							>
								<ArrowForwardIosIcon />
							</MoveButton>
						}
						backButton={
							<MoveButton onClick={movePrev} disabled={currentSlide === 0}>
								<ArrowBackIosIcon />
							</MoveButton>
						}
					/>
				</StepperWrapper>
			)}
		</Carousel>
	);
}

const Carousel = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 200px;
	margin-top: 40px;
	padding: 10px 0;
	border-radius: 10px;
	background-color: var(--box-bg-color);
`;

const CardContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
`;

const CardWrapper = styled.div<CardProps>`
	display: flex;
	height: 140px;
	width: 100%;
	font-size: 1.1rem;
	margin-top: 20px;
	transition: ${({ duration }) => `transform ${duration}ms ease-out`};
	transform: ${({ currentSlide }) =>
		`translate3D(${currentSlide * -100}%, 0, 0)`};
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: cetner;
	height: 140px;
	min-width: 100%;
	font-size: 1.1rem;
`;

const CardLabel = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	width: 140px;
	height: 40px;
	line-height: 40px;
	margin-top: 5px;
	padding-left: 20px;
	gap: 10px;
	font-size: 1.1rem;
	font-weight: 500;
	color: white;
	background-color: var(--gray);
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
`;

const CardContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	font-size: 1.1rem;
	font-weight: 400;
`;

const StepperWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 20px;
	bottom: 30px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

const Stepper = styled(MobileStepper)`
	background: none;
	color: var(--gray);
	user-select: none;
`;

const MoveButton = styled(IconButton)`
	color: var(--btn-color);
`;

export default QuestionCarousel;
