import type { Metadata, ResolvingMetadata } from "next";
import { groq, type PortableTextBlock } from "next-sanity";
import Link from "next/link";
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
import { H1 } from "@/app/_custom_components/Headings";
import ActionBanner from "@/app/_custom_components/ActionBanner";

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

  console.log("post", post);

  return (
    <Container className="mx-auto px-5">
      <h2 className="my-10 text-xl font-heading opacity-50 leading-tight tracking-tight md:text-2xl md:tracking-tighter">
        <Link href="/news" className="hover:underline">
          {/* {settings?.title || demo.title} */}
          News
        </Link>{" "}
        / [Service Type]
      </h2>
      <article>
        <H1 className="text-balance font-heading mb-12 text-2xl leading-tight tracking-tighter md:text-4xl md:leading-none">
          {post.title}
        </H1>
        <div className="hidden md:mb-12 md:block">
          {post.author && (
            <Avatar name={post.author.name} picture={post.author.picture} />
          )}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage image={post.coverImage} priority />
        </div>
        <div className="max-w-2xl">
          <div className="mb-6 block md:hidden">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <div className="mb-4 text-lg">
              <DateComponent dateString={post.date} />
            </div>
          </div>
        </div>
        {/* {post.content?.length && (
          <PortableText
            className="mx-auto max-w-2xl"
            value={post.content as PortableTextBlock[]}
          />
        )} */}
        {post.content?.length && (
          <PortableText
            className="mx-auto"
            value={post.content as PortableTextBlock[]}
          />
        )}
      </article>
      <aside className="mb-20">
        <hr className="border-accent-2 mb-24 mt-28" />
        <h2 className="mb-8 text-2xl font-heading leading-tight tracking-tighter md:text-4xl">
          Related News
        </h2>
        <Suspense>
          <MoreStories skip={post._id} limit={2} />
        </Suspense>
      </aside>
      <ActionBanner />
    </Container>
  );
}
