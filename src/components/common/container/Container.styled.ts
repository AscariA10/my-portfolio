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
   @media screen and (min-width: 1280px) {
      width: 1280px;
      padding-left: 20px;
      padding-right: 20px;
   }
`;
