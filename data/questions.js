// data/questions.js

const QUESTIONS = [
  // -------------------------
  // DOMAIN 1 — CAPITAL MARKETS
  // -------------------------

  {
    id: 1,
    topic: "Capital Markets",
    question: "Which market handles the trading of previously issued securities?",
    choices: ["Primary", "Secondary", "Third", "Fourth"],
    answerIndex: 1,
    explanation: "The secondary market handles trading of existing securities between investors."
  },

  {
    id: 2,
    topic: "Capital Markets",
    question: "An IPO occurs in which market?",
    choices: ["Primary", "Secondary", "Third", "OTC"],
    answerIndex: 0,
    explanation: "New issues are sold in the primary market."
  },

  // -------------------------
  // DOMAIN 2 — PRODUCTS & RISKS
  // -------------------------

  {
    id: 101,
    topic: "Products & Risks",
    question: "Which security represents ownership in a corporation?",
    choices: ["Debenture", "Corporate bond", "Common stock", "CD"],
    answerIndex: 2,
    explanation: "Common stock represents equity ownership."
  },

  {
    id: 102,
    topic: "Products & Risks",
    question: "Which risk affects long-term bonds the most?",
    choices: ["Liquidity risk", "Interest rate risk", "Political risk", "Inflation risk"],
    answerIndex: 1,
    explanation: "Interest rate risk impacts long-term bonds more heavily."
  },

  // -------------------------
  // DOMAIN 3 — TRADING & ACCOUNTS
  // -------------------------

  {
    id: 201,
    topic: "Trading & Accounts",
    question: "A customer enters an order to buy 100 shares at $50 or lower. This is:",
    choices: ["Market order", "Stop order", "Limit order", "Stop-limit order"],
    answerIndex: 2,
    explanation: "A limit order specifies a price at which the customer is willing to buy or sell."
  },

  {
    id: 202,
    topic: "Trading & Accounts",
    question: "Which order becomes a market order once triggered?",
    choices: ["Limit", "Stop", "Fill-or-kill", "All-or-none"],
    answerIndex: 1,
    explanation: "A stop order becomes a market order once the stop price is reached."
  },

  // -------------------------
  // DOMAIN 4 — REGULATORY FRAMEWORK
  // -------------------------

  {
    id: 301,
    topic: "Regulatory Framework",
    question: "Which organization enforces federal securities laws?",
    choices: ["FINRA", "MSRB", "SEC", "NYSE"],
    answerIndex: 2,
    explanation: "The SEC is the primary federal regulator."
  },

  {
    id: 302,
    topic: "Regulatory Framework",
    question: "Which rule requires firms to verify customer identity?",
    choices: ["Reg T", "CIP", "Reg SP", "AML"],
    answerIndex: 1,
    explanation: "CIP requires firms to verify customer identity."
  }
];
