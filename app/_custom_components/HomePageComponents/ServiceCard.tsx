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
      className="flex flex-col justify-between w-full md:max-w-[350px]"
    >
      <CardHeader className="text-center [&_svg]:block [&_svg]:mx-auto [&_svg]:w-28 [&_svg]:h-28 [&_svg]:mb-7 [&_svg]:text-primary">
        {props.icon}
        <CardTitle className="mb-4">{props.name}</CardTitle>
        <CardDescription className="text-center">
          {props.description}
        </CardDescription>
      </CardHeader>
      <div className="space-y-2.5 pb-6 pl-6 pr-6">
        {props.href && (
          <CardFooter className="flex justify-end">
            <EcoscopeButton full href={props.href ? props.href : " "}>
              Read more
            </EcoscopeButton>
          </CardFooter>
        )}
      </div>
    </Card>
  );
};

export default ServiceCard;
