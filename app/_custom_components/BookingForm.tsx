"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingForm = () => {
  const [loading, setLoading] = useState<Boolean>(true);

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    </>
  );
};

export default BookingForm;
