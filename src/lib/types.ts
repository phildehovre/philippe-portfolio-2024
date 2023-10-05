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
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Experience",
      hash: "#experience",
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