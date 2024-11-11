import Link from "next/link";
import type { MoreStoriesQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery } from "@/sanity/lib/queries";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsCard from "./NewsCard";
import React from "react";

const ViewMoreCardButton = () => {
  return (
    <Card className="bg-primary h-96 flex flex-col justify-center max-w-full w-[300px] hover:bg-teal-500 transition-all hover:transition-all">
      <Link
        href="/news"
        className="text-white text-center h-full flex flex-col justify-center"
      >
        View more
      </Link>
    </Card>
  );
};

const MobileCarousel = () => {
  return (
    <Carousel className="lg:hidden">
      <CarouselContent className="[&_div:not(:last-child)]:pr-6">
        <MoreStoriesData skip={""} limit={2} />
        <CarouselItem className="sm:basis-96 lg:hidden">
          <ViewMoreCardButton />
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

const MoreStoriesData = async (params: { skip: string; limit: number }) => {
  const data = await sanityFetch<MoreStoriesQueryResult>({
    query: moreStoriesQuery,
    params,
  });

  return data?.map((post) => {
    const { _id, title, slug, coverImage, excerpt, author, date } = post;

    const NewsCards = (
      <NewsCard
        key={_id}
        _id={_id}
        title={title}
        slug={slug}
        coverImage={coverImage}
      />
    );

    return (
      <>
        <CarouselItem className="sm:basis-96 lg:hidden">
          {NewsCards}
        </CarouselItem>
        {/* {NewsCards} */}
      </>
    );
  });
};

export default async function MoreStories(params: {
  skip: string;
  limit: number;
  homepage: boolean;
}) {
  return (
    <>
      <MobileCarousel />
      <div className="hidden lg:flex flex-col lg:flex-row items-center lg:justify-between space-y-9 lg:space-y-0">
        <MoreStoriesData skip={params.skip} limit={params.limit} />
        {params.homepage && <ViewMoreCardButton />}
      </div>
    </>
  );
}
