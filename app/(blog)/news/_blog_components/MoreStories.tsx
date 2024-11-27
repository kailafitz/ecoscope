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
  aside?: boolean;
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

const MobileCarousel = async (props: Props) => {
  const { data } = await useDataFetch(props.params);
  return (
    <Carousel className="lg:hidden">
      <CarouselContent className="[&_div:not(:last-child)]:mr-6">
        {data?.map((post) => {
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
            <CarouselItem className="sm:basis-96 lg:hidden">
              {NewsCards}
            </CarouselItem>
          );
        })}

        <CarouselItem className="sm:basis-96 lg:hidden">
          {props.homepage && <ViewMoreCardButton />}
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default async function MoreStories(props: Props) {
  const { data } = await useDataFetch(props.params);
  return (
    <>
      <MobileCarousel
        homepage={props.homepage}
        aside={props.aside}
        params={props.params}
      />
      <div
        className={`hidden lg:flex ${props.aside ? "lg:flex-col lg:space-y-10" : "flex-col lg:flex-row items-center lg:justify-between space-y-9 lg:space-y-0"} `}
      >
        {data?.map((post) => {
          const { _id, title, slug, coverImage, industry, date } = post;

          return (
            <NewsCard
              aside={props.aside}
              key={_id}
              _id={_id}
              title={title}
              date={date}
              slug={slug}
              coverImage={coverImage}
              industry={industry}
            />
          );
        })}
        {props.homepage && <ViewMoreCardButton />}
      </div>
    </>
  );
}
