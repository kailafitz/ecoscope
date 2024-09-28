"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState } from "react";

const BookingForm = () => {
  const [loading, setLoading] = useState<Boolean>(true);

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <iframe
        id="book-a-consultation"
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3I9y0PE6xsbT-FHTUoVAdqD3NYlvN1fRBHrNwFNvTTKwM0Tnd9qMwJQbNq3Amb-Y713xf5ZW1t?gv=true"
        style={{ border: 0 }}
        width="100%"
        className={`${
          loading ? "hidden" : ""
        } w-full lg:w-3/4 google-meet-iframe`}
        onLoad={handleLoading}
      ></iframe>
      {loading && <Skeleton className="w-full lg:w-3/4" />}
    </>
  );
};

export default BookingForm;
