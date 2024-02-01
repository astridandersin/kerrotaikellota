// setupGame page functionality
function setupGame() {
    const participants = document.getElementById("participantNames").value.split(', ');
    const numQuestions = document.getElementById("numQuestions").value;

    // Store participants and number of questions in localStorage
    localStorage.setItem('participants', JSON.stringify(participants));
    localStorage.setItem('numQuestions', numQuestions);

    window.location.href = "gamePage.html";
}