import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import CoverImage from "./CoverImage";
import DateComponent from "./Date";
import { H4 } from "@/app/_custom_components/Layout/Headings";
import { NewsCardProps } from "@/app/interfaces";
import PropTypes from "prop-types";

const NewsCard: React.FC<NewsCardProps> = (props) => {
  return (
    <article
      key={props._id}
      className={`group flex flex-col rounded-lg text-left shadow-lg`}
    >
      <Card className="max-w-full w-[300px] flex flex-col relative rounded-lg shadow-none bg-white">
        <Link href={`/news/posts/${props.slug}`}>
          <CoverImage image={props.coverImage} priority={false} card />
        </Link>

        <div className={`flex flex-col p-5`}>
          <p className={`font-body text-md md:text-sm text-primary`}>
            {props.industry}
          </p>
          <H4 left>
            <Link
              href={`/news/posts/${props.slug}`}
              className="hover:opacity-60"
            >
              {props.title}
            </Link>
          </H4>
          <div className="text-base">
            <DateComponent dateString={props.date} />
          </div>
        </div>
      </Card>
    </article>
  );
};

NewsCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  // coverImage: ,
};

export default NewsCard;