"use client";
import React, { Suspense, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MoreStories from "./MoreStories";

type Props = {
  //   id: string;
};

const FilteredResults = (props: Props) => {
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    console.log(filterValue);
  }, [filterValue]);

  return (
    <>
      <div className="w-full sm:w-1/3 md:w-1/4 xl:w-1/6 mb-10">
        <Select
          onValueChange={(e: string) => {
            setFilterValue(e);
          }}
        >
          <SelectTrigger defaultValue={filterValue}>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="film and television">
              Film and Television
            </SelectItem>
            <SelectItem value="advertising">Advertising</SelectItem>
            <SelectItem value="hospitality">Hospitality</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <aside>
        <Suspense>
          {/* <MoreStories
            params={{
              skip: "",
              limit: 10,
              industry: filterValue === "all" ? "" : filterValue,
            }}
          /> */}
        </Suspense>
      </aside>
    </>
  );
};

export default FilteredResults;
