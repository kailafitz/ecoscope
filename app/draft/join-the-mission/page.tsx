import Container, { containerMb } from "@/app/_custom_components/Container";
import { H1 } from "@/app/_custom_components/Headings";
import JoinMissionForm from "@/app/_custom_components/JoinMissionForm";

type Props = {};

const JoinTheMission = (props: Props) => {
  return (
    <Container topSectionPadding>
      <H1
        mb
        className="text-center"
        subtitle="Be part of our community and share your stories with us"
      >
        Join the Mission
      </H1>
      <div className={`max-w-3xl mx-auto ${containerMb}`}>
        <JoinMissionForm />
      </div>
    </Container>
  );
};

export default JoinTheMission;
