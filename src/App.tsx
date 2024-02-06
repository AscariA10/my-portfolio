import { Header } from "./components/header/Header";
import { Hero } from "./components/sections/hero/Hero";
import { TechStack } from "./components/sections/tech-stack/TechStack";
import { Projects } from "./components/sections/projects/Projects";

function App() {
   return (
      <>
         <Header />
         <Hero />
         <TechStack />
         <Projects />
      </>
   );
}

export default App;
