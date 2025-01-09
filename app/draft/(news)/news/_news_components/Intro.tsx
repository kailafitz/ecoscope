import { H1 } from "@/app/_custom_components/Headings";
import React from "react";

const Intro = () => {
  return (
    <section className="mb-16 lg:mb-12">
      <H1 mb className="text-left">
        News
      </H1>
      <p className="w-full lg:w-2/3">
        Welcome to our News page, your gateway to the latest updates, stories,
        and insights from our company. Stay informed about the milestones,
        events, and initiatives that shape our journey. From industry trends to
        behind-the-scenes highlights, we&#39;re here to keep you in the know.
        Our commitment to sharing timely and accurate information ensures
        you&#39;re always up-to-date. Dive in and discover what&#39;s new and
        noteworthy today!
      </p>
    </section>
  );
};

export default Intro;