import UserTabs from "@/components/users/UserTabs";
import Link from "../../../../../node_modules/next/link";
import { User } from "@/types/user.types";
import Image from "../../../../../node_modules/next/image";

const getUserData = async (username:string): Promise<User> => {
  const res = await fetch(`http://localhost:8080/api/public/users/${username}`)
  if(!res.ok){
    throw new Error("No se encontró el usuario")
  }
  return res.json()
}

const UserPage = async ({params}:{params: {username: string}}) => {
  const user = await getUserData(params.username)
  
  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <div className="mb-4 block relative w-20 h-20">
          <Image 
            className="rounded-full"
            src={'hola'}
            alt={`Foto de perfil de ${user.name}`}
            fill
            priority
            placeholder="blur"
          />
        </div>
        <h2 className="mb-1">{user.name}</h2>
        <div className="text-md mb-4 text-gray-600 cursor-pointer">
          <Link href={`/users/${user.username}`}>@{user.username}</Link>
        </div>
        <div className="mb-4">{user.bio}</div>

        <div className="flex justify-between mb-4">
          <div>
            <span className="font-semibold">{user.followersCount} </span>Seguidores
          </div>
          <div>
            <span className="font-semibold">{user.followingCount} </span>Seguidos
          </div>
        </div>
      </section>
      
      <UserTabs messages={[]}replies={[]}/>
    </main>
  )
}
export default UserPage;