import { DUMMY_NEWS } from "@/dummy";
import React from "react";
import Link from "next/link";
const page = ({ params }) => {
  const dum = DUMMY_NEWS.find((item) => item.slug === params.id);
  return (
    <div className="details">
      <Link href={`/news/${dum.slug}/image`}>
        <img src={`/images/news/${dum.image}`} />
      </Link>
      <h1>{dum.title}</h1>
      <h3>{dum.date}</h3>
      <p>{dum.content}</p>
    </div>
  );
};

export default page;
