import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Wrapper = styled.div`
   position: absolute;

   top: 0;
   left: 0;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   min-height: 370px;
   height: 95%;
   width: 90%;

   background-color: ${COLORS.MENU_BACK_LIGHT};
`;

export const CloseWrapper = styled.p`
   display: block;
   width: 42px;
   margin-left: auto;
   margin-bottom: 12px;
`;

export const MenuContent = styled.nav`
   padding: 20px;
`;

export const MenuList = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 40px;
   align-items: center;
`;

export const MenuItem = styled.li`
   font-size: 30px;
   text-transform: capitalize;
`;
