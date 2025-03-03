import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import JoinMissionForm from "../JoinMissionForm";
import { H4 } from "../Headings";

export function JoinMissionModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="transition-all hover:text-foreground hover:cursor-pointer hover:transition-all text-lg md:text-base">
          Join the Mission
        </a>
      </DialogTrigger>
      <DialogContent className="max-h-[80%] md:max-h-[95%] w-[90%] lg:max-w-[700px] overflow-y-scroll">
        <div>
          <H4
            mb
            className="text-center"
            subtitle="Become a part of our community and share your stories with us"
          >
            Join the Mission
          </H4>
        </div>
        <JoinMissionForm />
      </DialogContent>
    </Dialog>
  );
}
