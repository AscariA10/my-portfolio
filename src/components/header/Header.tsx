import { IHeaderProps } from "../../interfaces/component-int.ts";

import { BurgerMenu } from "../../assets/svg-components/BurgerMenu.tsx";

import { Container } from "../common/container/Container.tsx";

import {
   MainHeader,
   HeaderContent,
   Logo,
   BurgerMenuWrapper,
   MenuList,
   MenuItem,
} from "./Header.styled.ts";

export const Header: React.FC<IHeaderProps> = ({ openModal, executeScroll }) => {
   const onClickHandler = (event: any): void => {
      executeScroll(event.target.id);
   };
   return (
      <MainHeader>
         <Container>
            <HeaderContent>
               <Logo>portfolio</Logo>
               <MenuList onClick={onClickHandler}>
                  <MenuItem id="#home">home</MenuItem>
                  <MenuItem id="#about">about</MenuItem>
                  <MenuItem id="#projects">projects</MenuItem>
                  <MenuItem id="#contacts">contacts</MenuItem>
               </MenuList>
               <BurgerMenuWrapper onClick={openModal}>
                  <BurgerMenu />
               </BurgerMenuWrapper>
            </HeaderContent>
         </Container>
      </MainHeader>
   );
};
