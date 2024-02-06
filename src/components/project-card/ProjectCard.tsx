import { IcardProps } from "../../interfaces/component-int";
// import { Icon } from "@iconify/react";
import { technologieDefine } from "../../helpers/technologieDefine";

import {
   CardWrapper,
   Thumb,
   Image,
   CardTitle,
   Description,
   StackList,
   StackItem,
   StackDescription,
} from "./ProjectCard.styled";

export const ProjectCard: React.FC<IcardProps> = ({
   image,
   title,
   description,
   techStack = ["html", "css", "js"],
}: IcardProps) => {
   // const technologieDefine = (tech: string): JSX.Element => {
   //    switch (tech) {
   //       case "html":
   //          return <Icon icon="vscode-icons:file-type-html" width="70" height="70" />;
   //          break;
   //       case "css":
   //          return <Icon icon="vscode-icons:file-type-css" width="70" height="70" />;
   //          break;
   //       case "js":
   //          return <Icon icon="vscode-icons:file-type-js-official" width="70" height="70" />;
   //          break;
   //       default:
   //          return <Icon icon="vscode-icons:file-type-html" width="70" height="70" />;
   //    }
   // };

   return (
      <CardWrapper>
         <Thumb>
            <Image src={image} />
         </Thumb>
         <CardTitle>{title}</CardTitle>
         <Description>{description}</Description>
         <StackList>
            {techStack.map(technologie => (
               <StackItem key={technologie}>
                  <StackDescription>
                     {technologieDefine(technologie)}
                     <p>{technologie}</p>
                  </StackDescription>
               </StackItem>
            ))}
         </StackList>
         <a>github</a>
         <a>live page</a>
      </CardWrapper>
   );
};
