import { IHeaderProps } from "../../interfaces/component-int.ts";

import { BurgerMenu } from "../../assets/svg-components/BurgerMenu.tsx";

import { Container } from "../common/container/Container.tsx";

import { MainHeader, HeaderContent, Logo } from "./Header.styled.ts";

export const Header: React.FC<IHeaderProps> = ({ openModal }) => {
   return (
      <MainHeader>
         <Container>
            <HeaderContent>
               <Logo>portfolio</Logo>
               <p onClick={openModal}>
                  <BurgerMenu />
               </p>
            </HeaderContent>
         </Container>
      </MainHeader>
   );
};
