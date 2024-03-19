import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const MainHeader = styled.header`
   position: relative;

   padding-top: 36px;
   padding-bottom: 36px;
   @media screen and (min-width: 1024px) {
      padding-top: 42px;
      padding-bottom: 42px;
   }
`;

export const HeaderContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media screen and (min-width: 1024px) {
      justify-content: space-around;
   }
`;

export const Logo = styled.p`
   color: ${COLORS.ACCENT};
   font-family: Shantell Sans;
   font-size: 32px;
   text-transform: uppercase;
   font-weight: 700;
   @media screen and (min-width: 1024px) {
      font-size: 48px;
   }
`;

export const BurgerMenuWrapper = styled.p`
   @media screen and (min-width: 1024px) {
      display: none;
   }
`;

export const MenuList = styled.ul`
   display: none;
   @media screen and (min-width: 1024px) {
      display: flex;

      gap: 40px;
      align-items: center;
   }
`;

export const MenuItem = styled.li`
   font-size: 24px;
   text-transform: capitalize;
   &:hover {
      cursor: pointer;
   }
`;
