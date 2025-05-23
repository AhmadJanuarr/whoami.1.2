export interface ExperienceItem {
  company: string
  period: string
  role: string
  description: string[]
}
export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    company: "PT Sema Information Technology Services",
    period: "2023 - 2024",
    role: "Freelance Projects",
    description: [
      "Language Translation: Collaborating with professional translation teams to deliver high-quality multilingual content.",
      "TTS (Text-to-Speech) Quality Control: Leading a team of 160 labeling staff and 20 auditors, maintaining 95%+ accuracy rates in speech synthesis projects.",
    ],
  },
  {
    company: "Dinas Perhubungan Kota Bandar Lampung",
    period: "2022 - 2023",
    role: "Student Intern",
    description: [
      "Prepare daily and monthly employee attendance reports accurately and on time and Process non-PNS education personnel data using Microsoft Excel.",
      "Update office computer operating systems using Windows 10, Verify ASN registration data through an online system and Prepare goods integrity pacts based on standard formats.",
    ],
  },
]
