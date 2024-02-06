import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors/colors";

export const MainHeader = styled.header`
   padding-top: 36px;
   padding-bottom: 36px;
`;

export const HeaderContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const Logo = styled.p`
   color: ${COLORS.ACCENT};
   font-family: Shantell Sans;
   font-size: 32px;
   text-transform: uppercase;
   font-weight: 700;
`;
