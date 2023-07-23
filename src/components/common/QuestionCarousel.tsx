import React, { useState } from 'react';
import styled from '@emotion/styled';
import { IconButton, MobileStepper, Paper } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface QuestionCarouselProps {
	questionList: Array<{ _id: string; question: string }>;
}

interface CardProps {
	active: boolean;
}

function QuestionCarousel({ questionList }: QuestionCarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const numOfQuestions = questionList.length;

	const handleNext = () => {
		setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
	};

	const handlePrev = () => {
		setActiveIndex((prevActiveIndex) => prevActiveIndex - 1);
	};

	return (
		// TODO: touch
		<Carousel elevation={2}>
			<CardWrapper>
				{questionList.map(({ question }, index) => (
					<Card active={index === activeIndex} key={`carousel-${index}`}>
						{question}
					</Card>
				))}
			</CardWrapper>
			{numOfQuestions > 1 && (
				<StepperWrapper>
					<Stepper
						variant="text"
						steps={numOfQuestions}
						activeStep={activeIndex}
						position="static"
						nextButton={
							<MoveButton
								onClick={handleNext}
								disabled={activeIndex === numOfQuestions - 1}
							>
								<ArrowForwardIosIcon />
							</MoveButton>
						}
						backButton={
							<MoveButton onClick={handlePrev} disabled={activeIndex === 0}>
								<ArrowBackIosIcon />
							</MoveButton>
						}
					/>
				</StepperWrapper>
			)}
		</Carousel>
	);
}

const Carousel = styled(Paper)`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 200px;
	margin-top: 40px;
	padding: 30px 0;
	border-radius: 10px;
	background-color: #e5eaee;
`;

const CardWrapper = styled.div`
	padding: 30px 50px;
	position: relative;
`;

const Card = styled.div<CardProps>`
	position: absolute;
	top: 0;
	height: 120px;
	width: calc(100% - 100px);
	padding: 20px;
	font-size: 1.1rem;
	visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
`;

const StepperWrapper = styled.div`
	position: absolute;
	width: 100%;
	bottom: 5px;
`;

const Stepper = styled(MobileStepper)`
	background: none;
`;

const MoveButton = styled(IconButton)`
	top: calc(-100px + 40px);
`;

export default QuestionCarousel;
