import { LinksType } from "@/types/links.types"
import Link from "next/link"

type MenuProps = {
  links: LinksType[]
}

const Menu = ({links}: MenuProps) => {
  return (
    <nav className= "flex justify-between mb-4 px-8 py-4 bg-gray-100">
      <ul>
        {links.map((link, index)=>(
          <li key={`menu-link-${index}`}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu