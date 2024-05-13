type PostsCounterProps = {
  count: number;
}
const PostsCounter = ({count}: PostsCounterProps) => {
  const label = count === 1 ? `${count} posteo` : `${count} posteos`;
  return (
    <div>
      {label}
    </div>
  )
}

export default PostsCounter