import { Icon } from "@iconify/react";

import { Section } from "../../common/section/Section";
import { Container } from "../../common/container/Container";
import { SectionTitle } from "../../common/sectionTitle/SectionTitle";

import {
   MyContactsContent,
   ContactsList,
   ContactLink,
   ContactDescription,
} from "./MyContacts.styled";

export const MyContacts: React.FC = () => {
   return (
      <Section>
         <Container>
            <MyContactsContent>
               <SectionTitle title="my contacts" />
               <ContactsList>
                  <li>
                     <ContactLink href="tel:+380671749543">
                        <Icon icon="bi:phone" width="24" height="24" />
                        <ContactDescription>phone</ContactDescription>
                     </ContactLink>
                  </li>
                  <li>
                     <ContactLink href="https://t.me/AscariA10">
                        <Icon icon="basil:telegram-outline" width="24" height="24" />
                        <ContactDescription>telegram</ContactDescription>
                     </ContactLink>
                  </li>
                  <li>
                     <ContactLink href="https://www.linkedin.com/in/volodymyr-kravchenko/">
                        <Icon icon="mdi:linkedin" width="24" height="24" />
                        <ContactDescription>linkedin</ContactDescription>
                     </ContactLink>
                  </li>
                  <li>
                     <ContactLink href="https://github.com/AscariA10">
                        <Icon icon="devicon:github" width="24" height="24" />
                        <ContactDescription>github</ContactDescription>
                     </ContactLink>
                  </li>
                  <li>
                     <ContactLink href="mailto:w.kravchenko1992@gmail.com">
                        <Icon icon="oui:email" width="24" height="24" />
                        <ContactDescription>E-mail</ContactDescription>
                     </ContactLink>
                  </li>
               </ContactsList>
            </MyContactsContent>
         </Container>
      </Section>
   );
};
