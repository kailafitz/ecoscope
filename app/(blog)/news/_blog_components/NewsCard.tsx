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

type Props = {
  _id: string;
  title: string;
  slug: string | null;
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
    <article key={props._id} className="group flex flex-col h-96 rounded-lg">
      <Card className="max-w-full w-[300px] flex flex-col flex-1 relative rounded-lg">
        <Link
          href={`/posts/${props.slug}`}
          className="group absolute top-0 left-0 h-full w-full z-0 rounded-lg"
        >
          <CoverImage image={props.coverImage} priority={false} />
        </Link>
        <div className="h-full flex flex-col justify-end">
          <div className="bg-transparent-primary backdrop-blur bottom-0 flex flex-col justify-between group-hover:justify-center p-5 rounded-b-lg h-44 sm:h-32 group-hover:h-full group-hover:rounded-t-lg group-hover:transition-all transition-all">
            <h3 className="text-balance mb-5 text-3xl leading-snug font-heading text-white group-hover:hidden">
              <Link href={`/posts/${props.slug}`} className="hover:underline">
                {props.title}
              </Link>
            </h3>
            <p className="font-body text-lg md:text-sm text-white group-hover:hidden">
              Film and Production
            </p>
            <EcoscopeButton
              className="hidden group-hover:block text-center"
              href={`/news/posts/${props.slug}`}
            >
              Read more
            </EcoscopeButton>
          </div>
        </div>
        {/* <div className="mb-4 text-lg">
                <DateComponent dateString={post.date} />
              </div> */}
        {/* {excerpt && (
                  <p className="text-pretty mb-4 text-lg leading-relaxed">
                    {excerpt}
                  </p>
                )} */}
        {/* {author && <Author name={author.name} picture={author.picture} />} */}
      </Card>
    </article>
  );
};

export default NewsCard;
