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
import { useRouter } from "next/navigation";

// type Props = {
//     id: string;
// };

const FilteredResults: React.FC = () => {
  const router = useRouter();

  const changeIndustry = (value: string) => {
    router.push(`?industry=${value}`);
  };

  return (
    <>
      <div className="w-full sm:w-1/3 md:w-1/4 xl:w-1/6 mb-10">
        <Select
          onValueChange={(e: string) => {
            changeIndustry(e);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Film and Television">
              Film and Television
            </SelectItem>
            <SelectItem value="Advertising">Advertising</SelectItem>
            <SelectItem value="Hospitality">Hospitality</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default FilteredResults;
