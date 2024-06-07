import Link from "next/link";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";

import type { MoreStoriesQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery } from "@/sanity/lib/queries";
import { Card } from "@/components/ui/card";

export default async function MoreStories(params: {
  skip: string;
  limit: number;
  homePage: boolean;
}) {
  const data = await sanityFetch<MoreStoriesQueryResult>({
    query: moreStoriesQuery,
    params,
  });

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:justify-evenly space-y-9 md:space-y-0">
        {data?.map((post) => {
          const { _id, title, slug, coverImage, excerpt, author } = post;
          return (
            <article key={_id} className="flex flex-col h-96">
              <Card className="service-card flex flex-col flex-1 relative">
                <Link
                  href={`/posts/${slug}`}
                  className="group absolute top-0 left-0 h-full w-full z-0 rounded-lg"
                >
                  <CoverImage image={coverImage} priority={false} />
                </Link>
                <div className="h-full flex flex-col justify-end">
                  <div className="bg-primary-dark-blurry p-5">
                    <h3 className="text-balance mb-5 text-3xl leading-snug font-heading text-white">
                      <Link href={`/posts/${slug}`} className="hover:underline">
                        {title}
                      </Link>
                    </h3>
                    <p className="font-body text-white">Film and Production</p>
                  </div>
                </div>
                {/* <div className="mb-4 text-lg">
                <DateComponent dateString={post.date} />
              </div> */}
                {/* {excerpt && (
                  <p className="text-pretty mb-4 text-lg leading-relaxed">
                    {excerpt}
                  </p>
                )} */}
                {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
              </Card>
            </article>
          );
        })}
        {params.homePage && (
          <Card className="bg-primary h-96 flex flex-col justify-center service-card">
            <Link href="/case-studies" className="text-white text-center">
              View more
            </Link>
          </Card>
        )}
      </div>
    </>
  );
}
