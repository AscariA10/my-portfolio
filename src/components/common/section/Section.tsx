import { IChildrenProp } from "../../../interfaces/component-int";
import { Wrapper } from "./Section.styled";

export const Section: React.FC<IChildrenProp> = ({ children }) => {
   return <Wrapper>{children}</Wrapper>;
};
