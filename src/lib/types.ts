import {  IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    // {
    //   name: "Experience",
    //   hash: "#experience",
    // },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export type SectionName = (typeof links)[number]["name"];

  export type experienceDataType = {
    company: string;
    position: string;
    date: string;
    description: string;
    icon: IconDefinition;
  
  }

  export type SkillLabel = "libraries" 
  |"reactQuery" 
  | "html" 
  | "chartjs" 
  |"javascript" 
  | "typecript" 
  | "css" 
  | "sass" 
  | "tailwind" 
  | "git" 
  | "react" 
  | "nextjs" 
  | "apis" 
  | "illustrator" 
  | "figma" 
  | "uiux" 
  | "npm" 
  | "gsap" 
  | "baas" 
  | "firebase" 
  | "supabase"
  | "django" 
  |"python" 
  | "permissions" 
  | "postgres" 
  | "sql" 
  | "aws" 
  | "nodejs"
  | "express"
  ;

  export interface Skill {
    label: SkillLabel;
    name: string;
    category: string;
    color: string;
  }