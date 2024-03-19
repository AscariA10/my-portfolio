import { useState, useRef } from "react";

import { Header } from "./components/header/Header";
import { Hero } from "./components/sections/hero/Hero";
import { TechStack } from "./components/sections/tech-stack/TechStack";
import { Projects } from "./components/sections/projects/Projects";
import { MyContacts } from "./components/sections/my-contacts/MyContacts";
import { Footer } from "./components/footer/Footer";
import { MobileMenu } from "./components/mobile-menu/MobileMenu";

function App() {
   const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

   const aboutRef = useRef<HTMLElement>(null);
   const projectRef = useRef<HTMLElement>(null);
   const contactsRef = useRef<HTMLElement>(null);

   const executeScroll = (elementId: string): any => {
      switch (elementId) {
         case "#home": {
            closeModalHandler();
            break;
         }
         case "#about": {
            aboutRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            break;
         }
         case "#projects": {
            projectRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            break;
         }
         case "#contacts": {
            contactsRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            break;
         }
         default: {
            closeModalHandler();
            break;
         }
      }

      closeModalHandler();
   };

   const openModalHandler = () => {
      setIsOpenModal(true);
   };

   const closeModalHandler = () => {
      setIsOpenModal(false);
   };

   return (
      <>
         <Header openModal={openModalHandler} />
         <Hero refProp={aboutRef} />
         <TechStack />
         <Projects refProp={projectRef} />
         <MyContacts refProp={contactsRef} />
         <Footer />
         {isOpenModal ? (
            <MobileMenu closeModal={closeModalHandler} executeScroll={executeScroll} />
         ) : null}
      </>
   );
}

export default App;
