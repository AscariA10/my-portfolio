import { IChildrenProp } from "../../../interfaces/component-int.ts";
import { Wrapper } from "./Container.styled";

export const Container: React.FC<IChildrenProp> = ({ children }: IChildrenProp) => {
   return <Wrapper>{children}</Wrapper>;
};
