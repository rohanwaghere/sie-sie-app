// data/questions.js

const QUESTIONS = [
  // PRODUCTS & RISKS
  {
    id: 1,
    topic: "Products & Risks",
    question: "Which of the following securities represents ownership in a corporation?",
    choices: [
      "Debenture",
      "Corporate bond",
      "Common stock",
      "Certificate of deposit"
    ],
    answerIndex: 2,
    explanation: "Common stock represents equity ownership in a corporation and typically carries voting rights."
  },
  {
    id: 2,
    topic: "Products & Risks",
    question: "Which risk is most associated with long-term bonds when interest rates rise?",
    choices: [
      "Liquidity risk",
      "Interest rate risk",
      "Credit risk",
      "Political risk"
    ],
    answerIndex: 1,
    explanation: "Interest rate risk affects fixed-income securities; when rates rise, bond prices generally fall."
  },

  // CAPITAL MARKETS
  {
    id: 101,
    topic: "Capital Markets",
    question: "The sale of newly issued shares to the public is conducted in which market?",
    choices: [
      "Secondary market",
      "Third market",
      "Primary market",
      "Fourth market"
    ],
    answerIndex: 2,
    explanation: "New issues are sold in the primary market; existing securities trade in the secondary market."
  },

  // TRADING & ACCOUNTS
  {
    id: 201,
    topic: "Trading & Accounts",
    question: "A customer enters an order to buy 100 shares at $50 or lower. This is:",
    choices: [
      "Market order",
      "Stop order",
      "Limit order",
      "Stop-limit order"
    ],
    answerIndex: 2,
    explanation: "A limit order specifies a price at which the customer is willing to buy or sell."
  },

  // REGULATORY FRAMEWORK
  {
    id: 301,
    topic: "Regulatory Framework",
    question: "Which organization is responsible for enforcing federal securities laws?",
    choices: [
      "FINRA",
      "MSRB",
      "SEC",
      "NYSE"
    ],
    answerIndex: 2,
    explanation: "The SEC is the primary federal regulator of the securities markets."
  }

  // Expand this list toward ~300 questions
];
