interface QuestionCardProps {
	step: number;
	question?: string;
}

function QuestionCard({ step, question }: QuestionCardProps) {
	return (
		<>
			<p>Question {step}.</p>
			<p>{question}</p>
		</>
	);
}

export default QuestionCard;
