"use client";
import { z } from "zod";

// https://medium.com/@damien_16960/input-file-x-shadcn-x-zod-88f0472c2b81

const MAX_UPLOAD_SIZE = 240 * 320 || 320 * 240; // 50kb
const ACCEPTED_FILE_TYPES = ["application/pdf"];

export const joinMissionFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Please do not use special characters",
      required_error: "Name cannot be blank",
    })
    .regex(/[A-Za-zÀ-ú0-9ა-ჰ一-蠼赋]+/g, "Please enter a valid name")
    .min(2, "Please enter a valid name")
    .max(50, "Please use no more than 50 characters"),
  email: z
    .string({
      invalid_type_error: "Email format should be xxx@xxx.xxx",
      required_error: "Email cannot be blank",
    })
    .email("Email format should be xxx@xxx.xxx")
    .min(2, "Please enter a valid email")
    .max(50, "Please use no more than 50 characters"),
  phone: z
    .string({
      invalid_type_error: "Please do not use special characters",
      required_error: "Phone cannot be blank",
    })
    .regex(/^\+[1-9]\d{10,14}$/, "Please enter a valid phone number")
    .min(10, "Please enter a valid phone number")
    .max(14, "Please enter a valid phone number"),
  companyName: z
    .string({
      invalid_type_error: "Please do not use special characters",
    })
    .regex(/^[a-zA-Z0-9]{2,50}$/g, "Please enter a valid company name")
    .min(2, "Please enter a valid company name")
    .max(50, "Please use no more than 50 characters")
    .or(z.string().max(0)),
  industry: z
    .enum(
      [
        "work-with-ecoscope-as-a-sustainability-practitioner",
        "partnership-/-membership-enquiry",
        "outreach-activity-/-event-enquiry",
        "research-and-development-enquiry",
        "other",
      ],
      {
        invalid_type_error: "Please only select one of the options provided",
      }
    )
    .optional(),
  file: z
    .instanceof(FileList)
    // .refine((file) => file?.length == 1, "File is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_UPLOAD_SIZE,
      `Max file size is 1MB`
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Only PDF files are accepted"
    ),
  message: z
    .string({ invalid_type_error: "Please do not use special characters" })
    .regex(/[A-Za-zÀ-ú0-9ა-ჰ一-蠼赋]+/g, "Please do not use special characters")
    .min(10, "If you wish to send further info, please provide more context")
    .max(100, "Please use no more than 100 characters")
    .or(z.string().max(0)),
});
