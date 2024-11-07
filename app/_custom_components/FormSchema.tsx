"use client";

import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  phone: z.string().min(10).max(10),
  companyName: z.string().min(2).max(50),
  industry: z.enum(["Film", "Commercial", "Hospitality", "Other"]),
  certification: z.string().min(2).max(50),
  companySize: z.enum([
    "0-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1001-5000",
    "5001-10000",
    "10001+",
  ]),
  message: z.string().min(2).max(500),
});
