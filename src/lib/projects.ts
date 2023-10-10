import { SkillLabel } from "./types";

export const details: {stack: SkillLabel[],  name: string, img: string, color: string, description: string, url: string, github: string}[] = [
  {
    name: "Metronome",
    stack: [
      "react",
      "apis",
      "figma",
      "uiux",
      "libraries",

    ],
    img: "https://res.cloudinary.com/dtnif6mzm/image/upload/c_thumb,w_200,g_face/v1696960052/Portfolio%20-%202024/metronome_vze5gt.png",
    color: "red",
    description:
      "A stock tracking app that allows users to create watchlists and set goals.",
    url: "https://metronomeapp.vercel.app/",
    github: "https://github.com/phildehovre/vite-metronome",
  },
  {
    name: "MyFy",
    stack: [
      "react",
      "apis",
      "firebase",
      "figma",
      "uiux",
      "libraries"
    ],
    img: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1696662890/Portfolio%20-%202024/myfy_phcpmf.jpg",
    color: "red",
    description:
      "A stock tracking app that allows users to create watchlists and set goals.",
    url: "https://myfy-v3.vercel.app/",
    github: "https://github.com/phildehovre/myfi",
  },
  {
    name: "Bedmar Music",
    img: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1696662891/Portfolio%20-%202024/bedmar_yz71mz.jpg",
    color: "green",
    stack: ["react", "css", "html", "figma", "libraries"],
    description:
      "The website to a music management company. This was a very fruitful collaboration as the client was very involved in the design. The website is responsive and pixel-perfect.",
    url: "https://bedmarmusic.co.uk/",
    github: "https://github.com/phildehovre/bedmar-music-def",
  },
  // {
  //   name: "Planoramic",
  //   img: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1696662891/Portfolio%20-%202024/planoramic_ouqoze.jpg",
  //   stack: [
  //     "react",
  //     "supabase",
  //     "typecript",
  //     "apis",
  //     "libraries"
  //   ],
  //   color: "blue",
  //   description:
  //     "A marketing campaign management tool where users create repeatable scalable templates for their campaigns. The app is integrated with the Google Calendar API and allows users to update their calendars and manage tasks in a unified workspace.  ",
  //   url: "https://fiftycal.vercel.app/",
  //   github: "https://github.com/phildehovre/Planoramic",
  // },
  {
    name: "Goodles",
    img: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1696662890/Portfolio%20-%202024/goodles_jjo8ks.jpg",
    color: "yellow",
    stack: ["react", "supabase", "apis", "libraries"],
    description:
      "I engineered a to-do list application seamlessly integrated with the Google Calendar API. This dynamic tool enables users to efficiently update their calendars and manage tasks in a unified workspace",
    url: "https://goodles.vercel.app/",
    github: "https://github.com/phildehovre/goodles",
  },
  {
    name: "Sean Jackson Band",
    img: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1696662891/Portfolio%20-%202024/seanjacksonband_espjbx.jpg",
    color: "yellow",
    stack: ["react", "javascript", "html", "sass", "libraries"],
    description:
      "I rapidly developed a splash page with a contact form to address the band's urgent website issue. Embracing the design brief of 'roadhouse, 50's rock 'n' roll, vintage country,' I meticulously crafted a bespoke logo using Adobe Illustrator to capture their distinct musical essence",
    url: "https://www.seanjacksonofficial.com/",
    github: "https://github.com/phildehovre/seanjacksonband",
  },
];
