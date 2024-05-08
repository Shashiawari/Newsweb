import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/dummy";
import Newslist from "@/components/newlist";

const Page = async () => {
  // Handle the fetched data as needed

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>News</h1>
      <p style={{ textAlign: "center" ,textTransform:"uppercase"}}>Page on bulit Visit <Link href={"/real"}>realtime news</Link></p>
      <Newslist news={DUMMY_NEWS} />
    </div>
  );
};

export default Page;
