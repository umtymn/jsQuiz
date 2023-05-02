const quizForm = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const results = document.getElementById("results");

const correctAnswers = ["a", "b", "c", "d", "c"];

quizForm.addEventListener("submit", (event) => {
	event.preventDefault();
	let score = 0;
	const userAnswers = [
		quizForm.q1.value,
		quizForm.q2.value,
		quizForm.q3.value,
		quizForm.q4.value,
		quizForm.q5.value
	];

	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 20;
		}
	});

	results.innerHTML = `<h3>You scored ${score}%</h3>`;
    if (score<50) {
    document.body.style.backgroundColor="red"
    }if (score>75) {
        document.body.style.backgroundColor="green"
        
    }
});





