import { H3 } from "@/app/_custom_components/Layout/Headings";
import React, { Suspense } from "react";
import FilteredResults from "./FilteredResults";
import MoreStories from "./MoreStories";

type Props = {
  skip: string;
  industry: string;
};

const AllStories = (props: Props) => {
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

export default AllStories;
