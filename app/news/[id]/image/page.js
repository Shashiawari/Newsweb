import React from "react";
import { DUMMY_NEWS } from "@/dummy";
import Link from "next/link";
const Images = ({ params }) => {
  const img = DUMMY_NEWS.find((item) => item.slug === params.id);
  return (
    <div className="fullscreen-image">
     
        <img src={`/images/news/${img.image}`} alt={img.id} />
    
    </div>
  );
};

export default Images;
