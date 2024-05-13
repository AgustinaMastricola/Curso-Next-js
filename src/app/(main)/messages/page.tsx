import Message from "@/components/messages/Message";

const MessagesPage = () => {
  const messages = [
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
  ]

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
      <div>
          {messages.map((message, index)=>(
            <Message key={index} message={message}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default MessagesPage;