import { FilmPostQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { filmPostsQuery } from "@/sanity/lib/queries";
import React from "react";
import NewsCard from "./NewsCard";

const MoreFilmStoriesData = async (params: {
  skip: string;
  limit: number;
  industry: string;
}) => {
  const data = await sanityFetch<FilmPostQueryResult>({
    query: filmPostsQuery,
    params,
  });

  return data?.map((post) => {
    const { _id, title, slug, coverImage, industry, date } = post;

    const NewsCards = (
      <NewsCard
        key={_id}
        _id={_id}
        title={title}
        date={date}
        slug={slug}
        coverImage={coverImage}
        industry={industry}
      />
    );

    return <>{NewsCards}</>;
  });
};

export default async function MoreFilmStories(params: {
  skip: string;
  limit: number;
  industry: string;
  homepage?: boolean;
}) {
  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-row items-center lg:justify-between space-y-9 lg:space-y-0">
        <MoreFilmStoriesData
          skip={params.skip}
          limit={params.limit}
          industry={params.industry}
        />
        {/* {params.homepage && <ViewMoreCardButton />} */}
      </div>
    </>
  );
}
