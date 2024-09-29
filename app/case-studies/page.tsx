import Link from "next/link";
import { Suspense } from "react";

// import Avatar from "./avatar";
// import CoverImage from "./cover-image";
// import DateComponent from "./date";
// import MoreStories from "./more-stories";
// import Onboarding from "./onboarding";
// import PortableText from "./portable-text";

import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";
import Container from "../_custom_components/Container";
import { H1 } from "../_custom_components/Headings";
import ActionBanner from "../_custom_components/ActionBanner";
import EcoscopeButton from "../_custom_components/Button";
import CoverImage from "./(blog)/cover-image";
import MoreStories from "./(blog)/more-stories";
import Onboarding from "./(blog)/onboarding";

function Intro(props: { title: string | null | undefined; description: any }) {
  const title = props.title || demo.title;
  const description = props.description?.length
    ? props.description
    : demo.description;
  return (
    <section className="mb-16 lg:mb-12">
      <H1 className="text-left mb-20">
        {/* {title || demo.title} */}
        Case Studies
      </H1>
      <p className="w-full lg:w-2/3">
        Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper id
        laoreet ultrices. Sit diam risus tempus dis amet varius. Duis eu pretium
        felis a semper et. Dignissim mauris commodo lectus ultrices aliquam.
        Dignissim sed aliquam odio aliquet molestie. Consequat in eget sed amet
        ornare nunc penatibus egestas. Blandit massa tempor lacus a sollicitudin
        malesuada mi.
      </p>
    </section>
  );
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  Exclude<HeroQueryResult, null>,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
>) {
  return (
    <article className="flex flex-col md:flex-row mb-16">
      <Link className="group block w-full md:w-2/3" href={`/posts/${slug}`}>
        <CoverImage feature image={coverImage} priority />
      </Link>
      <div className="md:w-1/3 flex flex-col p-6 bg-transparent-primary rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
        <div>
          <h3 className="text-pretty mb-1 text-2xl leading-tight">
            <Link href={`case-studies/posts/${slug}`} className="font-heading">
              {title} Title
            </Link>
          </h3>
          <p className="mb-6 font-heading opacity-70">Film and Television</p>
          {/* <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div> */}
        </div>
        <div className="flex flex-1 flex-col justify-between">
          {excerpt && (
            <p className="text-pretty mb-4 leading-relaxed">
              {excerpt} Lorem ipsum dolor sit amet consectetur. Vestibulum
              aliquam semper id laoreet ultrices. Sit diam risus tempus dis amet
              varius. Duis eu pretium felis a semper et.
            </p>
          )}
          <EcoscopeButton
            variant="secondary"
            href={`case-studies/posts/${slug}`}
          >
            Read more
          </EcoscopeButton>
          {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
        </div>
      </div>
    </article>
  );
}

export default async function Page() {
  const [settings, heroPost] = await Promise.all([
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResult>({ query: heroQuery }),
  ]);

  return (
    <Container className="pt-16">
      <Intro title={settings?.title} description={settings?.description} />
      {heroPost ? (
        <HeroPost
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
