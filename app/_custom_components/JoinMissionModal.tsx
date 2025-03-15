import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import JoinMissionForm from "./JoinMissionForm";
import { H4 } from "./Layout/Headings";

const JoinMissionModal: React.FC = () => {
  return (
    <Dialog aria-describedby="join-mission-modal">
      <DialogTrigger asChild>
        <a className="transition-all hover:text-foreground hover:cursor-pointer hover:transition-all text-lg md:text-base" href="#join-mission-modal">
          Join the Mission
        </a>
      </DialogTrigger>
      <DialogContent
        id="join-mission-modal"
        title="Join the Mission"
        className="max-h-[80%] md:max-h-[95%] w-[90%] lg:max-w-[700px] overflow-y-scroll"
      >
        <DialogTitle>
          <H4
            mb
            className="text-center"
            subtitle="Become a part of our community and share your stories with us"
          >
            Join the Mission
          </H4>
        </DialogTitle>
        <JoinMissionForm />
      </DialogContent>
    </Dialog>
  );
};

export default JoinMissionModal;
