"use client";

import Container from "./_custom_components/Layout/Container";
import { H1 } from "./_custom_components/Layout/Headings";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container
      mb
      topSectionPadding
      className="flex flex-col items-center text-center gap-6 min-h-[50vh] justify-center"
    >
      <H1>Something went wrong</H1>
      <p className="text-muted-foreground max-w-md">
        An unexpected error occurred. Please try again, or contact us if the
        problem persists.
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </Container>
  );
}
