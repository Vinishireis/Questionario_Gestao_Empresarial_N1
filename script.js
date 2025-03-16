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

    // Texto das respostas corretas (para exibir ao usuário)
    const correctAnswersText = {
        q1: "b) Eficiência e produtividade.",
        q2: "a) Planejar, Organizar, Dirigir, Controlar.",
        q3: "b) Criação de novos mercados sem concorrência.",
        q4: "b) Explicar a razão de existir da empresa.",
        q5: "a) Um indicador de desempenho usado para medir o sucesso de uma estratégia.",
        q6: "a) A estrutura formal é planejada, enquanto a informal surge espontaneamente.",
        q7: "b) Reduz custos e tempo de recrutamento.",
        q8: "c) Laissez-Faire.",
        q9: "b) Definir princípios universais de gestão.",
        q10: "b) Frederick Taylor.",
        q11: "c) Planejar.",
        q12: "a) Organizar.",
        q13: "a) Uma ferramenta para avaliar forças, fraquezas, oportunidades e ameaças.",
        q14: "b) Alinhar os objetivos da organização com o ambiente externo.",
        q15: "a) O que a empresa deseja ser no futuro.",
        q16: "b) Guiar o comportamento e as decisões dos colaboradores.",
        q17: "a) Medir o desempenho de processos e estratégias.",
        q18: "b) Lucro líquido.",
        q19: "a) A divisão da empresa em departamentos com base em critérios específicos.",
        q20: "a) Flexibilidade e colaboração entre áreas.",
        q21: "b) Autoridade e tomada de decisões distribuídas entre equipes auto-organizadas.",
        q22: "a) Inovação, criatividade, excelência.",
    };

    let score = 0;
    const wrongAnswers = []; // Array para armazenar as questões erradas

    // Verifica as respostas
    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${i}`]) {
            score++; // Conta as respostas corretas
        } else {
            wrongAnswers.push(i); // Adiciona a questão errada ao array
        }
    }

    // Exibe o resultado
    const resultDiv = document.getElementById("result");
    const scoreParagraph = document.getElementById("score");
    scoreParagraph.textContent = `Você acertou ${score} de ${Object.keys(correctAnswers).length} perguntas.`;

    // Exibe as questões erradas e as respostas corretas
    if (wrongAnswers.length > 0) {
        const wrongAnswersList = document.createElement("ul");
        wrongAnswersList.innerHTML = "<h3>Questões que você errou:</h3>";
        wrongAnswers.forEach((question) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Questão ${question}: Resposta correta - ${correctAnswersText[`q${question}`]}`;
            wrongAnswersList.appendChild(listItem);
        });
        resultDiv.appendChild(wrongAnswersList);
    }

    resultDiv.classList.remove("hidden"); // Mostra o resultado
});