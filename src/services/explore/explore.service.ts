import { PageType } from "@/types/pagination.types"
import { httpGet } from "../common/http.service"
import { Hashtag } from "@/types/tending.types"
import { URLSearchParams } from "url"

class ExploreAPI {
    getTrendingHashtag = async (page:number, size:number): Promise<PageType<Hashtag>> => 
        httpGet(`explore/trending`, new URLSearchParams({page: `${page}`, size: `${size}`}))
}

const exploreAPI = new ExploreAPI();
export default exploreAPI;