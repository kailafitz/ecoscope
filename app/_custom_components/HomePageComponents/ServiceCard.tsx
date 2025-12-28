import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EcoscopeButton from "../Layout/EcoscopeButton";
import { ServiceProps } from "@/app/interfaces";

const ServiceCard: React.FC<ServiceProps> = (props) => {
  return (
    <Card
      data-aos="fade-up"
      data-aos-delay={props.i * 100}
      className="flex flex-col justify-between w-full"
    >
      <CardHeader className="text-center flex flex-row gap-x-5 items-end [&_svg]:block [&_svg]:w-20 [&_svg]:h-auto [&_svg]:text-primary">
        {props.icon}
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardDescription className="text-left">
        {props.description}
      </CardDescription>
      {/* <div className="space-y-2.5 pb-6 pl-6 pr-6">
        {props.href && (
          <CardFooter className="flex justify-end">
            <EcoscopeButton full href={props.href ? props.href : " "}>
              {props.name}
            </EcoscopeButton>
          </CardFooter>
        )}
      </div> */}
    </Card>
  );
};

export default ServiceCard;
