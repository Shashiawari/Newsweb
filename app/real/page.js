import React from "react";
import getNews from "@/lib/globalnews";
import Realtime from "@/components/Realtime";
import "../globals.css";
const page = async () => {
  const data = await getNews();

  return (
    <div>
      <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Latest News For You
      </h1>
      <Realtime data={data} />
    </div>
  );
};

export default page;
