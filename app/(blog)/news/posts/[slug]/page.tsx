import type { Metadata, ResolvingMetadata } from "next";
import { groq, type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Avatar from "../../_blog_components/Author";
import CoverImage from "../../_blog_components/CoverImage";
import DateComponent from "../../_blog_components/Date";
import MoreStories from "../../_blog_components/MoreStories";
import PortableText from "../../../portable-text";

import type {
  PostQueryResult,
  PostSlugsResult,
  SettingsQueryResult,
} from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Container from "@/app/_custom_components/Container";
import { H1, H3 } from "@/app/_custom_components/Headings";
import ActionBanner from "@/app/_custom_components/ActionBanner";
import ShareButtons from "../../_blog_components/ShareButtons";

type Props = {
  params: { slug: string };
};

const postSlugs = groq`*[_type == "post"]{slug}`;

export async function generateStaticParams() {
  const params = await sanityFetch<PostSlugsResult>({
    query: postSlugs,
    perspective: "published",
    stega: false,
  });
  return params.map(({ slug }) => ({ slug: slug?.current }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await sanityFetch<PostQueryResult>({
    query: postQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function PostPage({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch<PostQueryResult>({
      query: postQuery,
      params,
    }),
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <>
      <Container mb topSectionPadding id="news-article" className="">
        {/* <Link href="/news" className="hover:underline">
            Back to News
          </Link> */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10">
          <article className="lg:col-span-3 lg:border-r-2 lg:border-primary lg:pr-10">
            <p className="text-primary mb-2">{post.industry}</p>
            <H1 className="mb-5">{post.title}</H1>
            {post.excerpt && <H3 className="mb-10">{post.excerpt}</H3>}
            <div className="flex text-lg mb-3 space-x-2 items-center">
              <DateComponent dateString={post.date} />
              <span className="text-2xl opacity-80">|</span>
              {post.author && <Avatar name={post.author.name} />}
              {/* {post.author && (
                <Avatar name={post.author.name} picture={post.author.picture} />
              )} */}
            </div>
            <div className="mb-5">
              <CoverImage image={post.coverImage} priority />
            </div>
            <ShareButtons slug={post.slug || ""} />
            {/* {post.content?.length && (
          <PortableText
            className="mx-auto max-w-2xl"
            value={post.content as PortableTextBlock[]}
          />
        )} */}
            {post.content?.length && (
              <PortableText
                className="mx-auto mb-16 md:mb-32"
                value={post.content as PortableTextBlock[]}
              />
            )}
          </article>
          <div className="mb-16 md:mb-32 lg:mb-0">
            <H3 mb>Other Stories</H3>
            <MoreStories
              aside
              params={{ skip: post._id, limit: 3, industry: "" }}
            />
          </div>
        </div>

        <aside>
          <H3 mb>
            Other <span className="text-primary">{post.industry}</span> Stories
          </H3>
          <Suspense>
            <MoreStories
              params={{ skip: post._id, limit: 3, industry: post.industry! }}
            />
          </Suspense>
        </aside>
      </Container>
      <ActionBanner bottomBorder />
    </>
  );
}
