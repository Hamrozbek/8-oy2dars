import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import type { ProductType } from "../@Types/ProductType"
import ProductCard from "../components/ProductCard"
import { PATH } from "../components/PATH"
import { Spin } from "antd"

const HomePage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>()
  const likes = useSelector((state: { like: ProductType[] }) => state.like)
  const saveds = useSelector((state: { saved: ProductType[] }) => state.saved)
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    setLoading(true)
    axios.get("https://api.escuelajs.co/api/v1/products").then(res => {
      setProducts(res.data)
    })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="containers">
      <div className="sticky top-0 z-50 mb-2 bg-[#333] p-5 flex items-center justify-between">
        <h1 className="font-bold text-[20px] md:text-[30px] text-white">Products</h1>
        <div className="flex gap-5">
          <button onClick={() => navigate(PATH.like)} className="bg-red-600 text-white text-[15px] md:text-[18px] p-2 rounded-2xl cursor-pointer">Likes({likes.length})</button>
          <button onClick={() => navigate(PATH.saved)} className="bg-green-600 text-white text-[15px] md:text-[18px] p-2 rounded-2xl cursor-pointer">Saved({saveds.length})</button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Spin size="large" />
        </div>
      ) : (
        <div className="flex flex-wrap justify-between gap-5 p-5">
          {products.map(item => <ProductCard key={item.id} item={item} />)}
        </div>
      )}
    </div>
  )
}

export default HomePage
