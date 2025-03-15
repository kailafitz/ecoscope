import { H3 } from "@/app/_custom_components/Layout/Headings";
import React, { Suspense } from "react";
import MoreStories from "./MoreStories";
import { useDataFetch } from "@/hooks/useDataFetch";
import { MoreStoriesProps } from "@/app/interfaces";
import PropTypes from "prop-types";

const MoreSimilarStories: React.FC<MoreStoriesProps> = async (props) => {
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

MoreSimilarStories.propTypes = {
  skip: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  industry: PropTypes.string.isRequired,
};

export default MoreSimilarStories;
