import { MoreStoriesQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery, industryPostsQuery } from "@/sanity/lib/queries";

export const useDataFetch = async (params: { skip: string; limit: number; industry: string }) => {
    const data = await sanityFetch<MoreStoriesQueryResult>({
        query: params.industry === "" ? moreStoriesQuery : industryPostsQuery,
        params,
    });

    return { data, dataLength: data.length };
}