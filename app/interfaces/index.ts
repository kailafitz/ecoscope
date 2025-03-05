import { ReactNode } from "react";

export interface HeadingsProps {
    mb?: boolean;
    subtitle?: string;
    left?: boolean;
    className?: string;
    children: ReactNode;
}

export interface ContainerProps {
    id?: string;
    className?: string;
    mb?: boolean;
    topSectionPadding?: boolean;
    topViewHeight?: boolean;
    children: ReactNode;
}

export interface ActionBannerProps {
    footer?: Boolean;
};

export interface EcoscopeButtonProps {
    href: string;
    full?: boolean;
    className?: string;
    variant?: "secondary" | "outline";
    children: string;
};

export interface IconProps {
    className?: string;
}

export interface ServiceProps {
    icon?: ReactNode;
    name?: string;
    description?: string;
    href?: string;
    i: number;
};

export interface ServicePageProps {
    title: string;
    information: ReactNode;

};