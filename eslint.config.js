module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["eslint.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        location: "readonly",
        fetch: "readonly",
        EXAMS: "readonly",
        QUESTIONS: "readonly",
        FLASHCARDS: "readonly",
        console: "readonly",
        generateRandomExam: "readonly",
        showExamResults: "readonly",
        currentExamQuestionIndex: "writable",
        renderExamQuestion: "readonly",
        mode: "writable",
        renderExamSelect: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
