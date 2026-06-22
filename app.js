// ---------------------------
// VERSION CHECKER
// ---------------------------

async function checkForUpdates() {
  try {
    const response = await fetch("version.json", { cache: "no-store" });
    const data = await response.json();

    const localVersion = localStorage.getItem("appVersion");

    if (localVersion !== data.version) {
      showUpdateBanner(data.version);
    }
  } catch (e) {
    console.log("Update check failed:", e);
  }
}

function showUpdateBanner(newVersion) {
  const banner = document.createElement("div");
  banner.style.position = "fixed";
  banner.style.bottom = "0";
  banner.style.left = "0";
  banner.style.right = "0";
  banner.style.background = "#2d7ff9";
  banner.style.color = "white";
  banner.style.padding = "12px";
  banner.style.textAlign = "center";
  banner.style.fontSize = "1rem";
  banner.style.zIndex = "9999";
  banner.style.cursor = "pointer";
  banner.innerText = "New version available — tap to update";

  banner.onclick = () => {
    localStorage.setItem("appVersion", newVersion);
    location.reload(true);
  };

  document.body.appendChild(banner);
}

checkForUpdates();

// ---------------------------
// GLOBAL STATE
// ---------------------------

let mode = "flashcards";
let currentTopic = "All";
let currentExamId = null;
let currentExamQuestionIndex = 0;

// Load progress
let progress = JSON.parse(localStorage.getItem("sieProgress")) || {
  flashcards: {},
  questions: {}
};

function saveProgress() {
  localStorage.setItem("sieProgress", JSON.stringify(progress));
}

// ---------------------------
// INIT
// ---------------------------

function init() {
  document.getElementById("mode-flashcards").onclick = () => {
    mode = "flashcards";
    renderTopicSelect();
    renderFlashcard();
  };

  document.getElementById("mode-quiz").onclick = () => {
    mode = "quiz";
    renderTopicSelect();
    renderQuizQuestion();
  };

  document.getElementById("mode-exam").onclick = () => {
    mode = "exam";
    currentExamId = EXAMS[0].id;
    currentExamQuestionIndex = 0;
    renderExamSelect();
    renderExamQuestion();
  };

  renderTopicSelect();
  renderFlashcard();
}

window.onload = init;

// ---------------------------
// TOPIC SELECTOR
// ---------------------------

function getTopics() {
  return ["All", ...Object.keys(FLASHCARDS)];
}

function renderTopicSelect() {
  const topics = getTopics();
  const container = document.getElementById("topic-select");

  container.innerHTML = topics
    .map(t => `<button onclick="setTopic('${t}')">${t}</button>`)
    .join(" ");
}

function setTopic(topic) {
  currentTopic = topic;
  if (mode === "flashcards") renderFlashcard();
  if (mode === "quiz") renderQuizQuestion();
}

// ---------------------------
// FLASHCARDS (DOMAIN GROUPED)
// ---------------------------

function getFlashcardsForTopic() {
  if (currentTopic === "All") {
    return Object.values(FLASHCARDS).flat();
  }
  return FLASHCARDS[currentTopic];
}

function updateFlashcardMastery(id, rating) {
  if (!progress.flashcards[id]) {
    progress.flashcards[id] = { mastery: 0, seen: 0 };
  }

  progress.flashcards[id].seen++;

  if (rating === 1) progress.flashcards[id].mastery = Math.max(0, progress.flashcards[id].mastery - 1);
  if (rating === 2) progress.flashcards[id].mastery = Math.min(3, progress.flashcards[id].mastery + 1);
  if (rating === 3) progress.flashcards[id].mastery = 3;

  saveProgress();
}

function getNextFlashcard() {
  const cards = getFlashcardsForTopic();
  if (!cards.length) return null;

  const weighted = cards.flatMap(card => {
    const mastery = progress.flashcards[card.id]?.mastery || 0;
    const weight = 4 - mastery;
    return Array(weight).fill(card);
  });

  return weighted[Math.floor(Math.random() * weighted.length)];
}

function renderFlashcard() {
  const card = getNextFlashcard();
  if (!card) {
    document.getElementById("card-container").innerHTML = "No flashcards available.";
    return;
  }

  document.getElementById("card-container").innerHTML = `
    <div class="card" onclick="flipCard()">
      <div id="front">${card.front}</div>
      <div id="back" style="display:none">${card.back}</div>
    </div>

    <div style="text-align:center;margin-top:8px;">
      <button onclick="rateCard(${card.id}, 1)">Again</button>
      <button onclick="rateCard(${card.id}, 2)">Good</button>
      <button onclick="rateCard(${card.id}, 3)">Easy</button>
    </div>
  `;
}

function flipCard() {
  const front = document.getElementById("front");
  const back = document.getElementById("back");

  if (back.style.display === "none") {
    back.style.display = "block";
    front.style.display = "none";
  } else {
    back.style.display = "none";
    front.style.display = "block";
  }
}

function rateCard(id, rating) {
  updateFlashcardMastery(id, rating);
  renderFlashcard();
}

// ---------------------------
// QUIZ MODE (DOMAIN GROUPED)
// ---------------------------

function getQuestionsForTopic() {
  if (currentTopic === "All") {
    return Object.values(QUESTIONS).flat();
  }
  return QUESTIONS[currentTopic];
}

function updateQuestionPerformance(id, correct) {
  if (!progress.questions[id]) {
    progress.questions[id] = { correct: 0, incorrect: 0, streak: 0, mastery: "Needs Work" };
  }

  // update counts
  if (correct) {
    progress.questions[id].correct++;
    progress.questions[id].streak++;
  } else {
    progress.questions[id].incorrect++;
    progress.questions[id].streak = 0;
  }

  // mastery scoring
  if (progress.questions[id].streak >= 3) {
    progress.questions[id].mastery = "Mastered";
  } else if (progress.questions[id].streak === 2) {
    progress.questions[id].mastery = "Strong";
  } else if (progress.questions[id].streak === 1) {
    progress.questions[id].mastery = "Developing";
  } else {
    progress.questions[id].mastery = "Needs Work";
  }

  saveProgress();
}


function getNextQuestion() {
  const questions = getQuestionsForTopic();
  if (!questions.length) return null;

  const weighted = questions.flatMap(q => {
    const stats = progress.questions[q.id] || { correct: 0, incorrect: 0 };
    const total = stats.correct + stats.incorrect;
    const mastery = total > 0 ? stats.correct / total : 0;
    const weight = 4 - Math.round(mastery * 3);
    return Array(weight).fill(q);
  });

  return weighted[Math.floor(Math.random() * weighted.length)];
}

function renderQuizQuestion() {
  const q = getNextQuestion();
  if (!q) {
    document.getElementById("card-container").innerHTML = "No questions available.";
    return;
  }

  document.getElementById("card-container").innerHTML = `
    <div class="question">
      <p>${q.question}</p>
      ${q.choices
        .map((choice, idx) => `<button onclick="checkAnswer(${q.id}, ${idx})">${choice}</button>`)
        .join("<br/>")}
      <div id="explanation"></div>
      <button onclick="renderQuizQuestion()">Next</button>
    </div>`;
}

function checkAnswer(id, selectedIndex) {
  const q = Object.values(QUESTIONS).flat().find(q => q.id === id);
  const correct = selectedIndex === q.answerIndex;

  updateQuestionPerformance(id, correct);

  const explanationDiv = document.getElementById("explanation");

  if (correct) {
    explanationDiv.innerHTML = `<p style="color:green">Correct!</p><p>${q.explanation}</p>`;
  } else {
    explanationDiv.innerHTML = `<p style="color:red">Incorrect.</p><p>Correct answer: ${q.choices[q.answerIndex]}</p><p>${q.explanation}</p>`;
  }
}

// ---------------------------
// EXAM MODE
// ---------------------------

function renderExamSelect() {
  const container = document.getElementById("exam-select");
  container.innerHTML =
    `<button onclick=`startRandomExam()`>Random Exam</button>` +
    EXAMS.map(exam => 
      `<button onclick=`setExam(${exam.id})`>${exam.name}</button>`
    ).join("");
}


function startRandomExam() {
  const exam = generateRandomExam();
  currentExamId = exam.id;
  currentExamQuestionIndex = 0;
  window._randomExam = exam; // store in memory
  renderExamQuestion();
}

function setExam(id) {
  currentExamId = id;
  currentExamQuestionIndex = 0;
  renderExamQuestion();
}

function renderExamQuestion() {
  const exam = window._randomExam?.id === currentExamId
  ? window._randomExam
  : EXAMS.find(e => e.id === currentExamId);

  const questions = exam.questionIds.map(id =>
    Object.values(QUESTIONS).flat().find(q => q.id === id)
  );

  const q = questions[currentExamQuestionIndex];

  document.getElementById("card-container").innerHTML = `
    <div class="question">
      <p>Question ${currentExamQuestionIndex + 1} of ${questions.length}</p>
      <p>${q.question}</p>
      ${q.choices
        .map((choice, idx) => `<button onclick="checkExamAnswer(${q.id}, ${idx})">${choice}</button>`)
        .join("<br/>")}
      <div id="explanation"></div>
      <button onclick="prevExamQuestion()">Prev</button>
      <button onclick="nextExamQuestion()">Next</button>
    </div>
  `;
}

function checkExamAnswer(id, selectedIndex) {
  const q = Object.values(QUESTIONS).flat().find(q => q.id === id);
  const correct = selectedIndex === q.answerIndex;

  updateQuestionPerformance(id, correct);

  const explanationDiv = document.getElementById("explanation");

  if (correct) {
    explanationDiv.innerHTML = `<p style="color:green">Correct!</p><p>${q.explanation}</p>`;
  } else {
    explanationDiv.innerHTML = `<p style="color:red">Incorrect.</p><p>Correct answer: ${q.choices[q.answerIndex]}</p><p>${q.explanation}</p>`;
  }
}

function prevExamQuestion() {
  const exam = EXAMS.find(e => e.id === currentExamId);
  currentExamQuestionIndex =
    (currentExamQuestionIndex - 1 + exam.questionIds.length) %
    exam.questionIds.length;
  renderExamQuestion();
}

function nextExamQuestion() {
  const exam = EXAMS.find(e => e.id === currentExamId);
  currentExamQuestionIndex++;

if (currentExamQuestionIndex >= exam.questionIds.length) {
  const score = exam.questionIds.filter(id => {
    const stats = progress.questions[id];
    return stats && stats.correct > stats.incorrect;
  }).length;

  showExamResults(score, exam.questionIds.length);
  return;
}
  renderExamQuestion();
}
