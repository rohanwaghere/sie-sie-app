const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
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
        showExamResults: "readonly"
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
