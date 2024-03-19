import styled from "@emotion/styled";
// import { COLORS } from "../../../styles/colors/colors";

export const TechnologieList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   gap: 24px;

   padding: 24px;
   @media screen and (min-width: 1024px) {
      padding: 40px;
   }
`;
