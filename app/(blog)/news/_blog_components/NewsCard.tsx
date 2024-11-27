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
import { H4 } from "@/app/_custom_components/Headings";

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
          className={`group ${props.aside ? "mb-1.5" : "absolute"} top-0 left-0 h-full w-full z-0 rounded-lg`}
        >
          <CoverImage image={props.coverImage} priority={false} />
        </Link>
        <div className="h-full flex flex-col justify-end">
          <div
            className={`backdrop-blur bottom-0 flex flex-col justify-between ${props.aside ? "" : "p-5 text-white bg-transparent-primary sm:h-36 h-44 group-hover:h-full group-hover:rounded-t-lg group-hover:transition-all transition-all group-hover:justify-center"} rounded-b-lg`}
          >
            <div>
              <p
                className={`font-body text-lg md:text-sm text-primary ${props.aside ? "" : "hidden"}`}
              >
                {props.industry}
              </p>
              <H4 className={`${props.aside ? "" : "group-hover:hidden"}`}>
                <Link
                  href={`/news/posts/${props.slug}`}
                  className="hover:opacity-40 transition-all hover:transition-all"
                >
                  {props.title}
                </Link>
              </H4>
              <div
                className={`text-base ${props.aside ? "mb-2" : "group-hover:hidden"}`}
              >
                <DateComponent dateString={props.date} />
              </div>
            </div>
            <p
              className={`font-body text-lg md:text-sm text-primary ${props.aside ? "hidden" : "group-hover:hidden"}`}
            >
              {props.industry}
            </p>
            <EcoscopeButton
              className={`${props.aside ? "hidden" : "hidden group-hover:block"} text-center`}
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
