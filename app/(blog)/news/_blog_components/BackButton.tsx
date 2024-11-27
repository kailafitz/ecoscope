"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const BackButton = (props: Props) => {
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
