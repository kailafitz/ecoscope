"use client";
import React, { useRef, useEffect } from "react";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  homepage?: boolean;
};

const BookingForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      industry: undefined,
      companySize: undefined,
      message: "",
    },
  });

  const test = form.watch();

  useEffect(() => {
    console.log("watch ", test);
    console.log(form.formState.errors);
  }, [test]);

  const formRef = useRef(null);

  const onSubmit = () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          // "service_5ray5ke",
          // "template_rl67ufg",
          formRef.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            form.reset(); // clear the fields after submission
          },
          (error) => {
            console.warn("FAILED...", JSON.stringify(error));
          }
        );
    }
  };

  return (
    <Form {...form}>
      <form
        noValidate
        ref={formRef}
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
                  placeholder="+123456789"
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
            <FormItem>
              <FormLabel>* Industry</FormLabel>
              <Select onValueChange={field.onChange}>
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
            <FormItem>
              <FormLabel>* Company Size</FormLabel>
              <Select onValueChange={field.onChange}>
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
