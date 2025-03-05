/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import { H4 } from "@/app/_custom_components/Layout/Headings";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="mb-5 last:mb-0">{children}</p>,
      h4: ({ children }) => <H4 className="mt-10 mb-4">{children}</H4>,
      h5: ({ children }) => (
        <h5 className="mt-4 mb-1 font-medium font-body">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mt-4 mb-1 font-medium font-body">{children}</h6>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
