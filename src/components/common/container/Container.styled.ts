import styled from "@emotion/styled";

export const Wrapper = styled.div`
   margin-left: auto;
   margin-right: auto;
   padding-left: 24px;
   padding-right: 24px;

   @media screen and (min-width: 480px) {
      width: 480px;
   }

   @media screen and (min-width: 768px) {
      width: 768px;
      padding-left: 30px;
      padding-right: 30px;
   }
   @media screen and (min-width: 1024px) {
      width: 1024px;
      padding-left: 40px;
      padding-right: 40px;
   }
`;
