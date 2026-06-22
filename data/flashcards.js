const FLASHCARDS = {
  // -----------------------------------------
  // DOMAIN 1 — CAPITAL MARKETS (25 CARDS)
  // -----------------------------------------
  domain1: [
    {
      id: 1,
      front: "What is the primary market?",
      back: "The market where new securities are issued and sold to investors for the first time."
    },
    {
      id: 2,
      front: "What is the secondary market?",
      back: "The market where existing securities are traded between investors."
    },
    {
      id: 3,
      front: "What is an underwriter?",
      back: "A broker-dealer that helps an issuer bring new securities to market."
    },
    {
      id: 4,
      front: "What is an IPO?",
      back: "The first public sale of a company's stock to investors."
    },
    {
      id: 5,
      front: "What is a follow-on offering?",
      back: "An additional issuance of shares by a company that is already public."
    },
    {
      id: 6,
      front: "What is a shelf registration?",
      back: "A registration that allows an issuer to sell securities over time as needed."
    },
    {
      id: 7,
      front: "What is a private placement?",
      back: "A sale of securities to a limited number of accredited investors."
    },
    {
      id: 8,
      front: "What is Regulation D?",
      back: "A rule that governs private placements and exemptions from SEC registration."
    },
    {
      id: 9,
      front: "What is the role of a transfer agent?",
      back: "They maintain records of shareholder ownership and handle certificate transfers."
    },
    {
      id: 10,
      front: "What is the role of a registrar?",
      back: "They ensure that a company does not issue more shares than authorized."
    },
    {
      id: 11,
      front: "What is the third market?",
      back: "Trading of exchange-listed securities OTC by institutional investors."
    },
    {
      id: 12,
      front: "What is the fourth market?",
      back: "Direct trading between institutions without broker-dealers."
    },
    {
      id: 13,
      front: "What is a market maker?",
      back: "A firm that stands ready to buy and sell a security at quoted prices."
    },
    {
      id: 14,
      front: "What is a bid price?",
      back: "The price at which a market maker is willing to buy a security."
    },
    {
      id: 15,
      front: "What is an ask price?",
      back: "The price at which a market maker is willing to sell a security."
    },
    {
      id: 16,
      front: "What is the spread?",
      back: "The difference between the bid and ask price."
    },
    {
      id: 17,
      front: "What is a broker?",
      back: "An agent who executes trades on behalf of customers."
    },
    {
      id: 18,
      front: "What is a dealer?",
      back: "A firm trading for its own account (principal)."
    },
    {
      id: 19,
      front: "What is a syndicate?",
      back: "A group of underwriters sharing risk in a new issue."
    },
    {
      id: 20,
      front: "What is a tombstone ad?",
      back: "A simple announcement of a new issue that is allowed during the cooling-off period."
    },
    {
      id: 21,
      front: "What is the cooling-off period?",
      back: "The 20-day minimum waiting period after filing a registration statement."
    },
    {
      id: 22,
      front: "What is a red herring?",
      back: "A preliminary prospectus used during the cooling-off period."
    },
    {
      id: 23,
      front: "What is a final prospectus?",
      back: "The official offering document provided at or before confirmation of sale."
    },
    {
      id: 24,
      front: "What is the role of the SEC in offerings?",
      back: "They review filings for completeness but do not approve or guarantee securities."
    },
    {
      id: 25,
      front: "What is stabilization?",
      back: "Underwriter bids to prevent a new issue’s price from falling."
    },
  {
      id: 26,
      front: "What is a firm commitment underwriting?",
      back: "The underwriter buys the entire issue and resells it to the public."
    },
    {
      id: 27,
      front: "What is a best efforts underwriting?",
      back: "The underwriter sells as much as possible but does not guarantee the entire issue."
    },
    {
      id: 28,
      front: "What is an all‑or‑none offering?",
      back: "The entire issue must be sold or the deal is canceled."
    },
    {
      id: 29,
      front: "What is a mini‑max offering?",
      back: "A minimum amount must be sold for the offering to proceed."
    },
    {
      id: 30,
      front: "What is a green shoe option?",
      back: "Allows underwriters to sell additional shares (typically 15%) if demand is high."
    },
    {
      id: 31,
      front: "What is a restricted period under Regulation M?",
      back: "A period when underwriters cannot manipulate the price of a new issue."
    },
    {
      id: 32,
      front: "What is stabilization bidding?",
      back: "Underwriter bids to prevent a new issue from falling below the offering price."
    },
    {
      id: 33,
      front: "What is a market-out clause?",
      back: "Allows an underwriter to cancel an offering due to adverse events."
    },
    {
      id: 34,
      front: "What is a blue-sky law?",
      back: "State securities regulations requiring registration at the state level."
    },
    {
      id: 35,
      front: "What is the role of FINRA in capital markets?",
      back: "FINRA enforces rules for broker-dealers and oversees underwriting practices."
    },
        {
      id: 36,
      front: "What is a firm element requirement?",
      back: "Annual training required by broker-dealers for their registered employees."
    },
    {
      id: 37,
      front: "What is a cooling-off period?",
      back: "A minimum 20-day waiting period after filing a registration statement."
    },
    {
      id: 38,
      front: "What is a preliminary prospectus?",
      back: "A red herring used to market a new issue during the cooling-off period."
    },
    {
      id: 39,
      front: "What is a final prospectus?",
      back: "The official offering document delivered at or before confirmation of sale."
    },
    {
      id: 40,
      front: "What is a restricted person under Rule 5130?",
      back: "Individuals prohibited from buying IPO shares, such as broker-dealer employees."
    },
    {
      id: 41,
      front: "What is a stabilization bid?",
      back: "A bid placed by underwriters to prevent a new issue from falling below the offering price."
    },
    {
      id: 42,
      front: "What is a syndicate letter?",
      back: "A document outlining responsibilities and compensation for underwriters."
    },
    {
      id: 43,
      front: "What is a selling group?",
      back: "Firms that help distribute a new issue but take no underwriting risk."
    },
    {
      id: 44,
      front: "What is a due diligence meeting?",
      back: "A meeting held before the offering to ensure accuracy of disclosures."
    },
    {
      id: 45,
      front: "What is a prospectus delivery requirement?",
      back: "The obligation to provide a prospectus to investors during a new issue."
    }
  ],

  // -----------------------------------------
  // DOMAIN 2 — PRODUCTS & RISKS (25 CARDS)
  // -----------------------------------------
  domain2: [
    {
      id: 101,
      front: "What is common stock?",
      back: "An equity security representing ownership with voting rights."
    },
    {
      id: 102,
      front: "What is preferred stock?",
      back: "Equity with priority for dividends but usually no voting rights."
    },
    {
      id: 103,
      front: "What is cumulative preferred stock?",
      back: "Preferred stock where missed dividends accumulate and must be paid before common dividends."
    },
    {
      id: 104,
      front: "What is callable preferred stock?",
      back: "Preferred stock that can be redeemed by the issuer at a set price."
    },
    {
      id: 105,
      front: "What is convertible preferred stock?",
      back: "Preferred stock that can be exchanged for common shares."
    },
    {
      id: 106,
      front: "What is a corporate bond?",
      back: "A debt security issued by a corporation."
    },
    {
      id: 107,
      front: "What is a debenture?",
      back: "An unsecured corporate bond backed only by issuer credit."
    },
    {
      id: 108,
      front: "What is a secured bond?",
      back: "A bond backed by specific collateral."
    },
    {
      id: 109,
      front: "What is a municipal bond?",
      back: "A bond issued by states or local governments, often offering tax-free interest."
    },
    {
      id: 110,
      front: "What is a GO bond?",
      back: "A municipal bond backed by the issuer’s taxing power."
    },
    {
      id: 111,
      front: "What is a revenue bond?",
      back: "A municipal bond backed by project revenues."
    },
    {
      id: 112,
      front: "What is a T-bill?",
      back: "A short-term U.S. government security issued at a discount."
    },
    {
      id: 113,
      front: "What is a T-note?",
      back: "A U.S. government security with 2–10 year maturity."
    },
    {
      id: 114,
      front: "What is a T-bond?",
      back: "A long-term U.S. government security with maturities over 10 years."
    },
    {
      id: 115,
      front: "What is interest rate risk?",
      back: "The risk that bond prices fall when interest rates rise."
    },
    {
      id: 116,
      front: "What is credit risk?",
      back: "The risk that an issuer cannot make interest or principal payments."
    },
    {
      id: 117,
      front: "What is inflation risk?",
      back: "The risk that rising prices erode purchasing power."
    },
    {
      id: 118,
      front: "What is liquidity risk?",
      back: "The risk of not being able to sell a security quickly at a fair price."
    },
    {
      id: 119,
      front: "What is market risk?",
      back: "The risk of losses due to overall market movements."
    },
    {
      id: 120,
      front: "What is reinvestment risk?",
      back: "The risk that interest or principal must be reinvested at lower rates."
    },
    {
      id: 121,
      front: "What is call risk?",
      back: "The risk that a bond is redeemed early when rates fall."
    },
    {
      id: 122,
      front: "What is extension risk?",
      back: "The risk that a security’s maturity extends when rates rise."
    },
    {
      id: 123,
      front: "What is a mutual fund?",
      back: "A pooled investment vehicle offering diversification and professional management."
    },
    {
      id: 124,
      front: "What is an ETF?",
      back: "An exchange-traded fund that trades like a stock and tracks an index."
    },
    {
      id: 125,
      front: "What is a REIT?",
      back: "A company that owns or operates income-producing real estate."
    },
    {
      id: 126,
      front: "What is a zero-coupon bond?",
      back: "A bond issued at a deep discount that pays no periodic interest."
    },
    {
      id: 127,
      front: "What is a callable bond?",
      back: "A bond that can be redeemed early by the issuer."
    },
    {
      id: 128,
      front: "What is a puttable bond?",
      back: "A bond that allows investors to sell it back to the issuer at set times."
    },
    {
      id: 129,
      front: "What is a convertible bond?",
      back: "A bond that can be exchanged for a fixed number of shares."
    },
    {
      id: 130,
      front: "What is a sinking fund?",
      back: "A fund set aside by the issuer to retire debt gradually."
    },
    {
      id: 131,
      front: "What is duration?",
      back: "A measure of a bond’s sensitivity to interest rate changes."
    },
    {
      id: 132,
      front: "What is yield to maturity?",
      back: "The total return expected if a bond is held to maturity."
    },
    {
      id: 133,
      front: "What is yield to call?",
      back: "The return if a callable bond is redeemed early."
    },
    {
      id: 134,
      front: "What is current yield?",
      back: "Annual interest divided by current market price."
    },
    {
      id: 135,
      front: "What is a money market instrument?",
      back: "A short-term debt security with high liquidity and low risk."
    },
    {
      id: 136,
      front: "What is commercial paper?",
      back: "Short-term unsecured corporate debt."
    },
    {
      id: 137,
      front: "What is a banker’s acceptance?",
      back: "A short-term instrument used to finance international trade."
    },
    {
      id: 138,
      front: "What is a CD?",
      back: "A certificate of deposit issued by a bank."
    },
    {
      id: 139,
      front: "What is a jumbo CD?",
      back: "A large-denomination CD, typically $100,000 or more."
    },
    {
      id: 140,
      front: "What is a variable annuity?",
      back: "An insurance product with investment options and variable returns."
    },
    {
      id: 141,
      front: "What is a fixed annuity?",
      back: "An annuity with guaranteed fixed payments."
    },
    {
      id: 142,
      front: "What is a surrender charge?",
      back: "A fee for withdrawing early from an annuity."
    },
    {
      id: 143,
      front: "What is a mortality guarantee?",
      back: "An insurer’s promise to pay for life regardless of longevity."
    },
    {
      id: 144,
      front: "What is an options contract?",
      back: "A contract giving the right to buy or sell a security at a set price."
    },
    {
      id: 145,
      front: "What is a call option?",
      back: "A contract giving the right to buy a security."
    },
    {
      id: 146,
      front: "What is a put option?",
      back: "A contract giving the right to sell a security."
    },
    {
      id: 147,
      front: "What is intrinsic value?",
      back: "The in-the-money amount of an option."
    },
    {
      id: 148,
      front: "What is time value?",
      back: "The portion of an option’s premium above intrinsic value."
    },
    {
      id: 149,
      front: "What is a covered call?",
      back: "Selling a call option while owning the underlying stock."
    },
    {
      id: 150,
      front: "What is a protective put?",
      back: "Buying a put to hedge a long stock position."
    },
    {
      id: 151,
      front: "What is a straddle?",
      back: "Buying or selling both a call and a put on the same stock."
    },
    {
      id: 152,
      front: "What is a REIT?",
      back: "A company that owns or operates income-producing real estate."
    },
    {
      id: 153,
      front: "What is a hybrid REIT?",
      back: "A REIT investing in both properties and mortgages."
    },
    {
      id: 154,
      front: "What is a mortgage REIT?",
      back: "A REIT investing in mortgages and mortgage-backed securities."
    },
    {
      id: 155,
      front: "What is a DPP?",
      back: "A direct participation program offering pass-through tax benefits."
    },
    {
      id: 156,
      front: "What is a hedge fund?",
      back: "A private investment pool using aggressive strategies."
    },
    {
      id: 157,
      front: "What is a UIT?",
      back: "A unit investment trust with a fixed portfolio."
    },
    {
      id: 158,
      front: "What is NAV?",
      back: "Net asset value — the per-share value of a fund."
    },
    {
      id: 159,
      front: "What is POP?",
      back: "Public offering price — NAV plus sales charge."
    },
    {
      id: 160,
      front: "What is a breakpoint?",
      back: "A discount on mutual fund sales charges based on investment size."
    },
    {
      id: 161,
      front: "What is a letter of intent?",
      back: "A document allowing an investor to receive breakpoints over 13 months."
    },
    {
      id: 162,
      front: "What is a 12b‑1 fee?",
      back: "A mutual fund marketing and distribution fee."
    },
    {
      id: 163,
      front: "What is a no‑load fund?",
      back: "A mutual fund with no sales charge."
    },
    {
      id: 164,
      front: "What is a target-date fund?",
      back: "A fund that adjusts its allocation as a target retirement date approaches."
    },
        {
      id: 165,
      front: "What is a growth stock?",
      back: "A stock expected to grow earnings faster than the market."
    },
    {
      id: 166,
      front: "What is a value stock?",
      back: "A stock considered undervalued based on fundamentals."
    },
    {
      id: 167,
      front: "What is a blue-chip stock?",
      back: "A large, stable, financially strong company with consistent dividends."
    },
    {
      id: 168,
      front: "What is a cyclical stock?",
      back: "A stock whose performance is tied to economic cycles."
    },
    {
      id: 169,
      front: "What is a defensive stock?",
      back: "A stock that performs relatively well during economic downturns."
    },
    {
      id: 170,
      front: "What is a penny stock?",
      back: "A low-priced, speculative security trading under $5."
    },
    {
      id: 171,
      front: "What is a structured product?",
      back: "A prepackaged investment combining derivatives and traditional securities."
    },
    {
      id: 172,
      front: "What is a CMBS?",
      back: "Commercial mortgage-backed security backed by commercial real estate loans."
    },
    {
      id: 173,
      front: "What is an ABS?",
      back: "Asset-backed security supported by loans such as credit cards or auto loans."
    },
    {
      id: 174,
      front: "What is a tranche?",
      back: "A slice of a structured product with specific risk and maturity characteristics."
    }
  ],
  // -----------------------------------------
  // DOMAIN 3 — TRADING & ACCOUNTS (50 CARDS)
  // -----------------------------------------
  domain3: [
    {
      id: 201,
      front: "What is a market order?",
      back: "An order to buy or sell immediately at the best available price."
    },
    {
      id: 202,
      front: "What is a limit order?",
      back: "An order to buy or sell at a specific price or better."
    },
    {
      id: 203,
      front: "What is a stop order?",
      back: "An order that becomes a market order once the stop price is triggered."
    },
    {
      id: 204,
      front: "What is a stop-limit order?",
      back: "An order that becomes a limit order once the stop price is triggered."
    },
    {
      id: 205,
      front: "What is a day order?",
      back: "An order that expires at the end of the trading day if not executed."
    },
    {
      id: 206,
      front: "What is a GTC order?",
      back: "Good‑til‑canceled order that remains active until executed or canceled."
    },
    {
      id: 207,
      front: "What is a fill‑or‑kill order?",
      back: "An order that must be executed immediately in full or canceled."
    },
    {
      id: 208,
      front: "What is an all‑or‑none order?",
      back: "An order that must be executed in full but not necessarily immediately."
    },
    {
      id: 209,
      front: "What is a not‑held order?",
      back: "An order giving the broker discretion over price and time of execution."
    },
    {
      id: 210,
      front: "What is a discretionary account?",
      back: "An account where the representative can choose action, amount, and asset."
    },
    {
      id: 211,
      front: "What is a cash account?",
      back: "An account where the customer must pay in full for all purchases."
    },
    {
      id: 212,
      front: "What is a margin account?",
      back: "An account that allows customers to borrow funds to purchase securities."
    },
    {
      id: 213,
      front: "What is Regulation T?",
      back: "The rule requiring 50% initial margin for stock purchases."
    },
    {
      id: 214,
      front: "What is maintenance margin?",
      back: "The minimum equity required to avoid a margin call."
    },
    {
      id: 215,
      front: "What is a margin call?",
      back: "A demand for additional funds when equity falls below maintenance."
    },
    {
      id: 216,
      front: "What is a joint account?",
      back: "An account owned by two or more individuals."
    },
    {
      id: 217,
      front: "What is a JTWROS account?",
      back: "Joint account where ownership passes to the surviving owner."
    },
    {
      id: 218,
      front: "What is a tenants‑in‑common account?",
      back: "Joint account where ownership passes to the estate, not the survivor."
    },
    {
      id: 219,
      front: "What is a custodial account?",
      back: "An account managed by a custodian for the benefit of a minor."
    },
    {
      id: 220,
      front: "What is a fiduciary?",
      back: "A person legally obligated to act in the best interest of another party."
    },
    {
      id: 221,
      front: "What is suitability?",
      back: "The requirement that recommendations must match the customer's profile."
    },
    {
      id: 222,
      front: "What is churning?",
      back: "Excessive trading in an account to generate commissions."
    },
    {
      id: 223,
      front: "What is front‑running?",
      back: "Trading ahead of a customer order for personal benefit."
    },
    {
      id: 224,
      front: "What is freeriding?",
      back: "Buying and selling without paying, resulting in account freeze."
    },
    {
      id: 225,
      front: "What is a DVP/RVP account?",
      back: "Delivery‑versus‑payment or receive‑versus‑payment institutional settlement."
    },
    {
      id: 226,
      front: "What is settlement date?",
      back: "The date when securities and cash must be exchanged."
    },
    {
      id: 227,
      front: "What is T+2?",
      back: "Standard settlement for stocks and corporate bonds."
    },
    {
      id: 228,
      front: "What is T+1?",
      back: "Settlement for options and U.S. Treasuries."
    },
    {
      id: 229,
      front: "What is a long position?",
      back: "Owning a security with the expectation it will rise."
    },
    {
      id: 230,
      front: "What is a short position?",
      back: "Selling borrowed securities expecting the price to fall."
    },
    {
      id: 231,
      front: "What is a short squeeze?",
      back: "A rapid price increase forcing short sellers to cover."
    },
    {
      id: 232,
      front: "What is a good delivery?",
      back: "Proper documentation and certificates required for settlement."
    },
    {
      id: 233,
      front: "What is a trade confirmation?",
      back: "A document summarizing trade details sent no later than T+1."
    },
    {
      id: 234,
      front: "What is a customer account statement?",
      back: "A periodic summary of holdings and activity."
    },
    {
      id: 235,
      front: "What is SIPC?",
      back: "Insurance protecting customers if a broker‑dealer fails."
    },
    {
      id: 236,
      front: "What is a wrap account?",
      back: "An account charging a single fee for advisory and transaction services."
    },
    {
      id: 237,
      front: "What is a prime brokerage account?",
      back: "A service for hedge funds offering centralized clearing and financing."
    },
    {
      id: 238,
      front: "What is a fee‑based account?",
      back: "An account charging a flat fee instead of commissions."
    },
    {
      id: 239,
      front: "What is a commission‑based account?",
      back: "An account where the customer pays per transaction."
    },
    {
      id: 240,
      front: "What is a suitability obligation?",
      back: "The requirement to recommend only appropriate investments."
    },
    {
      id: 241,
      front: "What is a reasonable‑basis suitability?",
      back: "The product must be appropriate for at least some investors."
    },
    {
      id: 242,
      front: "What is a customer‑specific suitability?",
      back: "The recommendation must match the customer's profile."
    },
    {
      id: 243,
      front: "What is quantitative suitability?",
      back: "The series of transactions must be appropriate, not excessive."
    },
    {
      id: 244,
      front: "What is a breakpoint?",
      back: "A discount on mutual fund sales charges based on investment size."
    },
    {
      id: 245,
      front: "What is a letter of intent?",
      back: "A document allowing an investor to receive breakpoints over 13 months."
    },
    {
      id: 246,
      front: "What is NAV?",
      back: "Net asset value — the per‑share value of a mutual fund."
    },
    {
      id: 247,
      front: "What is POP?",
      back: "Public offering price — NAV plus sales charge."
    },
    {
      id: 248,
      front: "What is a 12b‑1 fee?",
      back: "A mutual fund marketing and distribution fee."
    },
    {
      id: 249,
      front: "What is a breakpoint sale?",
      back: "Failing to give a customer a discount they qualify for."
    },
    {
      id: 250,
      front: "What is a no‑load fund?",
      back: "A mutual fund with no sales charge."
    },
        {
      id: 251,
      front: "What is a market-on-close order?",
      back: "An order executed as close to the market close as possible."
    },
    {
      id: 252,
      front: "What is a limit-on-close order?",
      back: "A closing order that must be executed at or better than a specified price."
    },
    {
      id: 253,
      front: "What is a not-held order?",
      back: "An order giving the broker discretion over price and time."
    },
    {
      id: 254,
      front: "What is a good-till-date order?",
      back: "An order active until a specified date."
    },
    {
      id: 255,
      front: "What is a good-till-canceled order?",
      back: "An order active until executed or canceled."
    },
    {
      id: 256,
      front: "What is a discretionary trade?",
      back: "A trade where the rep chooses action, amount, or asset."
    },
    {
      id: 257,
      front: "What is a non-discretionary trade?",
      back: "A trade where the customer specifies action, amount, and asset."
    },
    {
      id: 258,
      front: "What is a wrap fee?",
      back: "A single fee covering advisory and transaction services."
    },
    {
      id: 259,
      front: "What is a prime broker?",
      back: "A firm providing clearing, custody, and financing to hedge funds."
    },
    {
      id: 260,
      front: "What is a DVP account?",
      back: "Delivery-versus-payment settlement for institutions."
    },
    {
      id: 261,
      front: "What is an RVP account?",
      back: "Receive-versus-payment settlement for institutions."
    },
    {
      id: 262,
      front: "What is a trade blotter?",
      back: "A daily record of all trades executed by a firm."
    },
    {
      id: 263,
      front: "What is a margin disclosure statement?",
      back: "A document explaining the risks of margin trading."
    },
    {
      id: 264,
      front: "What is a hypothecation agreement?",
      back: "Allows a broker to pledge customer securities as collateral."
    },
    {
      id: 265,
      front: "What is rehypothecation?",
      back: "A broker repledging customer securities to a bank for a loan."
    }
  ],
  // -----------------------------------------
  // DOMAIN 4 — REGULATORY FRAMEWORK (50 CARDS)
  // -----------------------------------------
  domain4: [
    {
      id: 301,
      front: "What is FINRA?",
      back: "A self‑regulatory organization overseeing broker‑dealers and registered reps."
    },
    {
      id: 302,
      front: "What is the SEC?",
      back: "The primary federal regulator of the securities markets."
    },
    {
      id: 303,
      front: "What is MSRB?",
      back: "The Municipal Securities Rulemaking Board, which writes rules for muni dealers."
    },
    {
      id: 304,
      front: "What is SIPC?",
      back: "Insurance protecting customers if a broker‑dealer fails."
    },
    {
      id: 305,
      front: "What is the FDIC?",
      back: "Insurance protecting bank deposits up to $250,000."
    },
    {
      id: 306,
      front: "What is Regulation SP?",
      back: "The rule requiring firms to protect customer privacy and data."
    },
    {
      id: 307,
      front: "What is AML?",
      back: "Anti‑Money Laundering rules designed to detect illegal activity."
    },
    {
      id: 308,
      front: "What is CIP?",
      back: "Customer Identification Program — requires firms to verify identity."
    },
    {
      id: 309,
      front: "What is a SAR?",
      back: "Suspicious Activity Report — filed for suspicious transactions."
    },
    {
      id: 310,
      front: "What is a CTR?",
      back: "Currency Transaction Report — required for cash over $10,000."
    },
    {
      id: 311,
      front: "What is insider trading?",
      back: "Illegal trading based on material, nonpublic information."
    },
    {
      id: 312,
      front: "What is Regulation FD?",
      back: "Fair Disclosure — prevents selective disclosure of material information."
    },
    {
      id: 313,
      front: "What is a registered representative?",
      back: "An individual licensed to solicit and sell securities."
    },
    {
      id: 314,
      front: "What is Form U4?",
      back: "The registration form for associated persons."
    },
    {
      id: 315,
      front: "What is Form U5?",
      back: "The termination form for associated persons."
    },
    {
      id: 316,
      front: "What is statutory disqualification?",
      back: "A ban from the industry due to certain violations or convictions."
    },
    {
      id: 317,
      front: "What is continuing education?",
      back: "Ongoing training required to maintain registration."
    },
    {
      id: 318,
      front: "What is the Firm Element?",
      back: "Annual training required by the firm."
    },
    {
      id: 319,
      front: "What is the Regulatory Element?",
      back: "FINRA‑mandated training at set intervals."
    },
    {
      id: 320,
      front: "What is a retail communication?",
      back: "Any written communication distributed to more than 25 retail investors."
    },
    {
      id: 321,
      front: "What is correspondence?",
      back: "Written communication to 25 or fewer retail investors."
    },
    {
      id: 322,
      front: "What is institutional communication?",
      back: "Communication directed only to institutional investors."
    },
    {
      id: 323,
      front: "What is a principal?",
      back: "A supervisor responsible for approving communications and activities."
    },
    {
      id: 324,
      front: "What is a customer complaint?",
      back: "Any written grievance from a customer."
    },
    {
      id: 325,
      front: "What is a breakpoint sale?",
      back: "Failing to give a customer a mutual fund discount they qualify for."
    },
    {
      id: 326,
      front: "What is a prospectus?",
      back: "A disclosure document required for new securities offerings."
    },
    {
      id: 327,
      front: "What is a statutory prospectus?",
      back: "The full, official prospectus required at or before sale."
    },
    {
      id: 328,
      front: "What is a summary prospectus?",
      back: "A short version of the prospectus with key information."
    },
    {
      id: 329,
      front: "What is a no‑approval clause?",
      back: "A statement that the SEC does not approve or endorse securities."
    },
    {
      id: 330,
      front: "What is a Chinese Wall?",
      back: "Information barriers between research and investment banking."
    },
    {
      id: 331,
      front: "What is a fidelity bond?",
      back: "Insurance protecting firms from employee theft."
    },
    {
      id: 332,
      front: "What is a principal trade?",
      back: "A trade where the firm acts as a dealer."
    },
    {
      id: 333,
      front: "What is an agency trade?",
      back: "A trade where the firm acts as a broker."
    },
    {
      id: 334,
      front: "What is a markup?",
      back: "The dealer's charge when selling from inventory."
    },
    {
      id: 335,
      front: "What is a markdown?",
      back: "The dealer's charge when buying into inventory."
    },
    {
      id: 336,
      front: "What is a commission?",
      back: "A fee charged when acting as a broker."
    },
    {
      id: 337,
      front: "What is a Code of Ethics?",
      back: "Rules governing employee conduct and conflicts of interest."
    },
    {
      id: 338,
      front: "What is a conflict of interest?",
      back: "A situation where personal interests may influence professional actions."
    },
    {
      id: 339,
      front: "What is a gift limit?",
      back: "FINRA’s $100 per person per year limit on gifts."
    },
    {
      id: 340,
      front: "What is a political contribution rule?",
      back: "Rules limiting contributions to prevent pay‑to‑play."
    },
    {
      id: 341,
      front: "What is a customer identification requirement?",
      back: "Firms must verify identity before opening an account."
    },
    {
      id: 342,
      front: "What is a recordkeeping requirement?",
      back: "Firms must maintain books and records for set periods."
    },
    {
      id: 343,
      front: "What is a supervisory system?",
      back: "A structure ensuring compliance with laws and rules."
    },
    {
      id: 344,
      front: "What is a branch office?",
      back: "A location where securities business is conducted."
    },
    {
      id: 345,
      front: "What is an OSJ?",
      back: "Office of Supervisory Jurisdiction — handles key supervisory functions."
    },
    {
      id: 346,
      front: "What is a customer account form?",
      back: "A document collecting essential customer information."
    },
    {
      id: 347,
      front: "What is a trusted contact?",
      back: "A person firms may contact regarding account concerns."
    },
    {
      id: 348,
      front: "What is a temporary hold?",
      back: "A pause on disbursements when financial exploitation is suspected."
    },
    {
      id: 349,
      front: "What is a complaint log?",
      back: "A record of written customer complaints."
    },
    {
      id: 350,
      front: "What is a regulatory inquiry?",
      back: "A request for information from a regulator."
    },
        {
      id: 351,
      front: "What is Regulation BI?",
      back: "A rule requiring broker-dealers to act in the best interest of retail customers."
    },
    {
      id: 352,
      front: "What is Form CRS?",
      back: "A customer relationship summary required for retail clients."
    },
    {
      id: 353,
      front: "What is a retail investor?",
      back: "An individual investor who is not institutional."
    },
    {
      id: 354,
      front: "What is an institutional investor?",
      back: "A large entity such as a bank, insurance company, or pension fund."
    },
    {
      id: 355,
      front: "What is a qualified institutional buyer (QIB)?",
      back: "An institution with at least $100 million in securities."
    },
    {
      id: 356,
      front: "What is Regulation D Rule 506(c)?",
      back: "Allows general solicitation if all investors are accredited."
    },
    {
      id: 357,
      front: "What is an accredited investor?",
      back: "An investor meeting income or net worth thresholds."
    },
    {
      id: 358,
      front: "What is a private placement memorandum?",
      back: "Disclosure document for private offerings."
    },
    {
      id: 359,
      front: "What is a qualified purchaser?",
      back: "An investor with $5 million in investments."
    },
    {
      id: 360,
      front: "What is a statutory disqualification?",
      back: "A ban from the industry due to certain violations or convictions."
    },
    {
      id: 361,
      front: "What is a fidelity bond?",
      back: "Insurance protecting firms from employee theft."
    },
    {
      id: 362,
      front: "What is a regulatory inquiry?",
      back: "A request for information from a regulator."
    },
    {
      id: 363,
      front: "What is a customer complaint?",
      back: "Any written grievance from a customer."
    },
    {
      id: 364,
      front: "What is a reportable event?",
      back: "Certain violations or actions that must be reported to FINRA."
    },
    {
      id: 365,
      front: "What is a blue-sky filing?",
      back: "State-level registration or notice filing for securities."
    }
  ]
};
