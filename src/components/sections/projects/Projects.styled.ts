import styled from "@emotion/styled";

export const ProjectsContent = styled.div`
   display: flex;
   flex-direction: column;
`;
export const ProjectsList = styled.ul`
   @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 50px;
      justify-content: center;
   }
`;
