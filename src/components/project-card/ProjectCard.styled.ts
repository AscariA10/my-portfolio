import styled from "@emotion/styled";
// import { COLORS } from "../../styles/colors/colors";

export const CardWrapper = styled.div`
   padding: 24px;
   display: flex;
   flex-direction: column;

   align-items: center;
   gap: 12px;
`;

export const Thumb = styled.div`
   width: 100%;
   height: 374px;
`;

export const Image = styled.img`
   display: block;
   height: 100%;
   width: 100%;
   object-fit: cover;
`;

export const CardTitle = styled.h3`
   font-size: 30px;
   font-weight: 900;
   text-transform: lowercase;
`;

export const Description = styled.p`
   text-align: center;
`;

export const StackList = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   gap: 16px;
   width: 100%;
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

export const Link = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 6px;
`;

export const LinkDescription = styled.p`
   margin-left: 12px;
`;
