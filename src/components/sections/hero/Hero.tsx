import { IRefProps } from "../../../interfaces/component-int";

import { Section } from "../../common/section/Section";
import { Container } from "../../common/container/Container";
import { Button } from "../../common/button/Button";
import { Name, AboutMe } from "./Hero.styled";

export const Hero: React.FC<IRefProps> = ({ refProp }) => {
   return (
      <Section>
         <Container>
            <Name ref={refProp}>Kravchenko Volodymyr</Name>
            <AboutMe>
               I am a newly minted Front-End engineer. My goal is to find a company where I can show
               my full potential as a frontend developer. I continue my study every day, to become a
               better specialist
            </AboutMe>
            <Button title="projects" colorTheme="light" />
            <Button title="contacts" colorTheme="dark" />
         </Container>
      </Section>
   );
};
