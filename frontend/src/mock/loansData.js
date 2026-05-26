// Loans catalog for Palisadoes Credit Union
export const loansCatalog = [
  {
    code: "Loan 01",
    title: "Personal Loan",
    icon: "Wallet",
    short: "Flexible financing for everyday needs.",
    description:
      "A versatile loan designed to help members handle personal expenses — from family needs and home repairs to debt consolidation.",
    eligibility: [
      "Minimum 6 months active membership",
      "Verifiable income or salary deposit",
      "Good account standing",
    ],
    tenor: "Up to 7 years",
    accent: "#8A4D6F",
  },
  {
    code: "Loan 02",
    title: "Special Loan",
    icon: "Sparkles",
    short: "Limited-time loan specials with reduced rates.",
    description:
      "Monthly themed promotions offering lower interest rates and extended repayment terms for qualifying members.",
    eligibility: ["Active member in good standing", "Subject to promo period terms"],
    tenor: "Up to 5 years",
    accent: "#0d9488",
  },
  {
    code: "Loan 03",
    title: "Special Loan",
    icon: "Star",
    short: "Quarterly themed financial relief.",
    description:
      "A secondary special loan track that runs during select periods to support member goals at preferential rates.",
    eligibility: ["Active member", "Income verification"],
    tenor: "Up to 5 years",
    accent: "#8A4D6F",
  },
  {
    code: "Loan 05",
    title: "Easi Access Loan",
    icon: "CreditCard",
    short: "Revolving credit, just like a credit card.",
    description:
      "Borrow, repay, and re-borrow up to your approved limit at any time without re-applying. Pay only on what you use.",
    eligibility: ["Pre-approved credit limit", "Active salary deposit account"],
    tenor: "Revolving",
    accent: "#0d9488",
  },
  {
    code: "Loan 08",
    title: "Carib Cement Revolving Loan",
    icon: "Factory",
    short: "Dedicated revolving facility for Carib Cement members.",
    description:
      "An exclusive revolving credit line tailored to Carib Cement employees — fast access and convenient payroll deduction.",
    eligibility: ["Carib Cement payroll member", "Active membership"],
    tenor: "Revolving",
    accent: "#8A4D6F",
  },
  {
    code: "Loan 08",
    title: "Unsecured (Outrageous) Loan",
    icon: "Zap",
    short: "Fast, unsecured loan with no collateral.",
    description:
      "Quick approval, no security required — designed for members needing immediate financial flexibility.",
    eligibility: ["12 months membership", "Strong repayment history"],
    tenor: "Up to 4 years",
    accent: "#0d9488",
  },
  {
    code: "Loan 11",
    title: "Christmas Loan",
    icon: "Gift",
    short: "Enjoy the holidays without the financial stress.",
    description:
      "Seasonal loan with special rates to fund gifts, travel, and Christmas celebrations for you and your family.",
    eligibility: ["Active membership", "Available Nov–Dec annually"],
    tenor: "Up to 18 months",
    accent: "#8A4D6F",
  },
  {
    code: "Loan 13",
    title: "Back to School Loan",
    icon: "GraduationCap",
    short: "Cover school fees, uniforms, books and more.",
    description:
      "Education-focused loan to ease the back-to-school burden — for children and adult learners alike.",
    eligibility: ["Proof of enrollment", "Active membership"],
    tenor: "Up to 24 months",
    accent: "#0d9488",
  },
  {
    code: "Loan 16",
    title: "Divi-Loan",
    icon: "PiggyBank",
    short: "Borrow against your projected dividends.",
    description:
      "Access funds backed by your anticipated dividend income — perfect for short-term needs.",
    eligibility: ["Member with dividend earnings", "Good standing"],
    tenor: "Up to 12 months",
    accent: "#8A4D6F",
  },
  {
    code: "Loan 18",
    title: "Valentine's Loan",
    icon: "Heart",
    short: "Make someone smile this Valentine's.",
    description:
      "Romantic season special — fund gifts, getaways, or special experiences at our most heartfelt rates.",
    eligibility: ["Active member", "Available Jan–Feb"],
    tenor: "Up to 12 months",
    accent: "#0d9488",
  },
  {
    code: "Loan 19",
    title: "Save More Loan",
    icon: "TrendingUp",
    short: "Boost your shares while borrowing.",
    description:
      "A unique loan structure that lets you grow your share savings while taking advantage of credit.",
    eligibility: ["6 months membership", "Income verification"],
    tenor: "Up to 5 years",
    accent: "#8A4D6F",
  },
  {
    code: "Loan 23",
    title: "Mother & Father's Day Loan",
    icon: "HeartHandshake",
    short: "Celebrate parents with a thoughtful gift.",
    description:
      "Dedicated loan to honour parents — fund treats, tributes, or family celebrations at preferential rates.",
    eligibility: ["Active member", "Seasonal availability"],
    tenor: "Up to 12 months",
    accent: "#0d9488",
  },
  {
    code: "Loan 24",
    title: "Payday Loan",
    icon: "Banknote",
    short: "Tide over until your next payday.",
    description:
      "Short-term emergency loan repayable on your next salary deposit. Quick approval for urgent expenses.",
    eligibility: ["Active salary deposit", "Member in good standing"],
    tenor: "Up to 30 days",
    accent: "#8A4D6F",
  },
];

export const adultMembership = {
  totalCost: "$6,000 JMD",
  breakdown: [
    { item: "Processing Fee", amount: "$2,000" },
    { item: "Ordinary Shares (S00)", amount: "$2,000" },
    { item: "Permanent Shares (D09)", amount: "$2,000" },
  ],
  documents: [
    "TRN",
    "Proof of Address",
    "Utility Bill OR Address Verification Form signed/stamped by a JP",
    "Valid ID (Driver's License, Passport, or National ID)",
  ],
  forms: [
    "Membership Application Form",
    "Self-Certification Form",
    "Address Verification Form",
    "Indemnity Instructions Form",
  ],
};

export const smartPacMembership = {
  totalCost: "$1,500 JMD",
  eligibility:
    "Members under 18 with a parent, guardian, or family member already in the credit union.",
  breakdown: [
    { item: "Processing Fee", amount: "$500" },
    { item: "Ordinary Shares (S00)", amount: "$200" },
    { item: "Deposit (D04)", amount: "$800" },
  ],
  forms: ["Application Form", "Declaration Form", "Self-Certification Form"],
  note: "References are no longer required.",
};
