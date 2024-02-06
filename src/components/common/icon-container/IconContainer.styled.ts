import styled from "@emotion/styled";

import { Iwidth, Iheight } from "../../../interfaces/style-int";

type TOptions = {
   width: Iwidth;
   height: Iheight;
};

export const Container = styled.span<TOptions>`
   display: flex;
   align-items: center;
   justify-content: center;
   width: ${props => props.width.mobile};
   height: ${props => props.height.mobile};
`;
