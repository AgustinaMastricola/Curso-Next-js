import ExploreTrending from "@/components/explore/ExploreTrending"
const hashesList = [
  {
    title: "Argentina",
    counter: 1253
  },
  {
    title: "HolaMundo",
    counter: 1025
  },
  {
    title: "Hola",
    counter: 425
  },
]

const ExplorePage = () => {
  return (
    <div>
      <ExploreTrending hashes={hashesList}/>
    </div>
  )
}

export default ExplorePage