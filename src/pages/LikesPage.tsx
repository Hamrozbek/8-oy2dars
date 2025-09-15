import { useSelector } from "react-redux"
import type { ProductType } from "../@Types/ProductType"
import ProductCard from "../components/ProductCard"
import PageComponent from "../components/pageComponent"

const LikePage = () => {
  const likes = useSelector((state: { like: ProductType[] }) => state.like)

  return (
    <div className="containers">
      <PageComponent title="Likelar"/>
      <div className="px-5 flex flex-wrap justify-between gap-5">
        {likes.length > 0
          ? likes.map(item => <ProductCard key={item.id} item={item} />)
          : <p className="text-white">Hozircha hech narsa yoq</p>
        }
      </div>
    </div>
  )
}

export default LikePage
