import { Icon } from "@iconify/react";

import { technologie } from "../types/techType";

export const technologieDefine = (tech: technologie): JSX.Element => {
   switch (tech) {
      case "html":
         return <Icon icon="vscode-icons:file-type-html" width="70" height="70" />;
      case "css":
         return <Icon icon="vscode-icons:file-type-css" width="70" height="70" />;
      case "javascript":
         return <Icon icon="vscode-icons:file-type-js-official" width="70" height="70" />;
      case "typescript":
         return <Icon icon="vscode-icons:file-type-typescript-official" width="70" height="70" />;
      case "react":
         return <Icon icon="skill-icons:react-dark" width="70" height="70" />;
      case "node":
         return <Icon icon="skill-icons:nodejs-dark" width="70" height="70" />;
      case "vite":
         return <Icon icon="logos:vitejs" width="70" height="70" />;
      case "sass":
         return <Icon icon="skill-icons:sass" width="70" height="70" />;
      case "emotion":
         return <Icon icon="skill-icons:emotion-dark" width="70" height="70" />;
      case "webpack":
         return <Icon icon="devicon:webpack" width="70" height="70" />;
      case "figma":
         return <Icon icon="logos:figma" width="70" height="70" />;
      case "mongodb":
         return <Icon icon="devicon:mongodb" width="70" height="70" />;
      case "rtk":
         return <Icon icon="devicon:redux" width="70" height="70" />;
      default:
         return <Icon icon="vscode-icons:file-type-html" width="70" height="70" />;
   }
};
