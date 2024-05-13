import UserTabs from "@/components/users/UserTabs";
import Image from "next/image";
import Link from "next/link";
import imageProfile from "../../../../../public/agus-profile.jpg"

const UserPage = ({params}:{params: {username: string}}) => {
  const user = {
    username: params.username,
    name: "Agustina Mastricola",
    bio: "Yo soy ...",
    followersCount: 5,
    followingCount: 10,
    messages: [
      {
        name: "Juliana Rodriguez",
        username:"juliRodriguez",
        message: "Hola Agus, hoy tenemos reunion",
        repliesCount: 2
      },
      {
        name: "Carla Fernandez",
        username:"carfernandez",
        message: "Hola Agus, vas a la reunion de hoy?",
        repliesCount: 3
      }
    ],
    replies: [
      {
        message: "Siii, nos vemos a las 16 hs.",
        repliesCount: 0
      },
      {
        message: "Si!! vos vas?",
        repliesCount: 0
      },
    ]
  }

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <div className="mb-4 block relative w-20 h-20">
          <Image 
            className="rounded-full"
            src={imageProfile} 
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
      
      <UserTabs messages={user.messages} replies={[]}/>
    </main>
  )
}
export default UserPage;