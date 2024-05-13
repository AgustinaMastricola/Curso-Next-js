"use client"
import { MessageType } from "@/types/message.types";
import Message from "../messages/Message";
import { useState } from "react";

enum TabView {
  MESSAGES, REPLIES
}
type UserTabsProps = {
  replies: MessageType[]; 
  messages: MessageType[];
}
const UserTabs = ({messages, replies}:UserTabsProps) => {
  const [tab, setTab] = useState<TabView>(TabView.MESSAGES)
  return (
    <div>
      <div className="flex justify-evenly mb-4">
        <div onClick={()=>setTab(TabView.MESSAGES)} className={`cursor-pointer ${tab === TabView.MESSAGES ? 'border-blue-400 border-b-4' : 'border-none'}`}>Mensajes</div>
        <div onClick={()=>setTab(TabView.REPLIES)} className={`cursor-pointer ${tab === TabView.REPLIES ? 'border-blue-400 border-b-4' : 'border-none'}`}>Respuestas</div>
      </div>

      <div>
        {tab === TabView.MESSAGES && messages.map((message, index)=>(
          <Message key={index} message={message}/>
        ))}
        {tab === TabView.REPLIES && replies.map((replie, index)=>(
          <Message key={index} message={replie}/>
        ))}

      </div>
    </div>
  )
}

export default UserTabs