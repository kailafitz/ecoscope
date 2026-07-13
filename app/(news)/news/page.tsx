import { H1, H4 } from "@/app/_custom_components/Layout/Headings";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Container from "@/app/_custom_components/Layout/Container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { newsLinks } from "@/data/ExternalNews";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExternalLinkIcon from "@/app/_custom_components/_icons/ExternalLinkIcon";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "News",
    description:
      "Latest sustainability news and insights from across the film, media, and creative industries.",
    path: "/news",
  });
}

export default async function Page() {
  const sortedNewsLinks = newsLinks.sort(function (a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      <Container mb topSectionPadding>
        <div className="mb-8">
          <H1 className="text-2xl font-bold mb-4">Latest News</H1>
          <p className="text-gray-600">Stay updated with the latest sustainability news and insights.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedNewsLinks.map((link, i) => {
            return (
              <Card key={i} className="flex flex-col justify-between space-y-5">
                <CardHeader>
                  <H4 left className="text-gray-600">
                    {link.title}
                  </H4>
                  <p className="text-muted-foreground">{link.source}</p>
                </CardHeader>
                <CardFooter className="flex justify-between items-end pb-5 px-5">
                  <p className="text-muted-foreground">
                    {link.date.toLocaleDateString("en-IE")}
                  </p>
                  <Button asChild>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-end"
                    >
                      <span>Read more</span>
                      <ExternalLinkIcon className="inline w-5 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
}
