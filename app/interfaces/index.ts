import { Author, internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from "@/sanity.types";
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

export interface AllStoriesProps {
    skip: string;
    industry: string;
};

export interface AuthorProps {
    name: string;
    picture?: Exclude<Author["picture"], undefined> | null;
}

export interface CoverImageProps {
    image?: {
        asset: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        }
        alt?: string;
    };
    priority?: boolean;
    feature?: boolean;
    post?: boolean;
    card?: boolean;
}

export interface DateComponentProps {
    dateString: string;
}

export interface LatestFeaturesPostProps {
    title: string;
    slug: string;
    excerpt: string;
    coverImage: CoverImageProps["image"];
    date: string;
    industry: string;
}

export interface MoreStoriesProps {
    skip: string;
    limit: number;
    industry: string;
}

export interface MoreStoriesProps2 {
    params: {
        skip: string;
        limit: number;
        industry: string;
    };
    aside?: boolean;
};

export interface NewsCardProps {
    _id: string;
    title: string;
    slug: string | null;
    industry: string | null;
    date: string;
    coverImage: CoverImageProps["image"];
};

export interface ShareButtonsProps {
    slug: string;
};

export interface PostPageProps {
    params: { slug: string };
};