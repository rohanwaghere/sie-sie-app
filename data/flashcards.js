// data/flashcards.js

const FLASHCARDS = [
  // DOMAIN 1 — CAPITAL MARKETS
  {
    id: 1,
    topic: "Capital Markets",
    type: "concept",
    front: "What is the primary market?",
    back: "The market where new securities are issued and sold to investors for the first time."
  },
  {
    id: 2,
    topic: "Capital Markets",
    type: "concept",
    front: "What is the secondary market?",
    back: "The market where existing securities are traded between investors."
  },
  {
    id: 3,
    topic: "Capital Markets",
    type: "concept",
    front: "What is an underwriter?",
    back: "A broker-dealer that helps an issuer bring new securities to market."
  },
  {
    id: 4,
    topic: "Capital Markets",
    type: "concept",
    front: "What is an IPO?",
    back: "The first public sale of a company's stock to investors."
  },
  {
    id: 5,
    topic: "Capital Markets",
    type: "concept",
    front: "What is a follow-on offering?",
    back: "An additional issuance of shares by a company that is already public."
  },

  // DOMAIN 2 — PRODUCTS & RISKS
  {
    id: 101,
    topic: "Products & Risks",
    type: "concept",
    front: "What is common stock?",
    back: "An equity security representing ownership in a corporation with voting rights."
  },
  {
    id: 102,
    topic: "Products & Risks",
    type: "concept",
    front: "What is preferred stock?",
    back: "Equity with priority for dividends but usually no voting rights."
  },
  {
    id: 103,
    topic: "Products & Risks",
    type: "concept",
    front: "What is a corporate bond?",
    back: "A debt security issued by a corporation."
  },
  {
    id: 104,
    topic: "Products & Risks",
    type: "concept",
    front: "What is interest rate risk?",
    back: "The risk that bond prices fall when interest rates rise."
  },
  {
    id: 105,
    topic: "Products & Risks",
    type: "concept",
    front: "What is credit risk?",
    back: "The risk that an issuer cannot make interest or principal payments."
  },
  {
    id: 106,
    topic: "Products & Risks",
    type: "concept",
    front: "What is liquidity risk?",
    back: "The risk that an investor cannot easily sell a security at a fair price."
  },
  {
    id: 107,
    topic: "Products & Risks",
    type: "concept",
    front: "What is inflation risk?",
    back: "The risk that rising prices erode the real value of returns."
  },
  {
    id: 108,
    topic: "Products & Risks",
    type: "concept",
    front: "What is a mutual fund?",
    back: "A pooled investment vehicle that invests in a diversified portfolio of securities."
  },
  {
    id: 109,
    topic: "Products & Risks",
    type: "concept",
    front: "What is an ETF?",
    back: "An exchange-traded fund that trades like a stock and holds a basket of securities."
  },
  {
    id: 110,
    topic: "Products & Risks",
    type: "concept",
    front: "What is a REIT?",
    back: "A company that owns or operates income-producing real estate."
  },

  // DOMAIN 3 — TRADING & ACCOUNTS
  {
    id: 201,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is a market order?",
    back: "An order to buy or sell immediately at the best available price."
  },
  {
    id: 202,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is a limit order?",
    back: "An order to buy or sell at a specific price or better."
  },
  {
    id: 203,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is a stop order?",
    back: "An order that becomes a market order once a trigger price is hit."
  },
  {
    id: 204,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is a margin account?",
    back: "An account that allows customers to borrow funds to purchase securities."
  },
  {
    id: 205,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is Regulation T?",
    back: "The rule requiring 50% initial margin for stock purchases."
  },
  {
    id: 206,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is a cash account?",
    back: "An account in which the customer must pay in full for all purchases."
  },
  {
    id: 207,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is a joint account?",
    back: "An account owned by two or more individuals."
  },
  {
    id: 208,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is a custodial account?",
    back: "An account managed by a custodian for the benefit of a minor."
  },
  {
    id: 209,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is suitability?",
    back: "The requirement that recommendations must be appropriate for the customer's profile and objectives."
  },
  {
    id: 210,
    topic: "Trading & Accounts",
    type: "concept",
    front: "What is a discretionary account?",
    back: "An account in which the registered representative can make trades without prior customer approval."
  },

  // DOMAIN 4 — REGULATORY FRAMEWORK
  {
    id: 301,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is FINRA?",
    back: "A self-regulatory organization overseeing broker-dealers and registered reps."
  },
  {
    id: 302,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is the SEC?",
    back: "The primary federal regulator of the securities markets."
  },
  {
    id: 303,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is AML?",
    back: "Anti-Money Laundering rules designed to detect and prevent illegal financial activity."
  },
  {
    id: 304,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is CIP?",
    back: "Customer Identification Program — requires firms to verify customer identity."
  },
  {
    id: 305,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is Regulation SP?",
    back: "The rule requiring firms to protect customer privacy and data."
  },
  {
    id: 306,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is MSRB?",
    back: "The Municipal Securities Rulemaking Board, which writes rules for municipal securities dealers."
  },
  {
    id: 307,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is insider trading?",
    back: "Illegal trading based on material, nonpublic information."
  },
  {
    id: 308,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is a registered representative?",
    back: "An individual licensed to solicit and sell securities products."
  },
  {
    id: 309,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is continuing education?",
    back: "Ongoing training required to maintain registration."
  },
  {
    id: 310,
    topic: "Regulatory Framework",
    type: "concept",
    front: "What is a self-regulatory organization (SRO)?",
    back: "An organization, like FINRA, that writes and enforces rules for its members."
  }
];
