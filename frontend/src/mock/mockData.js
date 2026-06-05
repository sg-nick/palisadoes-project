// Mock data for Palisadoes Co-operative Credit Union Ltd

const formUrl = (path) => `${process.env.PUBLIC_URL || ""}${path}`;

export const companyInfo = {
  name: "Palisadoes Co-operative Credit Union Ltd",
  shortName: "Palisadoes Credit Union",
  tagline: "Your wealth. Your wellbeing. Your future.",
  mission:
    "To provide high-quality financial services that empower our members, promote financial stability, and support community growth.",
  vision:
    "To be Jamaica's preferred credit union by delivering innovative financial solutions, exceptional member service, and lasting value.",
  founded: 1953,
  yearsOfService: 70,
  phone: "+1 (876) 924-8206",
  email: "member.services@palisadoescreditunion.com",
  registeredOffice:
    "Norman Manley International Airport, Palisadoes P.A., Kingston, Jamaica W.I.",
};

export const stats = [
  { label: "Total Assets", value: "000", icon: "TrendingUp" },
  { label: "Loan Portfolio", value: "000", icon: "Wallet" },
  { label: "Active Members", value: "000", icon: "Users" },
  { label: "Years of Service", value: "70+", icon: "Award" },
];

export const locations = [
  {
    id: 1,
    name: "Head Office",
    branch: "Norman Manley International Airport",
    address: "Palisadoes P.A., Kingston, Jamaica",
    phone: "(876) 924-8206 / (876) 932-7107/10",
    fax: "(876) 924-8689",
    hours: "Mon-Tue: 9:00 AM - 4:30 PM | Wed: 9:00 AM - 2:00 PM | Thu: 9:00 AM - 4:30 PM | Fri: 9:00 AM - 4:00 PM | Sat: 9:00 AM - 2:00 PM",
    isHeadOffice: true,
  },
  {
    id: 2,
    name: "Montego Bay Branch",
    branch: "Sangster International Airport",
    address: "Montego Bay, St. James, Jamaica",
    phone: "(876) 952-3124",
    fax: "(876) 940-6502",
    hours: "Mon-Tue: 9:00 AM - 4:30 PM | Wed: 9:00 AM - 2:00 PM | Thu: 9:00 AM - 4:30 PM | Fri: 9:00 AM - 4:00 PM",
  },
  {
    id: 3,
    name: "Carib Cement Company Ltd",
    branch: "Rockfort Plant",
    address: "Kingston 2, Jamaica",
    phone: "(876) 928-6231",
    fax: "(876) 928-7211",
    hours: "Mon-Tue: 9:00 AM - 4:30 PM | Wed: 9:00 AM - 2:00 PM | Thu: 9:00 AM - 4:30 PM | Fri: 9:00 AM - 4:00 PM",
  },
  {
    id: 4,
    name: "Satellite Office",
    branch: "Wheels & Wheels Auto Brokers",
    address: "Hagley Park Road, Kingston",
    phone: "(876) 924-8312",
    hours: "Mon-Fri: 10:00 AM - 4:00 PM",
  },
];

export const corporateInfo = {
  registeredOffice:
    "Norman Manley International Airport, Palisadoes, Kingston, Jamaica W.I.",
  branches: [
    "Sangster International Airport, Montego Bay, St. James",
    "Carib Cement Company, Rockfort, Kingston",
  ],
  bankers: "National Commercial Bank Jamaica Ltd",
  auditors: "HLB Mair Russell",
  attorneys: "Audrey Allen & Company",
};

export const staffSections = [
  {
    id: "general-manager",
    title: "General Manager",
    members: [
      {
        name: "Dr. Maxine P. Wilson JP DBA, MBA, LEC, LLB (Hons), CORP, Dip (Mgmt. & Mktg.)",
        role: "General Manager",
      },
    ],
  },
  {
    id: "administration",
    title: "Administration & Support",
    members: [
      { name: "Pasta Watson", role: "HR & Administrative Coordinator" },
      { name: "Sonia Russell", role: "Office Assistant" },
      { name: "Orlando Dunbar", role: "Bearer" },
    ],
  },
  {
    id: "risk-compliance",
    title: "Risk and Compliance",
    members: [
      { name: "Shareen Simpson", role: "Compliance Officer" },
    ],
  },
  {
    id: "member-services",
    title: "Member Services",
    members: [
      { name: "Lilli-Ann Lewin", role: "Lead Member Service Representative" },
      { name: "Marcia Sergeant-Palmer", role: "Member Services Representative" },
      { name: "Damario Thompson", role: "Member Services Representative" },
    ],
  },
  {
    id: "mobay-branch",
    title: "Branch Officers & Support Staff â€” Montego Bay Branch",
    members: [
      { name: "Lamonique James", role: "Branch Supervisor" },
      { name: "Ojani Smith", role: "Member Services Representative" },
      { name: "Shannon Ennis", role: "Cashier / Teller" },
      { name: "Ivylin Smith", role: "Office Attendant" },
    ],
  },
  {
    id: "carib-cement",
    title: "Branch Officers & Support Staff â€” Carib Cement",
    members: [
      { name: "Matthew Thomas", role: "Member Services Representative" },
      { name: "Sybil Cole", role: "Member Service Representative" },
    ],
  },
  {
    id: "board-directors",
    title: "Board of Directors",
    members: [
      { name: "Celay Harwood-Gayle", role: "President" },
      { name: "Robert Thelwell", role: "Vice President" },
      { name: "Margareth Antoine", role: "Treasurer" },
      { name: "Nicola Reid", role: "Asst. Treasurer" },
      { name: "Sheryll Hamilton", role: "Secretary" },
      { name: "Samuel Manning", role: "Director" },
      { name: "Charmaine Heslop-DaCosta", role: "Director" },
    ],
  },
  {
    id: "supervisory-committee",
    title: "Supervisory Committee",
    members: [
      { name: "Wayne Rowe", role: "Chair" },
      { name: "Zonia Foster-Forbes", role: "Secretary" },
      { name: "Donnovan Dobson", role: "Member" },
      { name: "Maria Chen", role: "Member" },
      { name: "Kevin Price", role: "Member" },
    ],
  },
  {
    id: "asset-liability",
    title: "Asset Liability Committee",
    members: [
      { name: "Margareth Antoine", role: "Chair" },
      { name: "Nicola Reid", role: "Vice Chair" },
      { name: "Wayne Rowe", role: "Member" },
      { name: "Samuel Manning", role: "Member" },
      { name: "Carlington Miles", role: "Member" },
    ],
  },
  {
    id: "accounts",
    title: "Accounts",
    members: [
      { name: "Raheim Grant", role: "Senior Accounts Officer" },
      { name: "Kevaughn Roach", role: "Accounts Clerk" },
      { name: "Danielle Powell", role: "Cashier / Teller" },
      { name: "Kwame Daley", role: "Accounts Assistant" },
    ],
  },
  {
    id: "credit-collections",
    title: "Credit & Collections",
    members: [
      { name: "Claudine Purboo", role: "Credit Manager" },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    members: [
      { name: "Nastasscia Oakley", role: "Operations Officer" },
      { name: "Nicholas Johnson", role: "Operations Assistant" },
    ],
  },
  {
    id: "credit-committee",
    title: "Credit Committee",
    members: [
      { name: "Michelle Mais-Cadenhead", role: "Chair" },
      { name: "Letisha Williams", role: "Secretary" },
      { name: "Carlington Miles", role: "Member" },
      { name: "Berthlyn Plummer", role: "Member" },
    ],
  },
  {
    id: "risk-compliance-committee",
    title: "Risk & Compliance Committee",
    members: [
      { name: "Celay Harwood-Gayle", role: "Chair" },
      { name: "Margareth Antoine", role: "Member" },
      { name: "Robert Thelwell", role: "Member" },
      { name: "Maria Chen", role: "Member" },
      { name: "Maxine Wilson", role: "Member" },
    ],
  },
  {
    id: "liaison-officers",
    title: "Liaison Officers",
    members: [
      { name: "Ruby Dillon", role: "IGL" },
      { name: "Karen Lewis", role: "IGL" },
      { name: "Judith Jaggon", role: "Petrojam" },
      { name: "Terry Taylor", role: "Caribbean Maritime University" },
      { name: "Lawanda Brown-Robinson", role: "GB Energy" },
      { name: "Moya Tucker", role: "Goddard Catering" },
      { name: "Michelle Mais-Cadenhead", role: "Airports Authority of Jamaica" },
    ],
  },
];

export const loanProducts = [
  {
    title: "Secured & Unsecured Loans",
    description:
      "Flexible loans for personal, education, medical and emergency needs with competitive interest rates.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Monthly Loan Specials",
    description:
      "Limited-time special offers each month featuring reduced rates and extended repayment terms.",
    icon: "Sparkles",
  },
  {
    title: "Easi Loan Facility",
    description:
      "Our credit-card equivalent revolving facility â€” borrow, repay and re-borrow with ease.",
    icon: "CreditCard",
  },
  {
    title: "Remedial Loans",
    description:
      "Restructure existing obligations to manage your finances confidently and reduce stress.",
    icon: "Repeat",
  },
  {
    title: "Mortgage Financing",
    description:
      "Affordable home financing solutions to help you achieve home ownership.",
    icon: "Home",
  },
  {
    title: "Motor Vehicle Loans",
    description:
      "Drive away your dream car with attractive vehicle financing options for new and used cars.",
    icon: "Car",
  },
];

export const savingsProducts = [
  {
    title: "Fixed Deposits",
    description:
      "Lock in attractive interest rates for guaranteed returns over a fixed term.",
    icon: "Lock",
  },
  {
    title: "Christmas Savings Club",
    description:
      "Save throughout the year and enjoy a stress-free, joy-filled holiday season.",
    icon: "Gift",
  },
  {
    title: "Golden Harvest Savings",
    description:
      "Long-term savings designed to support your retirement and golden years.",
    icon: "Sun",
  },
  {
    title: "SMART PAC Children Savings",
    description:
      "Build a financial foundation for your children with our youth savings programme.",
    icon: "GraduationCap",
  },
];

export const services = [
  { title: "ATM Multi-Link Access", icon: "Banknote" },
  { title: "Direct Salary Deposit", icon: "ArrowDownToLine" },
  { title: "Standing Orders", icon: "CalendarClock" },
  { title: "Bill Payment (Paymaster)", icon: "Receipt" },
  { title: "Financial Counselling", icon: "MessageCircleHeart" },
  { title: "Loan Protection Insurance", icon: "ShieldCheck" },
  { title: "Family Indemnity Plan", icon: "Users" },
  { title: "Critical Illness Plan", icon: "HeartPulse" },
  { title: "Legal Services (Wills)", icon: "Scale" },
];

export const loansPolicy = [
  {
    n: 1,
    text: "Loans shall be made for provident or productive purposes only and in accordance with the rules of the credit union.",
  },
  {
    n: 2,
    text: "Loans are normally granted on a maximum loan to share ratio determined by the Board of Directors from time to time, after six (6) months of membership, except in the following cases:",
    sub: [
      { k: "a", text: "Where the Credit Union is offering Loans Special" },
      { k: "b", text: "Where there are open periods for new members to access loans" },
      { k: "c", text: "Where externally generated funds are used" },
      { k: "d", text: "Transfer of accounts in good standing from other credit unions." },
    ],
  },
  { n: 3, text: "Loans shall not be granted for down payment on Hire Purchase transactions." },
  { n: 4, text: "Loans shall not be granted to delinquent members." },
  {
    n: 5,
    text: "Members who have saved regularly with the Credit Union shall be eligible for loans as follows:",
    sub: [
      { k: "a", text: "Membership up to six (6) months \u2014 within shares and savings. Where applicable (2a\u20132d above), members may borrow in excess of shares and savings at a special loan rate." },
      { k: "b", text: "Membership over six (6) months \u2014 qualification criteria applicable at time of applying for loan." },
    ],
  },
  { n: 6, text: "Fixed Deposits may not be used to qualify for a loan; however, it may be used as collateral." },
  { n: 7, text: "For Premium financing, a deposit to shares representing 10% of premium is required. The Credit Union will finance 100% of the premium, repayable over ten (10) months at a special loan rate." },
  { n: 8, text: "Verification of income and/or employment is required for all loans above shares and savings in the credit union. The Credit Union reserves the right to request additional information." },
  {
    n: 9,
    text: "The maximum repayment period of a loan shall not exceed seven (7) years, except in cases listed below:",
    sub: [
      { k: "a", text: "Loan within shares, deposits, and savings in Palisadoes C.U. \u2014 15 years." },
      { k: "b", text: "Real Estate purchase (and affiliated costs) for member's first home purchase \u2014 Where a member is offering a first (1st) mortgage on property the maximum repayment is thirty (30) years." },
      { k: "c", text: "Where the real estate purchase is not for first home purchase, the maximum repayment period is twenty (20) years." },
      { k: "d", text: "Other loans for which the Credit Union will hold a first mortgage on property \u2014 10 years." },
      { k: "e", text: "Home improvement \u2014 15 years." },
      { k: "f", text: "Loans for motor vehicles 0\u20131 year \u2014 10 years." },
      { k: "g", text: "Loans for motor vehicles 2\u20133 years \u2014 8 years." },
      { k: "h", text: "Loans for motor vehicles 4\u20135 years \u2014 6 years." },
      { k: "i", text: "Loans for motor vehicles 6\u20138 years \u2014 4 years." },
    ],
  },
];

export const securityPolicy = [
  { k: "a", text: "Co-makers are required to have unencumbered (free) shares which will be hypothecated." },
  { k: "b", text: "All items offered as security must be fully insured and the Credit Union must be satisfied as to the arrangements in place for future payments of premium." },
  {
    k: "c",
    text: "Motor vehicles may be used as security, provided that the vehicle will continue to get comprehensive insurance until the loan has expired. The percentages used (except where these vary for Loans Specials) are outlined below:",
    table: [
      { age: "New vehicle", pct: "90%" },
      { age: "1 year", pct: "80%" },
      { age: "2 \u2013 3 years", pct: "75%" },
      { age: "4 years", pct: "70%" },
      { age: "5 years", pct: "60%" },
      { age: "6 years", pct: "55%" },
      { age: "7 \u2013 8 years", pct: "50%" },
    ],
  },
  { k: "d", text: "For mortgage financing, or where a registered title is offered as security, the security must be a first or second (2nd) mortgage on property." },
];

export const approvalLimits = [
  { role: "Credit Manager", limit: "Loans up to $500,000 above shares, deposits, and savings." },
  { role: "General Manager", limit: "Loans up to $1,000,000 above shares, deposits, and savings." },
  { role: "In-house Loans Committee", limit: "Loans up to $3,500,000 above shares, deposits, and savings." },
  { role: "Credit Committee", limit: "All loans." },
];

export const policies = [
  {
    title: "Loans Policy",
    items: loansPolicy.map((item) => item.text),
  },
  {
    title: "Security Policy",
    items: securityPolicy.map((item) => item.text),
  },
  {
    title: "Approval Limits",
    items: approvalLimits.map((item) => `${item.role}: ${item.limit}`),
  },
];

export const productImages = {
  memberService: "/hero_image.png",
  savings: "/hero_image.png",
  payment: "/hero_image.png",
};

export const downloadForms = [
  { category: "Membership", name: "Membership Application Form (Adult)", size: "140 KB", url: formUrl("/forms/membership-application-form-adult.pdf") },
  { category: "Membership", name: "Member Info Update Form", size: "110 KB", url: formUrl("/forms/member-info-update-form.pdf") },
  { category: "Membership", name: "Nomination Form", size: "104 KB", url: formUrl("/forms/nomination-form.pdf") },
  { category: "Loans", name: "Security Loan Application Form", size: "150 KB", url: formUrl("/forms/security-loan-application-form.pdf") },
  { category: "Loans", name: "Unsecured Loan Form", size: "138 KB", url: formUrl("/forms/unsecured-loan-form.pdf") },
  { category: "Loans", name: "Unsecured Loan Package", size: "175 KB", url: formUrl("/forms/unsecured-loan-package.pdf") },
  { category: "Loans", name: "Loan Closure Form", size: "102 KB", url: formUrl("/forms/loan-closure-form.pdf") },
  { category: "Loans", name: "Request for Reduction Form", size: "95 KB", url: formUrl("/forms/request-for-reduction-form.pdf") },
  { category: "Loans", name: "Revised Loans Policy (May 2025)", size: "164 KB", url: formUrl("/forms/revised-loans-policy-may-2025.pdf") },
  { category: "Loans", name: "Motor Vehicle Loan Checklist", size: "140 KB", url: formUrl("/forms/motor-vehicle-loan-checklist.pdf") },
  { category: "Loans", name: "Home Equity-Mortgage Checklist and List of Valuators", size: "280 KB", url: formUrl("/forms/home-equity-mortgage-checklist-valuators.pdf") },
  { category: "Savings", name: "SMART PAC Savings Account for Children", size: "136 KB", url: formUrl("/forms/smart-pac-savings-account-for-children.pdf") },
  { category: "Savings", name: "Pali Partner Plan", size: "382 KB", url: formUrl("/forms/pali-partner-plan.pdf") },
  { category: "Savings", name: "Pali Partner Plan Contract", size: "73 KB", url: formUrl("/forms/pali-partner-plan-contract-fillable.pdf") },
  { category: "Banking & Agreements", name: "Gold Harvest Contractual Agreement", size: "210 KB", url: formUrl("/forms/gold-harvest-contractual-agreement.pdf") },
  { category: "Banking & Agreements", name: "Indemnity Instructions", size: "130 KB", url: formUrl("/forms/indemnity-instructions.pdf") },
  { category: "Banking & Agreements", name: "Irrevocable Order", size: "115 KB", url: formUrl("/forms/irrevocable-order.pdf") },
  { category: "Banking & Agreements", name: "Hypothecation Form", size: "140 KB", url: formUrl("/forms/hypothecation-form.pdf") },
  { category: "Banking & Agreements", name: "Salary Deduction Form", size: "118 KB", url: formUrl("/forms/salary-deduction-form.pdf") },
  { category: "Banking & Agreements", name: "Internet Banking Form", size: "98 KB", url: formUrl("/forms/internet-banking-form.pdf") },
  { category: "Banking & Agreements", name: "Transfer of Funds Form", size: "104 KB", url: formUrl("/forms/transfer-of-funds-form.pdf") },
  { category: "Requests & Other", name: "Request for Letter Form", size: "96 KB", url: formUrl("/forms/request-for-letter-form.pdf") },
  { category: "Requests & Other", name: "Survey Form", size: "108 KB", url: formUrl("/forms/survey-form.pdf") },
  { category: "Requests & Other", name: "Scholarship Award Application", size: "122 KB", url: formUrl("/forms/scholarship-award-application.pdf") },
  { category: "Requests & Other", name: "Guarantor Form", size: "120 KB", url: formUrl("/forms/guarantor-form.pdf") },
];
