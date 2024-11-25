"use client";
import { z } from "zod";

export const formSchema = z.object({
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
      required_error: "Company Name cannot be blank",
    })
    .regex(/^[a-zA-Z0-9]{2,50}$/g, "Please enter a valid company name")
    .min(2, "Please enter a valid company name")
    .max(50, "Please use no more than 50 characters"),
  industry: z.enum(["film", "advertising", "hospitality", "other"], {
    invalid_type_error: "Please only select one of the options provided",
    required_error: "Please select an option",
  }),
  companySize: z.enum(
    [
      "0-10",
      "11-50",
      "51-200",
      "201-500",
      "501-1000",
      "1001-5000",
      "5001-10000",
      "10001+",
    ],
    {
      invalid_type_error: "Please only select one of the options provided",
      required_error: "Please select an option",
    }
  ),
  certification: z
    .string({ invalid_type_error: "Please do not use special characters" })
    .regex(/[A-Za-zÀ-ú0-9ა-ჰ一-蠼赋]+/g, "Please do not use special characters")
    .min(2, "Please use more than 2 characters")
    .max(50, "Please use no more than 50 characters")
    .or(z.string().max(0)),
  message: z
    .string({ invalid_type_error: "Please do not use special characters" })
    .regex(/[A-Za-zÀ-ú0-9ა-ჰ一-蠼赋]+/g, "Please do not use special characters")
    .min(10, "If you wish to send further info, please provide more context")
    .max(100, "Please use no more than 100 characters")
    .or(z.string().max(0)),
});
