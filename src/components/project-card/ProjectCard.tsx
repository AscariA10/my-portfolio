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
   Link,
   LinkDescription,
} from "./ProjectCard.styled";

export const ProjectCard: React.FC<IcardProps> = ({
   image,
   title,
   description,
   techStack,
}: IcardProps) => {
   return (
      <CardWrapper>
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
         <Link>
            <Icon icon="devicon:github" width="32" height="32" />
            <LinkDescription>github</LinkDescription>
         </Link>
         <Link>
            <Icon icon="devicon:chrome" width="32" height="32" />
            <LinkDescription>live page</LinkDescription>
         </Link>
      </CardWrapper>
   );
};
