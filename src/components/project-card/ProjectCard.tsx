import { Icon } from "@iconify/react";

import { IcardProps } from "../../interfaces/component-int";

import { technologieDefine } from "../../helpers/technologieDefine";

import { technologie } from "../../types/techType";

import {
   CardWrapper,
   Thumb,
   Image,
   CardTitle,
   Description,
   StackList,
   StackItem,
   StackDescription,
   TechTitle,
   LinkList,
   Link,
   LinkDescription,
} from "./ProjectCard.styled";

export const ProjectCard: React.FC<IcardProps> = ({
   orderNumber,
   image,
   title,
   description,
   techStack,
   githubLink,
   livePage,
}: IcardProps) => {
   return (
      <CardWrapper order={orderNumber}>
         <Thumb>
            <Image src={image} />
         </Thumb>
         <CardTitle>{title}</CardTitle>
         <Description>{description}</Description>
         <StackList>
            {techStack.map((tech: technologie) => (
               <StackItem key={tech}>
                  <StackDescription>
                     {technologieDefine(tech)}
                     <TechTitle>{tech}</TechTitle>
                  </StackDescription>
               </StackItem>
            ))}
         </StackList>
         <LinkList>
            <li>
               <Link href={githubLink} target="_blank">
                  <Icon icon="devicon:github" width="28" height="28" />
                  <LinkDescription>github</LinkDescription>
               </Link>
            </li>
            <li>
               <Link href={livePage} target="_blank">
                  <Icon icon="devicon:chrome" width="28" height="28" />
                  <LinkDescription>live page</LinkDescription>
               </Link>
            </li>
         </LinkList>
      </CardWrapper>
   );
};
