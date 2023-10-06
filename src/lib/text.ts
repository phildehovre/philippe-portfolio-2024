import { faGraduationCap, faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { experienceDataType } from "./types";
import {FaAddressBook} from 'react-icons/fa'

export const welcomeText = [
  "bonjour",
  "hallo",
  "merhaba",
  "سلام",
  "γειά σας",
  "hallo",
  "你好",
  "ciao",
  "hola",
  "こんにちは",
  "hej",
  "hej",
  "สวัสดี",
  "olá",
  "cześć",
  "salut",
  "привет",
  "שלום",
  "bonjour",
  "Hello!",
  "hallo",
  "merhaba",
  "سلام",
  "γειά σας",
  "hallo",
  "你好",
  "ciao",
  "hola",
  "こんにちは",
  "hej",
  "hej",
  "สวัสดี",
  "olá",
  "cześć",
  "salut",
  "привет",
  "שלום",
];

export const myNameIsText = [
  "my name is",
  "mon nom est",
  "mijn naam is",
  "benim adım",
  "اسم من هو",
  "το όνομά μου είναι",
  "mein Name ist",
  "我的名字是",
  "il mio nome è",
  "mi nombre es",
  "私の名前は",
  "mitt namn är",
  "mitt navn er",
  "ชื่อของฉันคือ",
  "meu nome é",
  "moje imię to",
  "numele meu este",
  "Меня зовут",
  "שמי הוא",
  "my name is",
  "mon nom est",
  "mijn naam is",
  "benim adım",
  "اسم من هو",
  "το όνομά μου είναι",
  "mein Name ist",
  "我的名字是",
  "il mio nome è",
  "mi nombre es",
  "私の名前は",
  "mitt namn är",
  "mitt navn er",
  "ชื่อของฉันคือ",
  "meu nome é",
  "moje imię to",
  "numele meu este",
  "Меня зовут",
  "my name is",
  "שמי הוא",
];

export const aboutMeText = `As a musician turned developer, I've embraced the world of programming, creating applications, and websites. My coding journey began during the lockdowns in 2020, and I've since tackled diverse projects, demonstrating a can-do attitude and a passion for clean code.
\n

My multilingual skills, including native proficiency in French and English, are assets that enable effective communication in diverse teams.
\n
I'm excited about opportunities to contribute my skills and enthusiasm to innovative organizations, such as Itransition, Civica, and Acurable, and I look forward to discussing how I can make a meaningful impact on your team.`;


export const skills = [
  'Javascript ES6','Typescript', 'CSS', 'Sass', 'Tailwind', 'Git',  'React', 'Next.js', 'RESTful', 'Adobe Illustrator', 'Figma', 'Package Managers', 'BaaS (Firebase, Supabase)'
]

export const skillsObject = [
  {
    "name": "Javascript ES6",
    "category": "Programming Languages",
    "color": "red"
  },
  {
    "name": "Typescript",
    "category": "Programming Languages",
    "color": "red"
  },
  {
    "name": "CSS",
    "category": "CSS Preprocessors",
    "color": "coral"
  },
  {
    "name": "Sass",
    "category": "CSS Preprocessors",
    "color": "coral"
  },
  {
    "name": "Tailwind",
    "category": "CSS Frameworks",
    "color": "coral"
  },
  {
    "name": "Git",
    "category": "Version Control",
    "color": "gray"
  },
  {
    "name": "React",
    "category": "Front-end Frameworks",
    "color": "cyan"
  },
  {
    "name": "Next.js",
    "category": "Front-end Frameworks",
    "color": "cyan"
  },
  {
    "name": "RESTful",
    "category": "APIs & Services",
    "color": "green"
  },
  {
    "name": "Adobe Illustrator",
    "category": "Design Software",
    "color": "orange"
  },
  {
    "name": "Figma",
    "category": "Design Software",
    "color": "orange"
  },
  {
    "name": "UI/UX",
    "category": "Design Discipline",
    "color": "dodgerBlue"
  },
  {
    "name": "Package Managers",
    "category": "Development Tools",
    "color": "dodgerBlue"
  },
  {
    "name": "GSAP",
    "category": "Development Tools",
    "color": "dodgerBlue"
  },
  {
    "name": "BaaS (Firebase, Supabase)",
    "category": "Backend as a Service",
    "color": "violet"
  }
]


export const experienceData: experienceDataType[] = [
  {
    position: "Intern Front-End Developer",
    company: "Setmixer",
    date: "Feb 2022 - May 2022",
    description: "Setmixer is a music tech startup that helps musicians and band record their live shows. I worked on the front-end of the web application, using React and Tailwind.",
    icon: faGraduationCap
  },
  {
    position: "Freelace Web Developer",
    company: "Self-employed",
    date: "Feb 2022 - May 2022",
    description: "Apart from consistently updating and re-designing my own website, I have also worked on a few freelance projects. I have worked on a few websites for musicians, using React and Tailwind. I have also worked on a few websites for small businesses.",
    icon: faGraduationCap
  },
  {
    position: "Freelance Web Deveoper",
    company: "Self-employed",
    date: "Feb 2022 - May 2022",
    description: "Apart from consistently updating and re-designing my own website, I have also worked on a few freelance projects. I have worked on a few websites for musicians, using React and Tailwind. I have also worked on a few websites for small businesses.",
    icon: faGraduationCap
  },
  {
    position: "Freelnce Web Developer",
    company: "Self-employed",
    date: "Feb 2022 - May 2022",
    description: "Apart from consistently updating and re-designing my own website, I have also worked on a few freelance projects. I have worked on a few websites for musicians, using React and Tailwind. I have also worked on a few websites for small businesses.",
    icon: faGraduationCap
  },
]

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(FaAddressBook),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(FaAddressBook),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaAddressBook),
    date: "2021 - present",
  },
] as const;

export const aboutMe = {title: 'About me', content: `As a musician turned developer, I've embraced the world of programming, creating applications, and websites. My coding journey began during the lockdowns in 2020, and I've since tackled diverse projects, demonstrating a can-do attitude and a passion for clean code.
\n

My multilingual skills, including native proficiency in French and English, are assets that enable effective communication in diverse teams.
\n
I'm excited about opportunities to contribute my skills and enthusiasm to innovative organizations, such as Itransition, Civica, and Acurable, and I look forward to discussing how I can make a meaningful impact on your team.`
}