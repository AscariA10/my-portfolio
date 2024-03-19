import webStudio from "../public/web-studio.png";
import iceCream from "../public/ice-cream.png";
import filmoteka from "../public/filmoteka.png";
import phonebook from "../public/phonebook.png";
import taskPro from "../public/task-pro.png";
import dokoopy from "../public/dokoopy.png";

import { IcardProps } from "./interfaces/component-int";

// import { technologie } from "./types/techType";

// interface data {
//    title: string;
//    description: string;
//    techStack: Array<technologie>;
//    image: any;
//    githubLink: string;
//    livePage: string;
// }

export const PROJECTS_DATA: Array<IcardProps> = [
   {
      title: "DOKOOPY",
      description:
         "Project, which have been done at Baza Trainee Ukraine, foundrising platform for our 57th Brigade. At this project I was a team-lead and a developer. Special for content update were created and implemented custom admin part. This web-app fully translated for ukrainian and english language.",
      techStack: ["html", "css", "javascript", "react", "sass", "figma", "mongodb", "node", "vite"],
      image: dokoopy,
      githubLink: "https://github.com/AscariA10/dokoopy57",
      livePage: "https://dokoopy57.vercel.app/",
   },
   {
      title: "Task-Pro",
      description:
         "FullStack project, for productivity increasing and scheduling your life. Here user can store tasks in dashboards, and cards. Authentification part were also done, for better UI added refresh token. We use different color theme and dashboard background images for best UX. It is a team-project, I was in role of SCRUM and backend group-lead.",
      techStack: [
         "html",
         "css",
         "javascript",
         "figma",
         "emotion",
         "mongodb",
         "node",
         "rtk",
         "webpack",
      ],
      image: taskPro,
      githubLink: "https://github.com/AscariA10/TaskPro-FrontEnd-Team6",
      livePage: "https://resinner.github.io/TaskPro-FrontEnd-Team6/home",
   },
   {
      title: "Phonebook",
      description:
         "React project to store contacts at custom backend. For state handling were used RTK library, with async requests. Especially for personal use were added authentification part, also added react-router-dom for app navigation. For stylization of components were used emotion library.",
      techStack: ["html", "css", "javascript", "react", "emotion", "figma", "rtk"],
      image: phonebook,
      githubLink: "https://github.com/AscariA10/goit-react-hw-08-phonebook",
      livePage: "https://ascaria10.github.io/goit-react-hw-08-phonebook/",
   },
   {
      title: "Filmoteka",
      description:
         "Application for movie search, with opportunity of making watched movie list, and queue list for future watching. For better perception added nice visual effects. This is also team project, and I was in a team-lead role",
      techStack: ["html", "css", "javascript", "sass", "figma", "webpack"],
      image: filmoteka,
      githubLink: "https://github.com/AscariA10/homeCinemaProject",
      livePage: "https://ascaria10.github.io/homeCinemaProject/index.html",
   },
   {
      title: "Ice-Cream",
      description:
         "Landing page for ice-cream company website with responsive layout and unobtrusive visual effects. First team project, in which i've done my contribution",
      techStack: ["html", "css", "javascript", "sass", "figma", "webpack"],
      image: iceCream,
      githubLink: "https://github.com/AscariA10/ice-cream",
      livePage: "https://nataliamoskv.github.io/ice-cream/main.html",
   },
   {
      title: "WEB-Studio",
      description:
         "Easy 2 page web-site for web-design studio, with gallery of best studio projects. Main accent were done on css effects and semantic markup",
      techStack: ["html", "css", "javascript", "sass", "figma"],
      image: webStudio,
      githubLink: "https://github.com/AscariA10/goit-markup-hw-08",
      livePage: "https://ascaria10.github.io/goit-markup-hw-08/",
   },
];
