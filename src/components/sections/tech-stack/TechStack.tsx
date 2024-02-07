import { technologieDefine } from "../../../helpers/technologieDefine";

import { technologie } from "../../../types/techType";

import { Section } from "../../common/section/Section";
import { Container } from "../../common/container/Container";
import { SectionTitle } from "../../common/sectionTitle/SectionTitle";

import { TechnologieList } from "./TechStack.styled";

export const TechStack: React.FC = () => {
   const myTechStack: Array<technologie> = [
      "html",
      "css",
      "react",
      "rtk",
      "javascript",
      "typescript",
      "vite",
      "node",
      "sass",
      "emotion",
      "webpack",
      "figma",
      "mongodb",
   ];
   return (
      <Section>
         <Container>
            <SectionTitle title="Technologie Stack" />
            <TechnologieList>
               {myTechStack.map(tech => (
                  <li key={tech}>{technologieDefine(tech)}</li>
               ))}
            </TechnologieList>
         </Container>
      </Section>
   );
};
