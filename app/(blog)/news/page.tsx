import Link from "next/link";
import { Suspense } from "react";

import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";
import Container from "../../_custom_components/Container";
import ActionBanner from "../../_custom_components/ActionBanner";
import EcoscopeButton from "../../_custom_components/Button";
import CoverImage from "./_blog_components/CoverImage";
import MoreStories from "./_blog_components/MoreStories";
import { sanityFetch } from "@/sanity/lib/fetch";
import DateComponent from "./_blog_components/Date";
import Avatar from "./_blog_components/Author";
import Intro from "./_blog_components/Intro";
import LatestFeaturesPost from "./_blog_components/LatestFeaturesPost";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "../../_custom_components/Button";
import { H3 } from "@/app/_custom_components/Headings";

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
          />
        )}
        <div className="w-full sm:w-1/3 md:w-1/5 lg:w-1/6 mb-10">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="film">Film</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {heroPost?._id && (
          <aside>
            <Suspense>
              <MoreStories skip={heroPost._id} limit={10} />
            </Suspense>
          </aside>
        )}
      </Container>
      <ActionBanner bottomBorder />
    </>
  );
}
