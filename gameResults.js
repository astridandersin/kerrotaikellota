
// Retrieve counts from localStorage
const option1Count = localStorage.getItem('option1Count') || 0;
const option2Count = localStorage.getItem('option2Count') || 0;

// write a code to unlock keys and values and find the biggest value if there is none then return "kukaan ei juonut :("
//const option1List = JSON.parse(localStorage.getItem('option1List')) || {};
// const option2List = JSON.parse(localStorage.getItem('option2List')) || {};

// function getPlayerWithHighestScore(scores) {
    // let highestScorePlayer = null;
    // let highestScore = -Infinity;

   //  for (const player in scores) {
       // if (scores.hasOwnProperty(player) && scores[player] > highestScore) {
        //    highestScore = scores[player];
        //    highestScorePlayer = player;
    //}

   // return highestScorePlayer;
 // }
//}

// const biggestTeller = getPlayerWithHighestScore(option1List);
// const biggestDrinker = getPlayerWithHighestScore(option2List);

 // Display counts on the page
document.getElementById('option1Count').innerText = option1Count;
document.getElementById('option2Count').innerText = option2Count;


// document.getElementById('option1List').innerText = biggestTeller;  // satusetä
// document.getElementById('option2List').innerText = biggestDrinker;  // suurjuomari

 // Function to restart the game (clears counts and redirects to start page)
function restartGame() {
    localStorage.removeItem('option1Count');
    localStorage.removeItem('option2Count');
    localStorage.removeItem('option1List');
    localStorage.removeItem('option2List');
    window.location.href = "kerrotaikellota.html"; // Redirect to the start page
}