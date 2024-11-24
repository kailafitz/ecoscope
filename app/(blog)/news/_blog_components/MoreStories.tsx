import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import NewsCard from "./NewsCard";
import React from "react";
import { useDataFetch } from "@/hooks/useDataFetch";

type Props = {
  params: {
    skip: string;
    limit: number;
    industry: string;
  };
  homepage?: boolean;
};

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

const MoreStoriesData = async (props: Props) => {
  const { data } = await useDataFetch(props.params);

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

    return (
      <>
        {/* <CarouselItem className="sm:basis-96 lg:hidden">
          {NewsCards}
        </CarouselItem> */}
        {NewsCards}
      </>
    );
  });
};

const MobileCarousel = () => {
  return (
    <Carousel className="lg:hidden overflow-hidden">
      <CarouselContent className="[&_div:not(:last-child)]:pr-6">
        <MoreStoriesData params={{ skip: "", limit: 2, industry: "" }} />
        <CarouselItem className="sm:basis-96 lg:hidden">
          <ViewMoreCardButton />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default async function MoreStories(props: Props) {
  return (
    <>
      <MobileCarousel />
      <div className="hidden lg:flex flex-col lg:flex-row items-center lg:justify-between space-y-9 lg:space-y-0">
        <MoreStoriesData
          params={{
            skip: props.params.skip,
            limit: props.params.limit,
            industry: props.params.industry,
          }}
        />
        {props.homepage && <ViewMoreCardButton />}
      </div>
    </>
  );
}
