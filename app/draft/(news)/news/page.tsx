import { H3, H4 } from "@/app/_custom_components/Headings";
import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";
import AllStories from "./_news_components/AllStories";
import Intro from "./_news_components/Intro";
import LatestFeaturesPost from "./_news_components/LatestFeaturesPost";
import Container from "@/app/_custom_components/Layout/Container";
import ActionBanner from "@/app/_custom_components/ActionBanner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { newsLinks } from "@/data/ExternalNews";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExternalLinkIcon from "@/app/_custom_components/_icons/ExternalLinkIcon";

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
  // const industry = ((await searchParams).industry as string) || "";

  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  const sortedNewsLinks = newsLinks.sort(function (a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      <Container mb topSectionPadding>
        <Intro />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedNewsLinks.map((link, i) => {
            return (
              <Card key={i} className="flex flex-col justify-between space-y-5">
                <CardHeader>
                  <H4 className="text-gray-600">{link.title}</H4>
                  <p className="text-muted-foreground">{link.source}</p>
                </CardHeader>

                <CardFooter className="flex justify-between items-end pb-5 px-5">
                  <p className="text-muted-foreground">
                    {link.date.toLocaleDateString("en-IE")}
                  </p>
                  <Button>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="flex flex-row items-end"
                    >
                      <span>Read more</span>
                      <ExternalLinkIcon className="inline w-5 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        {/* <H3 className="mb-4">Latest Story</H3>
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

        <AllStories skip={heroPost?._id!} industry={industry} /> */}
      </Container>
      <ActionBanner />
    </>
  );
}
