import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

interface cardWrapper {
   order: number;
}

export const CardWrapper = styled.div<cardWrapper>`
   padding: 24px;
   display: flex;
   flex-direction: column;

   align-items: center;
   gap: 12px;

   background-color: ${props =>
      props.order % 2 === 0 ? COLORS.CARD_BACK_LIGHT : COLORS.CARD_BACK_DARK};
   @media screen and (min-width: 1024px) {
      justify-content: center;
      gap: 30px;

      padding: 12px 12px 40px;
      width: 446px;

      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      background-color: ${COLORS.CARD_BACK_LIGHT};
   }
`;

export const Thumb = styled.div`
   width: 100%;
   max-height: 350px;
   overflow-y: scroll;
   @media screen and (min-width: 1024px) {
      overflow-y: auto;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   }
`;

export const Image = styled.img`
   display: block;

   width: 100%;
   object-fit: cover;
`;

export const CardTitle = styled.h3`
   width: auto;
   font-size: 30px;
   font-weight: 900;
   border-bottom: 2px solid black;

   @media screen and (min-width: 744px) {
      font-size: 34px;
   }
   @media screen and (min-width: 1024px) {
      font-size: 30px;
   }
`;

export const Description = styled.p`
   text-align: center;
   @media screen and (min-width: 1024px) {
      font-size: 21px;
   }
`;

export const StackList = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   gap: 16px;
   width: 100%;

   margin-bottom: 20px;
`;

export const StackItem = styled.li`
   width: 80px;
`;

export const StackDescription = styled.div`
   display: flex;
   align-items: center;

   flex-direction: column;
`;

export const TechTitle = styled.p`
   display: block;
   margin-top: 12px;
   font-size: 14px;
   text-transform: uppercase;
   font-weight: 500;
`;

export const LinkList = styled.ul`
   display: flex;
   width: 80%;
   justify-content: space-between;

   @media screen and (min-width: 744px) {
      justify-content: center;
      gap: 30px;
   }
   @media screen and (min-width: 1024px) {
      margin-top: auto;
   }
`;

export const Link = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 6px;
`;

export const LinkDescription = styled.p`
   margin-left: 12px;
   font-size: 16px;
   @media screen and (min-width: 744px) {
      font-size: 20px;
   }
`;
