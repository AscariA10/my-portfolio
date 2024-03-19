import { Iheight, Iwidth } from "./style-int";
import { technologie } from "../types/techType";

export interface IChildrenProp {
   children: React.ReactNode;
}

export interface IRefProps {
   refProp: any;
}

export interface IHeroProps extends IRefProps {
   executeScroll: (elementId: string) => void;
}

export interface IHeaderProps {
   openModal: () => void;
   executeScroll: (elementId: string) => void;
}

export interface IModalProps {
   closeModal: () => void;
   executeScroll: (elementId: string) => void;
}

export interface Ititle {
   title: string;
}

export interface Ibutton {
   title: string;
   colorTheme: string;
   executeScroll: (event: any) => void;
}

export interface IsizeProps extends IChildrenProp {
   width: Iwidth;
   height: Iheight;
}

export interface IcardProps {
   orderNumber?: any;
   title: string;
   description: string;
   image: string;
   techStack: Array<technologie>;
   githubLink: string;
   livePage: string;
}

// export interface IsectionTitle {
//    title: string;
// }

// export interface IvalueCard extends IcommonProps {
//    title: string;
//    description: string;
// }
