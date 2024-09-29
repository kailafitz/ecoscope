import Link from "next/link";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";

import type { MoreStoriesQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery } from "@/sanity/lib/queries";
import { Card } from "@/components/ui/card";
import EcoscopeButton from "@/app/_custom_components/Button";

export default async function MoreStories(params: {
  skip: string;
  limit: number;
  homePage?: boolean;
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
            <article
              key={_id}
              className="group flex flex-col h-96 rounded-lg shadow-2xl max-w-full"
            >
              <Card className="service-card flex flex-col flex-1 relative rounded-lg">
                <Link
                  href={`/posts/${slug}`}
                  className="group absolute top-0 left-0 h-full w-full z-0 rounded-lg"
                >
                  <CoverImage image={coverImage} priority={false} />
                </Link>
                <div className="h-full flex flex-col justify-end">
                  <div className="bg-transparent-primary backdrop-blur bottom-0 flex flex-col justify-between group-hover:justify-center p-5 rounded-b-lg h-44 sm:h-32 group-hover:h-full group-hover:rounded-t-lg group-hover:transition-all transition-all">
                    <h3 className="text-balance mb-5 text-3xl leading-snug font-heading text-white group-hover:hidden">
                      <Link href={`/posts/${slug}`} className="hover:underline">
                        {title}
                      </Link>
                    </h3>
                    <p className="font-body text-lg md:text-sm text-white group-hover:hidden">
                      Film and Production
                    </p>
                    <EcoscopeButton
                      className="hidden group-hover:block text-center"
                      href={`/case-studies/posts/${slug}`}
                    >
                      Read more
                    </EcoscopeButton>
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
          <Card className="bg-primary h-96 flex flex-col justify-center service-card hover:bg-teal-500 transition-all hover:transition-all">
            <Link
              href="/case-studies"
              className="text-white text-center h-full flex flex-col justify-center"
            >
              View more
            </Link>
          </Card>
        )}
      </div>
    </>
  );
}
