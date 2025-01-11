import ActionBanner from "@/app/_custom_components/ActionBanner";
import Container from "@/app/_custom_components/Layout/Container";
import { H1, H4 } from "@/app/_custom_components/Headings";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resources",
    description: "Resources",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

const resourcesData = [
  {
    title: "Screen Ireland: Sustainability Innovation Fund - Pilot",
    description: "Description",
    link: "https://www.screenireland.ie/funding/production-loans/sustainability-innovation-fund-pilot",
  },
  {
    title:
      "Screen Ireland: Sustainability Advisor Initiative for Film & TV Production - Pilot",
    description: "Description",
    link: "https://www.screenireland.ie/funding/production-loans/new-sustainability-advisor-initiative-for-film-tv-production-pilot",
  },
  {
    title: "Screen Ireland: Sustainability Plan",
    description: "Description",
    link: "https://www.screenireland.ie/sustainability",
  },
  {
    title:
      "Albert - The Home of Environmental Sustainability for the Screen Industries.",
    description: "Description",
    link: "https://wearealbert.org/",
  },
  {
    title: "AdGreen - Sustainable Production Made Simple",
    description: "Description",
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
    description: "Description",
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

const Resources = () => {
  return (
    <>
      <Container mb topSectionPadding>
        <H1 mb className="text-center">
          Resources
        </H1>
        <div className="grid grid-cols-3 gap-10">
          {resourcesData.map((resource, i) => {
            return (
              <Card key={i} className="flex flex-col p-5 min-h-[200px]">
                <p className="font-heading mb-5">{`[${i + 1}]`}</p>
                <div className="primary-gradient h-0.5 w-full rounded-full mb-5"></div>
                <H4>
                  <Link
                    href={resource.link}
                    target="_blank"
                    className="hover:opacity-60"
                  >
                    {resource.title}
                  </Link>
                </H4>
                <div className="flex flex-1 flex-row justify-end items-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-square-arrow-out-up-right"
                  >
                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                    <path d="m21 3-9 9" />
                    <path d="M15 3h6v6" />
                  </svg>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
      <ActionBanner />
    </>
  );
};

export default Resources;
