import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors/colors";

export const Name = styled.h1`
   margin-bottom: 36px;
   padding-bottom: 36px;
   text-align: center;
   font-family: Shantell Sans;
   font-size: 48px;
   line-height: 1.3;
   color: ${COLORS.ACCENT};

   border-bottom: 1px solid ${COLORS.ACCENT_DARK};
`;

export const AboutMe = styled.p`
   margin-bottom: 25px;
   text-align: justify;
`;
