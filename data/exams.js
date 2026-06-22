// Base structure for exams
const EXAMS = [];

// --- Exam 1 Append ---
EXAMS.push({
  id: 1,
  name: "SIE Practice Exam 1",
  questionIds: [
    // Domain 1 (20 questions)
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,

    // Domain 2 (20 questions)
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120,

    // Domain 3 (20 questions)
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
    211, 212, 213, 214, 215, 216, 217, 218, 219, 220,

    // Domain 4 (15 questions)
    301, 302, 303, 304, 305, 306, 307, 308,
    309, 310, 311, 312, 313, 314, 315
  ]
});

// --- Exam 2 Append ---
EXAMS.push({
  id: 2,
  name: "SIE Practice Exam 2",
  questionIds: [
    // Domain 1 (20 questions)
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,

    // Domain 2 (20 questions)
    121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    131, 132, 133, 134, 135, 136, 137, 138, 139, 140,

    // Domain 3 (20 questions)
    221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
    231, 232, 233, 234, 235, 236, 237, 238, 239, 240,

    // Domain 4 (15 questions)
    316, 317, 318, 319, 320, 321, 322, 323,
    324, 325, 326, 327, 328, 329, 330
  ]
});

// --- Exam 3 Append ---
EXAMS.push({
  id: 3,
  name: "SIE Practice Exam 3",
  questionIds: [
    // Domain 1 (20 questions)
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19,

    // Domain 2 (20 questions)
    141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
    101, 103, 105, 107, 109, 111, 113, 115, 117, 119,

    // Domain 3 (20 questions)
    241, 242, 243, 244, 245, 246, 247, 248, 249, 250,
    201, 203, 205, 207, 209, 211, 213, 215, 217, 219,

    // Domain 4 (15 questions)
    331, 332, 333, 334, 335, 336, 337, 338,
    339, 340, 341, 342, 343, 344, 345
  ]
});
// ---------------------------
// EXAM RESULTS SCREEN
// ---------------------------

function showExamResults(score, total) {
  const percent = Math.round((score / total) * 100);
  const passed = percent >= 70;

  document.getElementById("card-container").innerHTML = `
    <div class="question">
      <h2>Exam Complete</h2>
      <p><strong>Score:</strong> ${score} / ${total}</p>
      <p><strong>Percentage:</strong> ${percent}%</p>
      <p style="color:${passed ? "lightgreen" : "red"};font-size:1.2rem;">
        <strong>${passed ? "PASS" : "FAIL"}</strong>
      </p>

      <button onclick="restartExam()">Retake Exam</button>
      <button onclick="returnToMenu()">Back to Menu</button>
    </div>
  `;
}

function restartExam() {
  currentExamQuestionIndex = 0;
  renderExamQuestion();
}

function returnToMenu() {
  mode = "exam";
  renderExamSelect();
}
// --- Random Exam Generator ---
function generateRandomExam() {
  const allQuestions = [
    ...QUESTIONS.domain1,
    ...QUESTIONS.domain2,
    ...QUESTIONS.domain3,
    ...QUESTIONS.domain4
  ];

  const shuffled = allQuestions.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 75).map(q => q.id);

  return {
    id: Date.now(),
    name: "Random Exam",
    questionIds: selected
  };
}
