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
        <p className="transition-all hover:opacity-70 hover:cursor-pointer hover:transition-all">
          Join the Mission
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <H4
          mb
          className="text-center"
          subtitle="Be part of our community and share your stories with us"
        >
          Join the Mission
        </H4>
        <JoinMissionForm />
      </DialogContent>
    </Dialog>
  );
}
