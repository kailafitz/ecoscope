"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = () => {
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
          form.reset(defaultValues); // clear the fields after submission
        },
        (error) => {
          console.warn("FAILED...", JSON.stringify(error));
        }
      );
    // }
  };

  // const wrapperFunction = (e: React.FormEvent<HTMLFormElement>) => {
  //   console.log("Hi");
  //   e.preventDefault();
  //   form.handleSubmit(onSubmit);
  // };

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex-1 grid grid-cols-1 ${props.homepage ? "md:grid-cols-3" : "md:grid-cols-1 lg:grid-cols-2"} gap-x-5 gap-y-10 sm:gap-x-10`}
        id="booking-form"
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
                  placeholder="Hi there!"
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
            <FormItem>
              <FormLabel>* Phone</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="1234567890"
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
              <FormLabel>* Company Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="company-name"
                  placeholder=""
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
              <FormLabel>* Industry</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="film">Film</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
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
              <FormLabel>* Company Size</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
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
              <FormLabel>Certification</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="certification"
                  placeholder="ESG, CPD, etc."
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
        <div className="hidden md:grid"></div>
        <div className="hidden md:grid"></div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>More Information</FormLabel>
              <FormControl>
                <Textarea
                  // defaultValue={field.value}
                  placeholder="Write your messager here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please inform us of any other important information
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col justify-end">
          <Button>Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default BookingForm;
