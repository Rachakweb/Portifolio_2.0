export const personalDetails = {
  name: "Bhupendra Kumar Ravi",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that matter.",
  about: [
    "I am a full-stack developer with a primary focus on the MERN stack technology.",
    "I have experience working with the WAMP stack and possess hands-on expertise in Kali Linux for ethical hacking and application security.",
    "My diverse skill set enables me to develop robust web applications, ensure data security, and contribute to various stages of the software development lifecycle.",
    "I am committed to continuous learning and applying innovative solutions in my projects.",
  ],
  email: "ravikumar898911@gmail.com",
  phone: "+91-6203-616-807",
  location: "Ranchi, Jharkhand",
  socials: {
    github: "https://github.com/Rachakweb",
    linkedin: "https://www.linkedin.com/in/rakweb",
    twitter: "https://twitter.com", // Not in resume, keeping placeholder or removing if preferred
  },
};

export const skills = [
  "MERN Stack",
  "WAMP Stack",
  "Git-GitHub",
  "Linux",
  "Ethical Hacking",
  "A.I.",
  "Python",
  "Docker",
];

export const projects = [
  {
    id: 1,
    title: "PORTFOLIO GENERATOR WEB",
    description: "A web application that allows users to create and customize professional portfolios easily. With a simple interface and FPDF integration, users can generate polished PDF documents quickly.",
    tech: ["Web Interface", "FPDF"],
    link: "https://github.com/Rachakweb/Portfolio_gen_.git",
  },
  {
    id: 2,
    title: "CRYPTOGRAPHY ENCRYPTION IN MERN",
    description: "This project helps users understand and compare seven encryption techniques through a web interface. It demonstrates how different algorithms secure data.",
    tech: ["MERN Stack", "Cryptography"],
    link: "https://github.com/Rachakweb/Cryptography.git",
  },
  {
    id: 3,
    title: "Crypto Exchange Suite",
    description: "A decentralized platform that allows users to experience Ethereum wallet transactions and simulate crypto trading. Designed for educational purposes.",
    tech: ["Blockchain", "Ethereum", "DeFi"],
    link: "#", // Link not explicitly in resume text for this one, assuming generic or needs lookup
  },
];

export const academic = [
  {
    id: 1,
    degree: "Master's Degree in Computer Application",
    institution: "Amity University",
    year: "2023 - 2025",
    description: "",
  },
  {
    id: 2,
    degree: "Bachelor's Degree in Computer Application",
    institution: "Ranchi University",
    year: "2020 - 2023",
    description: "",
  },
];

export const experience = [
  {
    id: 1,
    role: "Operation Manager Intern",
    company: "ICCC",
    period: "2026",
    description: "Managed operations and coordinated team activities.",
  },
  {
    id: 2,
    role: "Cybersecurity Intern",
    company: "UP Police",
    period: "2025",
    description: "Worked on cybersecurity initiatives and threat analysis.",
  },
  {
    id: 3,
    role: "React developer",
    company: "RICI Tech",
    period: "2023-24",
    description: "Developed and maintained user interfaces using React.",
  },
];



export const htbBadges = [
  {
    id: 1,
    name: "HTB Academy Achievement",
    image: "/htb-logo.png",
    rank: "Badge",
    link: "https://academy.hackthebox.com/achievement/badge/7e2b7af3-7e5b-11f0-9254-bea50ffe6cb4",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Certified MERN Stack Developer",
    issuer: "Board Infinity",
    date: "April 18, 2023",
    image: "/certificates/board_infinity_fsd.jpg",
  },
  {
    id: 2,
    title: "Ethical Hacking Masterclass",
    issuer: "Infosys Springboard",
    date: "June 30, 2025",
    image: "/certificates/infosys_eh.jpg", // Corrected mapping based on likely file names infosys_eh.jpg
  },
  {
    id: 3,
    title: "Cyber Security Internship",
    issuer: "Amroha Police Cyber Cell",
    date: "June 2025",
    image: "/certificates/up_police_cs.jpg", // Corrected mapping up_police_cs.jpg
  },
  {
    id: 4,
    title: "Certified CRPO",
    issuer: "EU Cyber Academy",
    date: "December 09, 2025",
    image: "/certificates/eu_cyber_academy_crpo.jpg",
  },
];

export const cvLink = "/resume.jpg";
