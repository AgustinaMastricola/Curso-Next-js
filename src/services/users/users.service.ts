import { MessageType } from "@/types/message.types"
import { PageType } from "@/types/pagination.types"
import { UserType } from "@/types/user.types"
import { httpGet } from "../common/http.service"

class UserAPI {
    getUserData = async (username:string): Promise<UserType> => 
        httpGet(`users/${username}`)
    getUserMessages = async (username:string): Promise<PageType<MessageType>> => 
        httpGet(`users/${username}/messages`)
    getUserReplies = async (username:string): Promise<PageType<MessageType>> => 
        httpGet(`users/${username}/messages/replies`)
}

const userAPI = new UserAPI();
export default userAPI;