import React from 'react'
import Link from 'next/link'
const Newslist = ({news}) => {
  return (
    <div>
    <ul className="news-list">
    {news.map((item) => (
      <li>
        <Link href={`/news/${item.slug}`}>
        <img src={`/images/news/${item.image}`} alt={item.title}></img>
        <span>{item.title}</span>
        </Link>
      </li>
    ))}
  </ul>
    </div>
  )
}

export default Newslist
