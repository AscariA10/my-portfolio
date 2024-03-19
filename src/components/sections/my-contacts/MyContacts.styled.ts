import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const MyContactsContent = styled.div``;

export const ContactsList = styled.ul`
   padding: 24px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 16px;
`;

export const ContactLink = styled.a`
   display: flex;
   align-items: center;
   gap: 12px;
`;

export const ContactItem = styled.li`
   padding-right: 10px;
   @media screen and (min-width: 744px) {
      &:not(:last-child) {
         border-right: 2px solid ${COLORS.ACCENT_DARK};
      }
   }
`;

export const ContactDescription = styled.p`
   font-size: 18px;

   @media screen and (min-width: 744px) {
      font-size: 22px;
   }
`;
