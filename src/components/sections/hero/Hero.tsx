import { IHeroProps } from "../../../interfaces/component-int";

import { Section } from "../../common/section/Section";
import { Container } from "../../common/container/Container";
import { Button } from "../../common/button/Button";
import { Name, AboutMe, ButtonList } from "./Hero.styled";

export const Hero: React.FC<IHeroProps> = ({ refProp, executeScroll }) => {
   return (
      <Section>
         <Container>
            <Name ref={refProp}>Kravchenko Volodymyr</Name>
            <AboutMe>
               I am a newly minted Front-End engineer. My goal is to find a company where I can show
               my full potential as a frontend developer. I continue my study every day, to become a
               better specialist
            </AboutMe>
            <ButtonList>
               <li>
                  <Button executeScroll={executeScroll} title="projects" colorTheme="light" />
               </li>
               <li>
                  <Button executeScroll={executeScroll} title="contacts" colorTheme="dark" />
               </li>
            </ButtonList>
         </Container>
      </Section>
   );
};
