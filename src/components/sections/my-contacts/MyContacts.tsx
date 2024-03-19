import { IRefProps } from "../../../interfaces/component-int";

import { Icon } from "@iconify/react";

import { Section } from "../../common/section/Section";
import { Container } from "../../common/container/Container";
import { SectionTitle } from "../../common/sectionTitle/SectionTitle";

import {
   MyContactsContent,
   ContactsList,
   ContactItem,
   ContactLink,
   ContactDescription,
} from "./MyContacts.styled";

export const MyContacts: React.FC<IRefProps> = ({ refProp }) => {
   return (
      <Section>
         <Container>
            <MyContactsContent ref={refProp}>
               <SectionTitle title="my contacts" />
               <ContactsList>
                  <ContactItem>
                     <ContactLink target="_blank" href="tel:+380671749543">
                        <Icon icon="bi:phone" width="24" height="24" />
                        <ContactDescription>phone</ContactDescription>
                     </ContactLink>
                  </ContactItem>
                  <ContactItem>
                     <ContactLink target="_blank" href="https://t.me/AscariA10">
                        <Icon icon="basil:telegram-outline" width="24" height="24" />
                        <ContactDescription>telegram</ContactDescription>
                     </ContactLink>
                  </ContactItem>
                  <ContactItem>
                     <ContactLink
                        target="_blank"
                        href="https://www.linkedin.com/in/volodymyr-kravchenko/"
                     >
                        <Icon icon="mdi:linkedin" width="24" height="24" />
                        <ContactDescription>linkedin</ContactDescription>
                     </ContactLink>
                  </ContactItem>
                  <ContactItem>
                     <ContactLink target="_blank" href="https://github.com/AscariA10">
                        <Icon icon="devicon:github" width="24" height="24" />
                        <ContactDescription>github</ContactDescription>
                     </ContactLink>
                  </ContactItem>
                  <ContactItem>
                     <ContactLink target="_blank" href="mailto:w.kravchenko1992@gmail.com">
                        <Icon icon="oui:email" width="24" height="24" />
                        <ContactDescription>E-mail</ContactDescription>
                     </ContactLink>
                  </ContactItem>
               </ContactsList>
            </MyContactsContent>
         </Container>
      </Section>
   );
};
