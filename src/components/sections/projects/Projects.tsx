import { IRefProps } from "../../../interfaces/component-int";

import { PROJECTS_DATA } from "../../../data";

import { Section } from "../../common/section/Section";
import { Container } from "../../common/container/Container";
import { SectionTitle } from "../../common/sectionTitle/SectionTitle";

import { ProjectCard } from "../../project-card/ProjectCard";

// import projectImage from "../../../assets/images/nastol.com.ua-551376.jpg";

import { ProjectsContent } from "./Projects.styled";

export const Projects: React.FC<IRefProps> = ({ refProp }) => {
   return (
      <Section>
         <Container>
            <ProjectsContent ref={refProp}>
               <SectionTitle title="projects" />
               {PROJECTS_DATA.map((project, index) => (
                  <ProjectCard
                     key={index}
                     title={project.title}
                     description={project.description}
                     techStack={project.techStack}
                     image={project.image}
                     githubLink={project.githubLink}
                     livePage={project.livePage}
                  />
               ))}
               {/* <ProjectCard
                  title="1st project"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi, nostrum distinctio expedita adipisci, a fuga architecto reiciendis vel iste quibusdam quam voluptatum! Ea eos doloribus, debitis reiciendis soluta et?"
                  techStack={["html", "css", "javascript", "sass", "figma"]}
                  image={projectImage}
               /> */}
            </ProjectsContent>
         </Container>
      </Section>
   );
};
