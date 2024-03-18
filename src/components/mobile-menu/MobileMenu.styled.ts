import styled from "@emotion/styled";
// import { COLORS } from "../../styles/colors";

export const Wrapper = styled.div`
   margin-left: auto;
   margin-right: auto;
   height: 90vh;
   width: 80vh;

   border: 1px dashed red;
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
