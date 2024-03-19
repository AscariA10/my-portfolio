import { Ibutton } from "../../../interfaces/component-int";

import { ButtonElement } from "./Button.styled";

export const Button: React.FunctionComponent<Ibutton> = ({
   title,
   colorTheme,
   executeScroll,
}: Ibutton) => {
   const onClickHandler = (event: any): void => {
      executeScroll(`#${event.currentTarget.innerHTML}`);
   };
   return (
      <ButtonElement onClick={onClickHandler} type="button" colorTheme={colorTheme}>
         {title}
      </ButtonElement>
   );
};
