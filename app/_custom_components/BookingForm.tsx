"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./FormSchema";
import { PhoneInput } from "./PhoneInput";

type Props = {
  homepage?: boolean;
};

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  certification: "",
  industry: undefined,
  companySize: undefined,
  message: "",
};

const BookingForm = (props: Props) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = () => {
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.getValues(),
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          form.resetField("industry");
          form.reset();
          setTimeout(() => {
            setLoading(false);
          }, 2000);

          setTimeout(() => {
            setSuccess(true);
          }, 2000);

          setSuccess(false);
        },
        (error) => {
          console.warn("FAILED...", JSON.stringify(error));
        }
      );
  };

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className={`grid grid-cols-1 ${props.homepage ? "md:grid-cols-3" : "lg:grid-cols-2"} gap-x-5 gap-y-10 sm:gap-x-10`}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="name"
                  placeholder=""
                  disabled={loading ? true : false}
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  id="email"
                  placeholder="xxxx@xxx.xxxx"
                  disabled={loading ? true : false}
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>* Phone</FormLabel>
              <FormControl>
                {/* <Input
                      type="tel"
                      id="phone"
                      placeholder="1234567890"
                      {...field}
                    /> */}
                <PhoneInput
                  id="phone"
                  disabled={loading ? true : false}
                  defaultCountry="IE"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="company-name"
                  placeholder=""
                  disabled={loading ? true : false}
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem key={field.value}>
              <FormLabel>Industry</FormLabel>
              <Select
                onValueChange={(value) => value && field.onChange(value)}
                defaultValue={field.value}
                value={field.value}
                disabled={loading ? true : false}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="film">Film</SelectItem>
                  <SelectItem value="advertising">Advertising</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companySize"
          render={({ field }) => (
            <FormItem key={field.value}>
              <FormLabel>Company Size</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
                disabled={loading ? true : false}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-10">0-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="201-500">201-500</SelectItem>
                  <SelectItem value="501-1000">501-1000</SelectItem>
                  <SelectItem value="1001-5000">1001-5000</SelectItem>
                  <SelectItem value="5001-10000">5001-10,000</SelectItem>
                  <SelectItem value="10001+">10,000 +</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="certification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Are you enquiring about Certification or Carbon Reporting?
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="certification"
                  placeholder="e.g. Albert, AdGreen, ESG"
                  disabled={loading ? true : false}
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                Is there a particular certification 
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div
          className={`hidden ${props.homepage ? "md:grid" : "lg:grid"}`}
        ></div>
        <div
          className={`hidden ${props.homepage ? "md:grid" : "lg:grid"}`}
        ></div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem
              className={` ${props.homepage ? "md:col-span-2" : "lg:col-span-2"}`}
            >
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  // defaultValue={field.value}
                  placeholder="Share your story. The more information the better!"
                  className="resize-none"
                  disabled={loading ? true : false}
                  {...field}
                />
              </FormControl>
              {/* <FormDescription></FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col justify-end">
          <Button
            disabled={loading || success ? true : false}
            className={success && "bg-green-500 disabled:opacity-100"}
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : success ? (
              <Check />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BookingForm;
