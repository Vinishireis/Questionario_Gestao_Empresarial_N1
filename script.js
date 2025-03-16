document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Respostas corretas
    const correctAnswers = {
        q1: "b", // Aula 1
        q2: "a", // Aula 2
        q3: "b", // Aula 3
        q4: "b", // Aula 4
        q5: "a", // Aula 5
        q6: "a", // Aula 6
        q7: "b", // Aula 7
        q8: "c", // Aula 8
    };

    let score = 0;

    // Verifica as respostas
    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    // Exibe o resultado
    const resultDiv = document.getElementById("result");
    const scoreParagraph = document.getElementById("score");
    scoreParagraph.textContent = `Você acertou ${score} de ${Object.keys(correctAnswers).length} perguntas.`;
    resultDiv.classList.remove("hidden");
});