import { Section } from "../../common/section/Section";
import { Container } from "../../common/container/Container";
import { SectionTitle } from "../../common/sectionTitle/SectionTitle";

import { technologieDefine } from "../../../helpers/technologieDefine";

export const TechStack: React.FC = () => {
   const myTechStack = [
      "html",
      "css",
      "react",
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
            <ul>
               {myTechStack.map(tech => (
                  <li key={tech}>{technologieDefine(tech)}</li>
               ))}
            </ul>
         </Container>
      </Section>
   );
};
