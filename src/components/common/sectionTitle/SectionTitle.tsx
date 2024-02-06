import { Ititle } from "../../../interfaces/component-int";
import { Title } from "./SectionTitle.styled";

export const SectionTitle: React.FC<Ititle> = ({ title }: Ititle) => {
   return <Title>{title}</Title>;
};
