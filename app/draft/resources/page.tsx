import ActionBanner from "@/app/_custom_components/ActionBanner";
import Container, {
  containerMb,
} from "@/app/_custom_components/Layout/Container";
import { H1, H3, H4 } from "@/app/_custom_components/Headings";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import ExternalLinkIcon from "@/app/_custom_components/_icons/ExternalLinkIcon";
import { Button } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resources",
    description: "Resources",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

const resourcesCompaniesData = [
  {
    title: "Albert",
    description:
      "The Home of Environmental Sustainability for the Screen Industries",
    link: "https://wearealbert.org/",
  },
  {
    title: "AdGreen",
    description: "Sustainable Production Made Simple",
    link: "https://www.weareadgreen.org/",
  },
  {
    title: "Commercial Producers Ireland",
    description: "Description",
    link: "https://www.commercialproducersireland.com/",
  },
  {
    title: "Global Production Network",
    description: "Description",
    link: "https://www.globalproductionnetwork.com/",
  },
  {
    title: "Screen Producers Ireland",
    description: "Description",
    link: "https://www.screenproducersireland.com/",
  },
  {
    title: "Safe to Create",
    description:
      "A PROGRAMME FOR THE IRISH ARTS AND CREATIVE SECTORS TO PROMOTE DIGNITY AT WORK",
    link: "https://www.safetocreate.ie/",
  },
  {
    title: "Minding Creative Minds",
    description: "Description",
    link: "https://mindingcreativeminds.ie/",
  },
  {
    title: "National Talent Academies",
    description: "Description",
    link: "https://www.nationaltalentacademies.ie/",
  },
  {
    title: "Green Toolkit",
    description: "Description",
    link: "https://www.greentoolkit-filmtv.eu/",
  },
  {
    title: "Sustainable Media",
    description: "Description",
    link: "https://sustainablemedia.ie/",
  },
  {
    title: "AdnetZero",
    description: "Description",
    link: "https://adnetzero.com/",
  },
];

const resourcesData = [
  {
    title: "Sustainability Innovation Fund - Pilot",
    source: "Screen Ireland",
    link: "https://www.screenireland.ie/funding/production-loans/sustainability-innovation-fund-pilot",
  },
  {
    title: "Sustainability Advisor Initiative for Film & TV Production - Pilot",
    source: "Screen Ireland",
    link: "https://www.screenireland.ie/funding/production-loans/new-sustainability-advisor-initiative-for-film-tv-production-pilot",
  },
  {
    title: "Sustainability Plan",
    source: "Screen Ireland",
    link: "https://www.screenireland.ie/sustainability",
  },
];

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
            {resourcesData.map((resource, i) => {
              return (
                <Card key={i} className="flex flex-col p-5 min-h-[200px]">
                  <p className="font-heading mb-5">{`[${i + 1}]`}</p>
                  <div className="primary-gradient h-0.5 w-full rounded-full mb-5"></div>
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
            })}
          </div>
        </div>

        <div>
          <H3 mb>Companies and Agencies of Interest</H3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {resourcesCompaniesData.map((resource, i) => {
              return (
                <Card key={i} className="flex flex-col p-5 space-y-5">
                  {/* <p className="font-heading mb-5">{`[${i + 1}]`}</p>
                  <div className="primary-gradient h-0.5 w-full rounded-full mb-5"></div> */}
                  <H4 left>
                    <Link
                      href={resource.link}
                      target="_blank"
                      className="hover:opacity-60"
                    >
                      {resource.title}
                    </Link>
                  </H4>
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
            })}
          </div>
        </div>
      </Container>
      <ActionBanner />
    </>
  );
};

export default Resources;
