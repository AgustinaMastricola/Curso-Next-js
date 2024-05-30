import UserTabs from "@/components/users/UserTabs";
import Link from "../../../../../node_modules/next/link";
import Image from "../../../../../node_modules/next/image";
import { getUserData, getUserMessages } from "@/services/api.service";

const UserPage = async ({params}:{params: {username: string}}) => {
  const user = await getUserData(params.username)
  const userMessages = await getUserMessages(params.username)
  
  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <div className="mb-4 block relative w-20 h-20">
          <Image 
            className="rounded-full"
            src={user.photoUrl}
            alt={`Foto de perfil de ${user.name}`}
            fill
            priority
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
      
      <UserTabs messages={userMessages.content}replies={[]}/>
    </main>
  )
}
export default UserPage;