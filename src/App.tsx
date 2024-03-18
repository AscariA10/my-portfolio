import { Header } from "./components/header/Header";
import { Hero } from "./components/sections/hero/Hero";
import { TechStack } from "./components/sections/tech-stack/TechStack";
import { Projects } from "./components/sections/projects/Projects";
import { MyContacts } from "./components/sections/my-contacts/MyContacts";
import { Footer } from "./components/footer/Footer";
import { MobileMenu } from "./components/mobile-menu/MobileMenu";

function App() {
   return (
      <>
         <Header />
         <Hero />
         <TechStack />
         <Projects />
         <MyContacts />
         <Footer />
         <MobileMenu />
      </>
   );
}

export default App;
