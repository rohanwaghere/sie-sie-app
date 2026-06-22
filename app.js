// app.js

let mode = "flashcards";
let currentIndex = 0;
let currentTopic = "All";
let currentExamId = null;
let currentExamQuestionIndex = 0;

// Load progress from localStorage
let progress = JSON.parse(localStorage.getItem("sieProgress")) || {
  flashcards: {},
  questions: {}
};

function saveProgress() {
  localStorage.setItem("sieProgress", JSON.stringify(progress));
}

function init() {
  document.getElementById("mode-flashcards").onclick = () => {
    mode = "flashcards";
    currentIndex = 0;
    renderTopicSelect();
    renderFlashcard();
  };
  document.getElementById("mode-quiz").onclick = () => {
    mode = "quiz";
    currentIndex = 0;
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

function getTopics() {
  return ["All", ...new Set(FLASHCARDS.map(c => c.topic))];
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
  currentIndex = 0;
  if (mode === "flashcards") renderFlashcard();
  if (mode === "quiz") renderQuizQuestion();
}

function getFilteredFlashcards() {
  if (currentTopic === "All") return FLASHCARDS;
  return FLASHCARDS.filter(c => c.topic === currentTopic);
}

function getFilteredQuestions() {
  if (currentTopic === "All") return QUESTIONS;
  return QUESTIONS.filter(q => q.topic === currentTopic);
}

// ---------- FLASHCARDS WITH MASTERY ----------

function updateFlashcardMastery(cardId, rating) {
  if (!progress.flashcards[cardId]) {
    progress.flashcards[cardId] = { mastery: 0, seen: 0 };
  }

  progress.flashcards[cardId].seen++;

  // rating: 1 = again, 2 = good, 3 = easy
  if (rating === 1) {
    progress.flashcards[cardId].mastery = Math.max(
      0,
      progress.flashcards[cardId].mastery - 1
    );
  }
  if (rating === 2) {
    progress.flashcards[cardId].mastery = Math.min(
      3,
      progress.flashcards[cardId].mastery + 1
    );
  }
  if (rating === 3) {
    progress.flashcards[cardId].mastery = 3;
  }

  saveProgress();
}

function getNextFlashcard() {
  const cards = getFilteredFlashcards().filter(c => c.type === "concept");
  if (!cards.length) return null;

  const weighted = cards.flatMap(card => {
    const mastery = progress.flashcards[card.id]?.mastery || 0;
    const weight = 4 - mastery; // mastery 0 = 4, mastery 3 = 1
    return Array(weight).fill(card);
  });

  return weighted[Math.floor(Math.random() * weighted.length)];
}

function renderFlashcard() {
  const card = getNextFlashcard();
  if (!card) {
    document.getElementById("card-container").innerHTML =
      "No flashcards for this topic.";
    return;
  }

  const container = document.getElementById("card-container");
  container.innerHTML = `
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

function rateCard(cardId, rating) {
  updateFlashcardMastery(cardId, rating);
  renderFlashcard();
}

function flipCard() {
  const front = document.getElementById("front");
  const back = document.getElementById("back");
  if (!front || !back) return;
  if (back.style.display === "none") {
    back.style.display = "block";
    front.style.display = "none";
  } else {
    back.style.display = "none";
    front.style.display = "block";
  }
}

// ---------- QUIZ MODE WITH PERFORMANCE TRACKING ----------

function updateQuestionPerformance(questionId, correct) {
  if (!progress.questions[questionId]) {
    progress.questions[questionId] = { correct: 0, incorrect: 0 };
  }

  if (correct) progress.questions[questionId].correct++;
  else progress.questions[questionId].incorrect++;

  saveProgress();
}

function getWeightedQuestions() {
  const questions = getFilteredQuestions();
  if (!questions.length) return [];

  return questions.flatMap(q => {
    const stats = progress.questions[q.id] || { correct: 0, incorrect: 0 };
    const total = stats.correct + stats.incorrect;
    let masteryScore = 0;
    if (total > 0) {
      masteryScore = stats.correct / total; // 0 to 1
    }
    const weight = 4 - Math.round(masteryScore * 3); // mastered => lower weight
    return Array(Math.max(1, weight)).fill(q);
  });
}

function getNextQuestion() {
  const weighted = getWeightedQuestions();
  if (!weighted.length) return null;
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function renderQuizQuestion() {
  const q = getNextQuestion();
  if (!q) {
    document.getElementById("card-container").innerHTML =
      "No questions for this topic.";
    return;
  }

  const container = document.getElementById("card-container");
  container.innerHTML = `
    <div class="question">
      <p>${q.question}</p>
      ${q.choices
        .map(
          (choice, idx) =>
            `<button onclick="checkAnswer(${q.id}, ${idx})">${choice}</button>`
        )
        .join("<br/>")}
      <div id="explanation"></div>
      <button onclick="renderQuizQuestion()">Next</button>
    </div>
  `;
}

function checkAnswer(questionId, selectedIndex) {
  const q = QUESTIONS.find(q => q.id === questionId);
  const explanationDiv = document.getElementById("explanation");
  const correct = selectedIndex === q.answerIndex;

  updateQuestionPerformance(questionId, correct);

  if (correct) {
    explanationDiv.innerHTML = `<p style="color:green">Correct!</p><p>${q.explanation}</p>`;
  } else {
    explanationDiv.innerHTML = `<p style="color:red">Incorrect.</p><p>Correct answer: ${
      q.choices[q.answerIndex]
    }</p><p>${q.explanation}</p>`;
  }
}

// ---------- EXAM MODE (fixed sets) ----------

function renderExamSelect() {
  const container = document.getElementById("exam-select");
  container.innerHTML = EXAMS.map(
    exam =>
      `<button onclick="setExam(${exam.id})">${exam.name}</button>`
  ).join(" ");
}

function setExam(examId) {
  currentExamId = examId;
  currentExamQuestionIndex = 0;
  renderExamQuestion();
}

function renderExamQuestion() {
  const exam = EXAMS.find(e => e.id === currentExamId);
  if (!exam) return;
  const questions = exam.questionIds.map(id =>
    QUESTIONS.find(q => q.id === id)
  );
  const q = questions[currentExamQuestionIndex];
  const container = document.getElementById("card-container");
  container.innerHTML = `
    <div class="question">
      <p>Question ${currentExamQuestionIndex + 1} of ${
        questions.length
      }</p>
      <p>${q.question}</p>
      ${q.choices
        .map(
          (choice, idx) =>
            `<button onclick="checkExamAnswer(${q.id}, ${idx})">${choice}</button>`
        )
        .join("<br/>")}
      <div id="explanation"></div>
      <button onclick="prevExamQuestion()">Prev</button>
      <button onclick="nextExamQuestion()">Next</button>
    </div>
  `;
}

function checkExamAnswer(questionId, selectedIndex) {
  const q = QUESTIONS.find(q => q.id === questionId);
  const explanationDiv = document.getElementById("explanation");
  const correct = selectedIndex === q.answerIndex;

  updateQuestionPerformance(questionId, correct);

  if (correct) {
    explanationDiv.innerHTML = `<p style="color:green">Correct!</p><p>${q.explanation}</p>`;
  } else {
    explanationDiv.innerHTML = `<p style="color:red">Incorrect.</p><p>Correct answer: ${
      q.choices[q.answerIndex]
    }</p><p>${q.explanation}</p>`;
  }
}

function prevExamQuestion() {
  const exam = EXAMS.find(e => e.id === currentExamId);
  const questions = exam.questionIds;
  currentExamQuestionIndex =
    (currentExamQuestionIndex - 1 + questions.length) % questions.length;
  renderExamQuestion();
}

function nextExamQuestion() {
  const exam = EXAMS.find(e => e.id === currentExamId);
  const questions = exam.questionIds;
  currentExamQuestionIndex =
    (currentExamQuestionIndex + 1) % questions.length;
  renderExamQuestion();
}

window.onload = init;
