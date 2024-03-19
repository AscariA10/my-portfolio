import { Icon } from "@iconify/react";
import { IModalProps } from "../../interfaces/component-int";

import { Wrapper, CloseWrapper, MenuContent, MenuList, MenuItem } from "./MobileMenu.styled";

export const MobileMenu: React.FC<IModalProps> = ({ closeModal, executeScroll }) => {
   const onClickHandler = (event: any): void => {
      executeScroll(event.target.id);
   };

   return (
      <Wrapper>
         <MenuContent>
            <CloseWrapper onClick={closeModal}>
               <Icon icon="zondicons:close-outline" width="40" height="40" />
            </CloseWrapper>
            <MenuList onClick={onClickHandler}>
               <MenuItem id="#home">home</MenuItem>
               <MenuItem id="#about">about</MenuItem>
               <MenuItem id="#projects">projects</MenuItem>
               <MenuItem id="#contacts">contacts</MenuItem>
            </MenuList>
         </MenuContent>
      </Wrapper>
   );
};
