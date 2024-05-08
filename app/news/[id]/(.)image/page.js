"use client";
import "@/app/globals.css"
import React from "react";
import { DUMMY_NEWS } from "@/dummy";
import Link from "next/link";
import { useRouter } from "next/navigation";
const InterceptedImages = ({ params }) => {
  const router = useRouter();
  const img = DUMMY_NEWS.find((item) => item.slug === params.id);

  return (
    <div className="modal-backdrop" onClick={router.back}>
      <div className="modal">
        <div className="fullscreen-image">
          <img src={`/images/news/${img.image}`}  alt={img.id} />
        </div>
      </div>
    </div>
  );
};

export default InterceptedImages;
