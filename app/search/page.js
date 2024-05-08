"use client";
import Realtime from "@/components/Realtime"; // Importing Realtime component
import "../globals.css"; // Importing global styles
import getEverything from "@/lib/geteverything"; // Importing data fetching function
import React, { useState } from "react"; // Importing React and useState

const Page = () => {
  const [data, setData] = useState(null); // State for storing data
  const [text, setText] = useState(""); // State for input text

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const newData = await getEverything(text); // Fetch data based on input text
    setData(newData); // Update state with fetched data
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form my-4">
        <label htmlFor="in">Search Something Interesting</label>
        <input
          id="in"
          placeholder="Try India..."
          type="text"
          name="gettext"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }} className="my-5">
          Results
        </h1>
        {data ? <Realtime data={data} /> : "Search Something"}
      </div>
    </div>
  );
};

export default Page; // Exporting Page component
