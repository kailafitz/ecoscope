import { Image } from "next-sanity/image";
import { urlForImage } from "@/sanity/lib/utils";
import { CoverImageProps } from "@/app/interfaces";
import PropTypes from "prop-types";
import { internalGroqTypeReferenceTo } from "@/sanity.types";

const CoverImage: React.FC<CoverImageProps> = (props) => {
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
};

CoverImage.propTypes = {
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string.isRequired,
      _type: PropTypes.string.isRequired,
      _weak: PropTypes.bool,
      [internalGroqTypeReferenceTo]: PropTypes.string,
    }),
    alt: PropTypes.string,
  }),
  priority: PropTypes.bool,
  feature: PropTypes.bool,
  post: PropTypes.bool,
  card: PropTypes.bool,
};

export default CoverImage;


// Type 'Validator<NonNullable<InferProps<{ asset: Requireable<InferProps<{ _ref: Requireable<string>; _type: Requireable<string>; _weak: Requireable<boolean>; [internalGroqTypeReferenceTo]: Requireable<...>; }>>; hotspot: Requireable<...>; crop: Requireable<...>; alt: Requireable<...>; _type: Validator<...>; }>>>' is not assignable to type 'Validator<{ asset?: { _ref: string; _type: "reference"; _weak?: boolean | undefined; [internalGroqTypeReferenceTo]?: "sanity.imageAsset" | undefined; } | undefined; hotspot?: SanityImageHotspot | undefined; crop?: SanityImageCrop | undefined; alt?: string | undefined; _type: "image"; }>'.
//   Type 'NonNullable<InferProps<{ asset: Requireable<InferProps<{ _ref: Requireable<string>; _type: Requireable<string>; _weak: Requireable<boolean>; [internalGroqTypeReferenceTo]: Requireable<...>; }>>; hotspot: Requireable<...>; crop: Requireable<...>; alt: Requireable<...>; _type: Validator<...>; }>>' is not assignable to type '{ asset?: { _ref: string; _type: "reference"; _weak?: boolean | undefined; [internalGroqTypeReferenceTo]?: "sanity.imageAsset" | undefined; } | undefined; hotspot?: SanityImageHotspot | undefined; crop?: SanityImageCrop | undefined; alt?: string | undefined; _type: "image"; }'.
//     Types of property 'asset' are incompatible.
//       Type 'InferProps<{ _ref: Requireable<string>; _type: Requireable<string>; _weak: Requireable<boolean>; [internalGroqTypeReferenceTo]: Requireable<string>; }> | null | undefined' is not assignable to type '{ _ref: string; _type: "reference"; _weak?: boolean | undefined; [internalGroqTypeReferenceTo]?: "sanity.imageAsset" | undefined; } | undefined'.
//         Type 'null' is not assignable to type '{ _ref: string; _type: "reference"; _weak?: boolean | undefined; [internalGroqTypeReferenceTo]?: "sanity.imageAsset" | undefined; } | undefined'.