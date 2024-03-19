import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

type TOptions = {
   colorTheme: string;
};

export const ButtonElement = styled.button<TOptions>`
   display: block;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 25px;

   min-width: 200px;
   min-height: 50px;

   text-transform: capitalize;

   color: ${props => (props.colorTheme === "light" ? COLORS.ACCENT : COLORS.BUTTON_FONT_DARK)};
   background-color: ${props =>
      props.colorTheme === "light" ? COLORS.BUTTON_BACK_LIGHT : COLORS.ACCENT};
   border: 2px solid ${COLORS.ACCENT};
   border-radius: 25px;

   &:hover {
      cursor: pointer;
   }
`;
