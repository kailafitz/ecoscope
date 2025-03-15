"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton: React.FC = () => {
  const navigate = useRouter();
  return (
    <button
      onClick={() => navigate.back()}
      className="hover:opacity-40 transition-all hover:transition-all mb-10 text-base"
    >
      Back to News
    </button>
  );
};

export default BackButton;
