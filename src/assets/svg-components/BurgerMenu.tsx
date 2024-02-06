import { IconContainer } from "../../components/common/icon-container/IconContainer";

export const BurgerMenu = () => {
   return (
      <IconContainer
         width={{ mobile: "45px", tablet: "", desktop: "" }}
         height={{ mobile: "45px", tablet: "", desktop: "" }}
      >
         <svg viewBox="0 0 45 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="45" y2="1.5" stroke="#111111" strokeWidth="2" />
            <line y1="13.5" x2="45" y2="13.5" stroke="#111111" strokeWidth="2" />
            <line y1="25.5" x2="45" y2="25.5" stroke="#111111" strokeWidth="2" />
         </svg>
      </IconContainer>
   );
};
