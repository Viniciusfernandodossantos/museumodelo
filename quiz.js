
function submitQuiz() {
    // Obtenha as respostas corretas
    const correctAnswers = {
        q1: "Sandro Botticelli",
        q2: "1889",
        q3: "A ceia final de Jesus com seus apóstolos"
    };

    // Obtenha as respostas do formulário
    let score = 0;
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value
    };

    // Compare as respostas do usuário com as corretas
    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Exiba a pontuação final
    document.getElementById('score').innerText = score;
    document.getElementById('result').style.display = 'block';
}


