import Container, {
  containerMb,
} from "@/app/_custom_components/Layout/Container";
import { H1, H3, H4 } from "@/app/_custom_components/Layout/Headings";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import ExternalLinkIcon from "@/app/_custom_components/_icons/ExternalLinkIcon";
import { Button } from "@/components/ui/button";
import {
  articlesOfInterestData,
  companiesOfInterestData,
} from "@/data/Resources";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resources",
    description: "Resources",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

const Resources = () => {
  return (
    <>
      <Container mb topSectionPadding>
        <H1 mb className="text-center">
          Resources
        </H1>

        <div className={`${containerMb}`}>
          <H3 mb>Articles of Interest</H3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articlesOfInterestData.map(
              (
                resource: { title: string; source: string; link: string },
                i: number
              ) => {
                return (
                  <Card key={i} className="flex flex-col p-5 min-h-[200px]">
                    <p className="font-heading mb-5">{`[${i + 1}]`}</p>
                    <div className="bg-gradient-to-r from-primary to-white h-0.5 w-full rounded-full mb-5"></div>
                    <H4 left>
                      <Link
                        href={resource.link}
                        target="_blank"
                        className="hover:opacity-60"
                      >
                        {resource.title}
                      </Link>
                    </H4>
                    <p className="text-muted-foreground mb-5">
                      {resource.source}
                    </p>
                    <div className="flex flex-1 flex-row justify-end items-end">
                      <Button>
                        <Link
                          href={resource.link}
                          target="_blank"
                          className="flex flex-row items-end"
                        >
                          <span>Read more</span>
                          <ExternalLinkIcon className="inline w-5 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                );
              }
            )}
          </div>
        </div>

        <div>
          <H3 mb>Companies and Agencies of Interest</H3>
          <div className="flex flex-col space-y-5">
            {companiesOfInterestData.map(
              (
                resource: { title: string; description: string; link: string },
                i: number
              ) => {
                return (
                  <div key={i} className="flex flex-col">
                    <H4 left>
                      <Link
                        href={resource.link}
                        target="_blank"
                        className="hover:opacity-60 transition-all hover:transition-all flex flex-row items-center"
                      >
                        <span>{resource.title}</span>
                        <ExternalLinkIcon className="inline w-5 ml-2" />
                      </Link>
                    </H4>
                    <div className="bg-gradient-to-r from-primary to-white h-0.5 w-full rounded-full mt-5"></div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resources;
