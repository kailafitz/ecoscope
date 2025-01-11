import React from "react";
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
      className={`group flex flex-col rounded-lg text-left shadow-lg`}
    >
      <Card className="max-w-full w-[300px] flex flex-col relative rounded-lg shadow-none bg-white">
        <Link href={`/news/posts/${props.slug}`}>
          <CoverImage image={props.coverImage} priority={false} card />
        </Link>

        <div className={`flex flex-col p-5`}>
          <p className={`font-body text-md md:text-sm text-primary`}>
            {props.industry}
          </p>
          <H4>
            <Link
              href={`/news/posts/${props.slug}`}
              className="hover:opacity-60"
            >
              {props.title}
            </Link>
          </H4>
          <div className="text-base">
            <DateComponent dateString={props.date} />
          </div>
        </div>
      </Card>
    </article>
  );
};

export default NewsCard;
