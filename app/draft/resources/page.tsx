import ActionBanner from "@/app/_custom_components/ActionBanner";
import Container from "@/app/_custom_components/Container";
import { H1, H4 } from "@/app/_custom_components/Headings";
import { Metadata } from "next";
import Link from "next/link";

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
        <div className="space-y-3">
          {resourcesData.map((resource, i) => {
            return (
              <H4 key={i} className="">
                <Link href={resource.link} target="_blank">
                  <span className="mr-5">{`[${i + 1}]`}</span>
                  <span>{resource.title}</span>
                  <span>
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
                      className="lucide lucide-square-arrow-out-up-right inline ml-2"
                    >
                      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                      <path d="m21 3-9 9" />
                      <path d="M15 3h6v6" />
                    </svg>
                  </span>
                </Link>
              </H4>
            );
          })}
        </div>
      </Container>
      <ActionBanner />
    </>
  );
};

export default Resources;
