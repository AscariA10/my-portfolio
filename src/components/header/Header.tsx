import { BurgerMenu } from "../../assets/svg-components/BurgerMenu.tsx";

import { Container } from "../common/container/Container.tsx";

import { MainHeader, HeaderContent, Logo } from "./Header.styled.ts";

export const Header: React.FC = () => {
   return (
      <MainHeader>
         <Container>
            <HeaderContent>
               <Logo>portfolio</Logo>
               <BurgerMenu />
            </HeaderContent>
         </Container>
      </MainHeader>
   );
};
