import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  priority?: boolean;
  feature?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <Image
      className={`object-cover w-full h-full ${
        props.feature
          ? "rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          : "rounded-lg"
      }`}
      // width={2000}
      // height={1000}
      width={700}
      height={300}
      alt={source?.alt || ""}
      src={urlForImage(source)?.height(1000).width(2000).url() as string}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "50%" }} />
  );

  return (
    <>
      {/* <div className="shadow-md transition-shadow duration-200 group-hover:shadow-lg sm:mx-0"> */}
      {image}
      {/* </div> */}
    </>
  );
}
