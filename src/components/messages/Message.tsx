import { MessageType } from "@/types/message.types";
import Image from "next/image";
import Link from "next/link";

type MessageProps = {
  message: MessageType;
}

const Message = ({message}: MessageProps) => {
  return (
    <div className="flex mt-2">
        <div className="mb-4">
          <Image 
            className="rounded-full"
            src='http://t1.gstatic.com/licenced-image?q=tbn:ANd9GcT3L5jkJ_7glhab3pcVcYBLMpKoIT0nvWLsvlaH4P3QJHCiAoXli8306WqL4EoAYhUDUBJz7JFwpLR_eFrx9Io'
            alt={`Foto de perfil de ${message.name}`}
            width={60}
            height={60}
          />
        </div>
      <div className="flex flex-col ml-4 mt-2">
        <div className="flex space-x-3">
          <h3>{message.name}</h3>
          <div className="text-gray-600 cursor-pointer">
            <Link href={`/users/${message.username}`}>@{message.username}</Link>
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