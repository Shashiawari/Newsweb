import React from "react";
import Image from "next/image";
import getNews from "@/lib/globalnews";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import Link from "next/link";
import "../app/globals.css"
const Realtime = ({ data }) => {
    // Assuming data is an object containing an array of news articles under the key 'articles'
    const articles = data.articles;
  
    return (
      <div className='outer'>
        {articles.map((article, index) => (
          <div className='inner' key={index}>
            <h1>{article.title}</h1>
            <p>{article.publishedAt}</p>
            <img src={article.urlToImage} className="img-fluid" alt={article.title} width={300} height={200} />
            <p>{article.description}</p>
            <button><Link href={article.url}>View More</Link></button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Realtime;
  
