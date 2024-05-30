import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { UserType } from "@/types/user.types"

const API_URL = 'http://localhost:8080/api';
const API_URL_PUBLIC = `${API_URL}/public`

export const getUserData = async (username:string): Promise<UserType> => {
    const res = await fetch(`${API_URL_PUBLIC}/users/${username}`)
    if(!res.ok){
      throw new Error("No se encontró el usuario")
    }
    return res.json()
}
export const getUserMessages = async (username:string): Promise<PageType<MessageType>> => {
    const res = await fetch(`${API_URL_PUBLIC}/users/${username}/messages`)
    if(!res.ok){
      throw new Error("No se encontró el mensaje")
    }
    return res.json()
}