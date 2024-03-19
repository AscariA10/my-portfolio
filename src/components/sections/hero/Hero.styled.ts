import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const Name = styled.h1`
   margin-bottom: 36px;
   padding-bottom: 36px;
   text-align: center;
   font-family: Shantell Sans;
   font-size: 48px;
   line-height: 1.3;
   color: ${COLORS.ACCENT};

   border-bottom: 1px solid ${COLORS.ACCENT_DARK};
   @media screen and (min-width: 1024px) {
      margin-bottom: 45px;
      padding-bottom: 45px;
      font-size: 56px;
   }
`;

export const AboutMe = styled.p`
   margin-bottom: 25px;
   text-align: justify;
   @media screen and (min-width: 1024px) {
      margin-bottom: 75px;
   }
`;

export const ButtonList = styled.ul`
   display: flex;
   justify-content: center;
   gap: 60px;
`;
