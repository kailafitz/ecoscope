import { Image } from "next-sanity/image";

import type { Author } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { AuthorProps } from "@/app/interfaces";

const Author: React.FC<AuthorProps> = (props) => {
  return (
    <div className="flex items-center text-xl">
      {/* {picture?.asset?._ref ? (
        <div className="mr-4 h-12 w-12">
          <Image
            alt={picture?.alt || ""}
            className="h-full rounded-full object-cover"
            height={48}
            width={48}
            src={
              urlForImage(picture)
                ?.height(96)
                .width(96)
                .fit("crop")
                .url() as string
            }
          />
        </div>
      ) : (
        <div className="mr-1">By </div>
      )} */}
      <div className="text-xl opacity-65">{props.name} Fitzpatrick</div>
    </div>
  );
};

export default Author;
