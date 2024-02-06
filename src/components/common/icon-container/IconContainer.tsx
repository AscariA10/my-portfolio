import { IsizeProps } from "../../../interfaces/component-int";

import { Container } from "./IconContainer.styled";

export const IconContainer: React.FC<IsizeProps> = ({ children, width, height }: IsizeProps) => {
   return (
      <Container width={width} height={height}>
         {children}
      </Container>
   );
};
