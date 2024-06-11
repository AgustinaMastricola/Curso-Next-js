import { PageType } from "@/types/pagination.types"
import { httpGetPublic } from "../common/http.service"
import { TrendingHashtag } from "@/types/trending.types"
import { URLSearchParams } from "url"

class ExploreAPI {
    getTrendingHashtag = async (page:number, size:number): Promise<PageType<TrendingHashtag>> => 
        httpGetPublic(`/explore/trending`, new URLSearchParams({page: `${page}`, size: `${size}`}))
    getFollowRecomendations = async (page:number, size:number): Promise<PageType<TrendingHashtag>> => 
        httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({page: `${page}`, size: `${size}`}))
}

const exploreAPI = new ExploreAPI();
export default exploreAPI;