import { Image } from "next-sanity/image";
import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  priority?: boolean;
  feature?: boolean;
  post?: boolean;
  card?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <Image
      className={`object-cover w-full ${
        props.feature &&
        "rounded-t-lg md:rounded-l-lg md:rounded-tr-none md:h-96"
      } ${props.post && "rounded-lg shadow-md"} ${props.card && "h-40 rounded-t-lg"}`}
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

  return <>{image}</>;
}
