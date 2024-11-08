import EcoscopeButton from "@/app/_custom_components/Button";
import React from "react";
import DateComponent from "./Date";
import Link from "next/link";
import CoverImage from "./CoverImage";
import { HeroQueryResult } from "@/sanity.types";
import Author from "./Author";

const LatestFeaturesPost = ({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  Exclude<HeroQueryResult, null>,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
>) => {
  return (
    <article className="flex flex-col md:flex-row mb-16 h-96">
      <Link
        className="group block w-full md:w-2/3"
        href={`/news/posts/${slug}`}
      >
        <CoverImage feature image={coverImage} priority />
      </Link>
      <div className="md:w-1/3 flex flex-col p-6 bg-transparent-primary rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
        <div>
          <h3 className="text-pretty mb-1 text-2xl leading-tight">
            <Link href={`/news/posts/${slug}`} className="font-heading">
              {title} Title
            </Link>
          </h3>
          {/* <p className="mb-6 font-heading opacity-70">Film and Television</p> */}
          <div className="mb-4 text-sm">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          {excerpt && (
            <p className="text-pretty mb-4 leading-relaxed">
              {excerpt} Lorem ipsum dolor sit amet consectetur. Vestibulum
              aliquam semper id laoreet ultrices. Sit diam risus tempus dis amet
              varius. Duis eu pretium felis a semper et.
            </p>
          )}
          <EcoscopeButton variant="secondary" href={`/news/posts/${slug}`}>
            Read more
          </EcoscopeButton>
          {/* {author && <Author name={author.name} picture={author.picture} />} */}
        </div>
      </div>
    </article>
  );
};

export default LatestFeaturesPost;
