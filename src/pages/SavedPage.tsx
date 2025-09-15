import { useSelector } from "react-redux"
import type { ProductType } from "../@Types/ProductType"
import ProductCard from "../components/ProductCard"
import PageComponent from "../components/pageComponent"

const SavedPage = () => {
  const saveds = useSelector((state: { saved: ProductType[] }) => state.saved)

  return (
    <div className="containers">
      <PageComponent title={"Saqlanganlar"}/>
      <div className="px-5 flex flex-wrap justify-between gap-5">
        {saveds.length > 0
          ? saveds.map(item => <ProductCard key={item.id} item={item} />)
          : <p className="text-white">Hozircha hech narsa yoq</p>
        }
      </div>
    </div>
  )
}

export default SavedPage
