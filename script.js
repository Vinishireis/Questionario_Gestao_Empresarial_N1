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
        q9: "b", // Aula 1
        q10: "b", // Aula 1
        q11: "c", // Aula 2
        q12: "a", // Aula 2
        q13: "a", // Aula 3
        q14: "b", // Aula 3
        q15: "a", // Aula 4
        q16: "b", // Aula 4
        q17: "a", // Aula 5
        q18: "b", // Aula 5
        q19: "a", // Aula 6
        q20: "a", // Aula 6
        q21: "b", // Empresas Holocráticas
        q22: "a", // Valores da 3ª Categoria
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