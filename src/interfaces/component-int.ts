import { Iheight, Iwidth } from "./style-int";

export interface IChildrenProp {
   children: React.ReactNode;
}

export interface Ititle {
   title: string;
}

export interface Ibutton {
   title: string;
   colorTheme: string;
}

export interface IsizeProps extends IChildrenProp {
   width: Iwidth;
   height: Iheight;
}

export interface IcardProps {
   title: string;
   description: string;
   image: string;
   techStack: string[];
}

// export interface IsectionTitle {
//    title: string;
// }

// export interface IvalueCard extends IcommonProps {
//    title: string;
//    description: string;
// }
