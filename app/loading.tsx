import Container from "./_custom_components/Layout/Container";

export default function Loading() {
  return (
    <Container
      mb
      topSectionPadding
      className="flex flex-col items-center justify-center min-h-[50vh]"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </Container>
  );
}
