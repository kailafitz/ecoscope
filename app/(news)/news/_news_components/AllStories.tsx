import { H3 } from "@/app/_custom_components/Layout/Headings";
import React, { Suspense } from "react";
import FilteredResults from "./FilteredResults";
import MoreStories from "./MoreStories";
import { AllStoriesProps } from "@/app/interfaces";
import PropTypes from "prop-types";

const AllStories: React.FC<AllStoriesProps> = (props) => {
  return (
    <>
      <H3 className="mb-4">All Stories</H3>
      <hr className="w-full border-primary mb-10" />
      <FilteredResults />
      <aside>
        <Suspense>
          <MoreStories
            params={{
              skip: props.skip,
              limit: 10,
              industry:
                props.industry === "" || props.industry === "all"
                  ? ""
                  : props.industry,
            }}
          />
        </Suspense>
      </aside>
    </>
  );
};

AllStories.propTypes = {
  skip: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
};

export default AllStories;
