import { Icon } from "@iconify/react";
import { Wrapper, CloseWrapper, MenuContent, MenuList, MenuItem } from "./MobileMenu.styled";

export const MobileMenu: React.FC = () => {
   return (
      <Wrapper>
         <MenuContent>
            <CloseWrapper>
               <Icon icon="zondicons:close-outline" width="40" height="40" />
            </CloseWrapper>
            <MenuList>
               <MenuItem>home</MenuItem>
               <MenuItem>about</MenuItem>
               <MenuItem>projects</MenuItem>
               <MenuItem>contacts</MenuItem>
            </MenuList>
         </MenuContent>
      </Wrapper>
   );
};
