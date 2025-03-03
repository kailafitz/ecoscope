"use client";
import { useRef, useState } from "react";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PhoneInput } from "./PhoneInput";
import { Turnstile } from "@marsidev/react-turnstile";
import { joinMissionFormSchema } from "../schemas/joinMissionFormSchema";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  industry: undefined,
  // file: undefined,
  message: "",
};

const JoinMissionForm = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);
  const form = useForm<z.infer<typeof joinMissionFormSchema>>({
    resolver: zodResolver(joinMissionFormSchema),
    defaultValues: defaultValues,
  });

  const turnstileWidget = useRef<HTMLFormElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  // const fileRef = form.register("file");

  // console.log(formRef);
  // console.log(form.getValues("file"));
  console.log("form errors ", form.formState.errors);

  const onSubmit = async () => {
    setLoading(true);

    const formData = new FormData(formRef.current!);
    const token = formData.get("cf-turnstile-response");

    const res = await fetch("/api/verify", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    if (data.success) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_MISSION_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_MISSION_TEMPLATE_ID!,
          formRef.current!,
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
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        noValidate
        method="post"
        encType="multipart/form-data"
        onSubmit={form.handleSubmit(onSubmit)}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-10`}
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
                <PhoneInput
                  id="phone"
                  disabled={loading ? true : false}
                  defaultCountry="IE"
                  {...field}
                />
              </FormControl>
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
                  <SelectItem value="work-with-ecoscope-as-a-sustainability-practitioner">
                    Work with Ecoscope as a Sustainability Practitioner
                  </SelectItem>
                  <SelectItem value="partnership-/-membership-enquiry">
                    Partnership/Membership Enquiry
                  </SelectItem>
                  <SelectItem value="outreach-activity-/-event-enquiry">
                    Outreach Activity/Event Enquiry
                  </SelectItem>
                  <SelectItem value="research-and-development-enquiry">
                    Research and Development Enquiry
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>File upload</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="pdf"
                  className="pl-0 file:mr-3"
                  // {...field}
                  {...fileRef}
                  onChange={(event) => {
                    field.onChange(event.target?.files?.[0] ?? undefined);
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className={`lg:col-span-2`}>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your story. The more information the better!"
                  className="resize-none"
                  disabled={loading ? true : false}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="hidden lg:block"></div>
        <div className="w-full flex flex-end justify-end">
          <Turnstile
            // siteKey={
            //   process.env.TURNSTILE_SITE_KEY
            //     ? process.env.TURNSTILE_SITE_KEY!
            //     : ""
            // }
            as="div"
            siteKey="0x4AAAAAAA_VZ5IUbBYJ9H-U"
            options={{
              action: "submit-form",
              theme: "light",
              size: "normal",
              language: "en",
            }}
            scriptOptions={{
              appendTo: "body",
            }}
          />
        </div>

        <div className="hidden lg:block"></div>
        <div className="flex flex-col items-end justify-end">
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

export default JoinMissionForm;
