'use client'
import Link from "next/link"
import PostsCounter from "../counters/PostsCounter"
import { TrendingHashtag } from "@/types/trending.types"
import { useState } from "react";

type ExploreTrendingProps = {
  hashes: TrendingHashtag[];
}
const ExploreTrending = ({hashes}:ExploreTrendingProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleHashes = showAll ? hashes : hashes.slice(0, 2);
  
  const handleShowMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-1/2 bg-slate-300 rounded-md p-3 m-2">
      <h2 className="my-3 mx-5">Trending</h2>
      {
        visibleHashes.map((hash, index) => (
          <div className="mb-3 mx-5" key={`trending-hash ${index}`}>
            <Link href={`/mensajes?query=${hash.hash}&type=hash`}>
              <h4 className="font-semibold cursor-pointer">{hash.hash}</h4>
            </Link>
            <PostsCounter count={hash.count}/>
          </div>
        ))
      }
      {
        hashes.length > 2 && !showAll && (
          <Link href="/explore?type=hash" onClick={handleShowMoreClick}>
            <div className="link-primary mx-5">
              Ver más
            </div>
          </Link>
        )
      }
      {
        showAll && (
          <Link href="/explore?type=hash" onClick={handleShowMoreClick}>
            <div className="link-primary mx-5">
              Ver menos
            </div>
          </Link>
        )
      }      
    </div>
  )
}
export default ExploreTrending