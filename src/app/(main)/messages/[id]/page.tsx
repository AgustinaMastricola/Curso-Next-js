const MessagesPage = ({params}:{params:{id:string}}) => {
  return (
    <div>Mensaje del usuario: {params.id}</div>
  )
}

export default MessagesPage;