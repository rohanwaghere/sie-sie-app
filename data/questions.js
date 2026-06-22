// data/questions.js

const QUESTIONS = [
  // DOMAIN 1 — CAPITAL MARKETS
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
  {
    id: 3,
    topic: "Capital Markets",
    question: "Which participant typically helps an issuer bring new securities to market?",
    choices: ["Custodian", "Underwriter", "Transfer agent", "Registrar"],
    answerIndex: 1,
    explanation: "Underwriters assist issuers in bringing new securities to market."
  },
  {
    id: 4,
    topic: "Capital Markets",
    question: "Which market involves direct trading between institutions without an exchange?",
    choices: ["Primary", "Third", "Fourth", "OTC"],
    answerIndex: 2,
    explanation: "The fourth market involves direct trading between institutions."
  },

  // DOMAIN 2 — PRODUCTS & RISKS
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
  {
    id: 103,
    topic: "Products & Risks",
    question: "Which product is most appropriate for an investor seeking income and tax-free interest?",
    choices: ["Corporate bond", "Municipal bond", "Common stock", "CD"],
    answerIndex: 1,
    explanation: "Municipal bonds often provide tax-free interest income."
  },
  {
    id: 104,
    topic: "Products & Risks",
    question: "Which product trades intraday and typically tracks an index?",
    choices: ["Mutual fund", "ETF", "REIT", "Hedge fund"],
    answerIndex: 1,
    explanation: "ETFs trade like stocks and often track an index."
  },
  {
    id: 105,
    topic: "Products & Risks",
    question: "Which risk is most associated with thinly traded securities?",
    choices: ["Liquidity risk", "Credit risk", "Interest rate risk", "Market risk"],
    answerIndex: 0,
    explanation: "Thinly traded securities may be hard to sell at a fair price, creating liquidity risk."
  },

  // DOMAIN 3 — TRADING & ACCOUNTS
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
  {
    id: 203,
    topic: "Trading & Accounts",
    question: "Which account allows a representative to trade without prior customer approval?",
    choices: ["Cash account", "Margin account", "Discretionary account", "Custodial account"],
    answerIndex: 2,
    explanation: "Discretionary accounts allow the representative to make trades without prior approval."
  },
  {
    id: 204,
    topic: "Trading & Accounts",
    question: "Which regulation sets initial margin requirements for stock purchases?",
    choices: ["Reg T", "Reg SP", "Reg D", "Reg M"],
    answerIndex: 0,
    explanation: "Regulation T sets initial margin requirements."
  },
  {
    id: 205,
    topic: "Trading & Accounts",
    question: "Which account is opened for the benefit of a minor?",
    choices: ["Joint account", "Custodial account", "Margin account", "IRA"],
    answerIndex: 1,
    explanation: "Custodial accounts are managed by a custodian for a minor."
  },

  // DOMAIN 4 — REGULATORY FRAMEWORK
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
  },
  {
    id: 303,
    topic: "Regulatory Framework",
    question: "Which rule focuses on customer privacy?",
    choices: ["Reg T", "Reg SP", "Reg D", "Reg M"],
    answerIndex: 1,
    explanation: "Regulation SP focuses on customer privacy."
  },
  {
    id: 304,
    topic: "Regulatory Framework",
    question: "Which organization writes rules for municipal securities dealers?",
    choices: ["FINRA", "MSRB", "SEC", "NYSE"],
    answerIndex: 1,
    explanation: "MSRB writes rules for municipal securities dealers."
  },
  {
    id: 305,
    topic: "Regulatory Framework",
    question: "Trading on material, nonpublic information is called:",
    choices: ["Front-running", "Churning", "Insider trading", "Free-riding"],
    answerIndex: 2,
    explanation: "Insider trading is illegal trading based on material, nonpublic information."
  }
];
