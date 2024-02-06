import { Ibutton } from "../../../interfaces/component-int";

import { ButtonElement } from "./Button.styled";

export const Button: React.FunctionComponent<Ibutton> = ({ title, colorTheme }: Ibutton) => {
   return (
      <ButtonElement type="button" colorTheme={colorTheme}>
         {title}
      </ButtonElement>
   );
};
