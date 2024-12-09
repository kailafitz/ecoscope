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
  aside?: boolean;
};

const MobileCarousel = async (props: Props) => {
  const { data } = await useDataFetch(props.params);
  return (
    <Carousel className="lg:hidden">
      <CarouselContent className="[&_div:not(:last-child)]:mr-6">
        {data?.map((post, i: number) => {
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
            <CarouselItem key={i} className="sm:basis-96 lg:hidden">
              {NewsCards}
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default async function MoreStories(props: Props) {
  const { data } = await useDataFetch(props.params);
  return (
    <>
      <MobileCarousel aside={props.aside} params={props.params} />
      <div
        className={`hidden lg:flex ${props.aside ? "lg:flex-col lg:space-y-10" : "flex-col lg:flex-row lg:justify-between space-y-9 lg:space-y-0"} `}
      >
        {data?.map((post) => {
          const { _id, title, slug, coverImage, industry, date } = post;

          return (
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
        })}
      </div>
    </>
  );
}
