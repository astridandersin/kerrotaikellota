// gamePage functionality

// Retrieve data from localStorage
const participants = JSON.parse(localStorage.getItem('participants'));
const numQuestions = localStorage.getItem('numQuestions');
let currentQuestion = 0;
let currentIndex = 0;
let option1Count = 0;
let option2Count = 0;
let sentencesArray = [];
const option1List = {};
const option2List = {};

// function to create kerro and kellota objects with names as keys and clicks as values
participants.forEach(participant => {
  option1List[participant] = 0;
});

participants.forEach(participant => {
  option2List[participant] = 0;
});

// Function to fetch sentences from the text file
async function fetchSentences() {
  try {
    const response = await fetch('sentences.txt');
    if (!response.ok) {
      throw new Error('Failed to fetch sentences');
    }
    const text = await response.text();
    sentencesArray = text.split('\n').filter(sentence => sentence.trim() !== '');
    getFirst();
  } catch (error) {
    console.error('Error fetching sentences:', error);
  }
}

// function to get the first sentence
function getFirst() {
  document.getElementById('participantName').innerText = participants[0]
  document.getElementById('sentence').innerText = getRandomSentence();
}


// Function to generate a random sentence from retrieved sentences
function getRandomSentence() {
  return sentencesArray[Math.floor(Math.random() * sentencesArray.length)];
}

// Function to generate a participant name and random sentence after full round
function generateContent() {
  if (currentIndex < participants.length) {
      document.getElementById('participantName').innerText = participants[currentIndex]
  } else {
      currentIndex = 0
      document.getElementById('participantName').innerText = participants[currentIndex]
      document.getElementById('sentence').innerText = getRandomSentence();
  }
  }

// Function to handle option button clicks
function handleOptionClick(option, sentencesArray) {

  if (option === 1) {
    option1Count++;
    option1List[participants[currentIndex]]++;
  } else if (option === 2) {
    option2Count++;
    option2List[participants[currentIndex]]++;
  }

  currentQuestion++;
  currentIndex++;

  localStorage.setItem('option1Count', option1Count);
  localStorage.setItem('option2Count', option2Count);
  localStorage.setItem('option1List', JSON.stringify(option1List));
  localStorage.setItem('option1List', JSON.stringify(option2List));

  if (currentQuestion < numQuestions * participants.length) {
    generateContent(sentencesArray);
  } else {
    // Game ends
    window.location.href = "gameResults.html"; // Redirect to gameResults.html
  }

}

// Function to generate content (name and sentence) immediately on page load
fetchSentences();

