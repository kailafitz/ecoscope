import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";
import Container from "../../_custom_components/Container";
import ActionBanner from "../../_custom_components/ActionBanner";
import { sanityFetch } from "@/sanity/lib/fetch";
import Intro from "./_blog_components/Intro";
import LatestFeaturesPost from "./_blog_components/LatestFeaturesPost";
import { H3 } from "@/app/_custom_components/Headings";
import FilteredResults from "./_blog_components/FilteredResults";
import { Suspense } from "react";
import MoreStories from "./_blog_components/MoreStories";

export default async function Page() {
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

        {heroPost?._id && <FilteredResults />}
        <aside>
          <Suspense>
            <MoreStories
              params={{
                skip: heroPost?._id!,
                limit: 10,
                industry: "",
              }}
            />
          </Suspense>
        </aside>
      </Container>
      <ActionBanner bottomBorder />
    </>
  );
}
