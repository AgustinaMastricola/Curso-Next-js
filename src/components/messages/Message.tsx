import { MessageType } from "@/types/message.types";
import Image from "next/image";
import Link from "next/link";

type MessageProps = {
  message: MessageType;
}

const Message = ({message}: MessageProps) => {
  return (
    <div className="flex mt-2">
      <div className="mb-4 w-2/12">
        <Image 
          className="rounded-full"
          src={`${message.user.photoUrl}`}
          alt={`Foto de perfil de ${message.user.name}`}
          priority
          width={48}
          height={48}
        />
      </div>
      <div className="flex flex-col mt-2 w-9/12">
        <div className="flex space-x-3">
          <h3>{message.user.name}</h3>
          <div className="text-gray-600 cursor-pointer">
            <Link href={`/users/${message.user.username}`}>@{message.user.username}</Link>
          </div>
        </div>
        <p>
          {message.message}
        </p>
      </div>
    </div>
  )
}

export default Message;