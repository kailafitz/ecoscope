import Link from "next/link";
import { Suspense } from "react";

import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";
import Container from "../../_custom_components/Container";
import ActionBanner from "../../_custom_components/ActionBanner";
import EcoscopeButton from "../../_custom_components/Button";
import CoverImage from "./_blog_components/CoverImage";
import MoreStories from "./_blog_components/MoreStories";
import Onboarding from "../onboarding";
import { sanityFetch } from "@/sanity/lib/fetch";
import DateComponent from "./_blog_components/Date";
import Avatar from "./_blog_components/Author";
import Intro from "./_blog_components/Intro";
import LatestFeaturesPost from "./_blog_components/LatestFeaturesPost";

export default async function Page() {
  const [settings, heroPost] = await Promise.all([
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResult>({ query: heroQuery }),
  ]);

  return (
    <Container className="pt-16">
      <Intro />
      {heroPost ? (
        <LatestFeaturesPost
          title={heroPost.title}
          slug={heroPost.slug}
          coverImage={heroPost.coverImage}
          excerpt={heroPost.excerpt}
          date={heroPost.date}
          author={heroPost.author}
        />
      ) : (
        <Onboarding />
      )}
      {heroPost?._id && (
        <aside>
          <Suspense>
            <MoreStories skip={heroPost._id} limit={100} />
          </Suspense>
        </aside>
      )}
      <ActionBanner pt />
    </Container>
  );
}
