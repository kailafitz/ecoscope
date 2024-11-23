import EcoscopeButton from "@/app/_custom_components/Button";
import React from "react";
import DateComponent from "./Date";
import Link from "next/link";
import CoverImage from "./CoverImage";
import { HeroQueryResult } from "@/sanity.types";
import { H3 } from "@/app/_custom_components/Headings";

const LatestFeaturesPost = ({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  industry,
}: Pick<
  Exclude<HeroQueryResult, null>,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug" | "industry"
>) => {
  console.log(industry);
  return (
    <article className="flex flex-col md:flex-row mb-16 shadow-xl rounded-lg">
      <Link
        className="group block w-full md:w-2/3"
        href={`/news/posts/${slug}`}
      >
        <CoverImage feature image={coverImage} priority />
      </Link>
      <div className="md:w-1/3 flex flex-col p-6">
        <div>
          <p className="text-primary mb-1">{industry}</p>
          <H3 className="mb-3">
            <Link href={`/news/posts/${slug}`}>{title}</Link>
          </H3>
          <div>
            <DateComponent dateString={date} />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          {excerpt && (
            <p className="text-pretty mb-4 leading-relaxed">{excerpt}</p>
          )}
          <EcoscopeButton href={`/news/posts/${slug}`}>
            Read more
          </EcoscopeButton>
        </div>
      </div>
    </article>
  );
};

export default LatestFeaturesPost;
