import React from "react";
import EcoscopeButton from "../../../_custom_components/Button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import CoverImage from "./CoverImage";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import DateComponent from "./Date";

type Props = {
  aside?: boolean;
  _id: string;
  title: string;
  slug: string | null;
  industry: string | null;
  date: string;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
};

const NewsCard = (props: Props) => {
  return (
    <article
      key={props._id}
      className={`group flex flex-col ${props.aside ? "" : "h-96"}  rounded-lg text-left`}
    >
      <Card
        className={`max-w-full w-[300px] flex flex-col flex-1 relative rounded-lg ${props.aside ? "shadow-none" : ""}`}
      >
        <Link
          href={`/news/posts/${props.slug}`}
          className={`group ${props.aside ? "" : "absolute"} top-0 left-0 h-full w-full z-0 rounded-lg`}
        >
          <CoverImage image={props.coverImage} priority={false} />
        </Link>
        <div className="h-full flex flex-col justify-end">
          <div
            className={`backdrop-blur bottom-0 flex flex-col justify-between ${props.aside ? "" : "p-5 text-white bg-transparent-primary sm:h-36 h-44 group-hover:h-full group-hover:rounded-t-lg group-hover:transition-all transition-all group-hover:justify-center"} rounded-b-lg`}
          >
            <div>
              <h3
                className={`text-balance text-3xl leading-snug font-heading ${props.aside ? "" : "group-hover:hidden"}`}
              >
                <Link
                  href={`/news/posts/${props.slug}`}
                  className="hover:underline"
                >
                  {props.title}
                </Link>
              </h3>
              <div
                className={`text-base ${props.aside ? "" : "group-hover:hidden"}`}
              >
                <DateComponent dateString={props.date} />
              </div>
            </div>
            <p
              className={`font-body text-lg md:text-sm ${props.aside ? "mb-5" : "group-hover:hidden"}`}
            >
              {props.industry}
            </p>
            <EcoscopeButton
              className={`${props.aside ? "" : "hidden group-hover:block"} text-center`}
              href={`/news/posts/${props.slug}`}
            >
              Read more
            </EcoscopeButton>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default NewsCard;
