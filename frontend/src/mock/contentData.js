export const fallbackGallery = [];

const formUrl = (path) => `${process.env.PUBLIC_URL || ""}${path}`;

// Annual reports — replace `url` with the real PDF when ready.
export const annualReports = [
  {
    year: "2024",
    title: "Annual Report 2024",
    highlight: "Record member growth and digital expansion",
    pages: 48,
    url: formUrl("/forms/revised-loans-policy-may-2025.pdf"),
  },
  {
    year: "2023",
    title: "Annual Report 2023",
    highlight: "Strong loan portfolio performance",
    pages: 42,
    url: formUrl("/forms/revised-loans-policy-may-2025.pdf"),
  },
  {
    year: "2022",
    title: "Annual Report 2022",
    highlight: "Post-pandemic recovery & member support",
    pages: 40,
    url: formUrl("/forms/revised-loans-policy-may-2025.pdf"),
  },
  {
    year: "2021",
    title: "Annual Report 2021",
    highlight: "Resilience through challenging times",
    pages: 38,
    url: formUrl("/forms/revised-loans-policy-may-2025.pdf"),
  },
];
