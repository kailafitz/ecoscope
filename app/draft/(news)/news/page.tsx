import { H3 } from "@/app/_custom_components/Headings";
import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";
import AllStories from "./_news_components/AllStories";
import Intro from "./_news_components/Intro";
import LatestFeaturesPost from "./_news_components/LatestFeaturesPost";
import Container from "@/app/_custom_components/Container";
import ActionBanner from "@/app/_custom_components/ActionBanner";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "News",
    description: "News",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const industry = ((await searchParams).industry as string) || "";

  const [settings, heroPost] = await Promise.all([
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResult>({ query: heroQuery }),
  ]);

  return (
    <>
      <Container mb topSectionPadding>
        <Intro />
        <H3 className="mb-4">Latest Story</H3>
        <hr className="w-full border-primary mb-10" />
        {heroPost && (
          <LatestFeaturesPost
            title={heroPost.title}
            slug={heroPost.slug}
            coverImage={heroPost.coverImage}
            excerpt={heroPost.excerpt}
            date={heroPost.date}
            author={heroPost.author}
            industry={heroPost.industry}
          />
        )}

        <AllStories skip={heroPost?._id!} industry={industry} />
      </Container>
      <ActionBanner bottomBorder />
    </>
  );
}
