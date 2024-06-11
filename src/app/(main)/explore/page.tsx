import ExploreTrending from "@/components/explore/ExploreTrending"
import exploreAPI from "@/services/explore/explore.service"

const ExplorePage = async () => {
  const hashes = await exploreAPI.getTrendingHashtag(0,3)
  return (
    <div>
      <ExploreTrending hashes={hashes.content}/>
    </div>
  )
}

export default ExplorePage