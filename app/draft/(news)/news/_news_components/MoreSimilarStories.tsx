import { H3 } from "@/app/_custom_components/Headings";
import React, { Suspense } from "react";
import MoreStories from "./MoreStories";
import { useDataFetch } from "@/hooks/useDataFetch";

type Props = {
  skip: string;
  limit: number;
  industry: string;
};

const MoreSimilarStories = async (props: Props) => {
  const { dataLength } = await useDataFetch(props);

  if (dataLength > 0) {
    return (
      <aside>
        <H3 mb>
          Other <span className="text-primary">{props.industry}</span> Stories
        </H3>
        <Suspense>
          <MoreStories
            params={{
              skip: props.skip,
              limit: props.limit,
              industry: props.industry!,
            }}
          />
        </Suspense>
      </aside>
    );
  }
};

export default MoreSimilarStories;
