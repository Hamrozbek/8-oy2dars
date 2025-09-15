import type { FC } from "react"
import type { ProductType } from "../@Types/ProductType"
import { useDispatch } from "react-redux"
import { collectLikeList } from "../store/likeSlice"
import { collectSavedList } from "../store/savedSlice"

const ProductCard:FC<{item:ProductType}> = ({item}) => {
  const dispatch = useDispatch()

  return (
    <div className="w-[300px] p-4 rounded-2xl bg-slate-300">
        <img className="mb-[20px]" src={item.images[0]} alt="product img" width={300} height={300} />
        <div>
            <h2 className="text-[22px] w-full h-[30px] font-bold line-clamp-1">{item.title}</h2>
            <p className="line-clamp-3 mb-1 w-full h-[90px]">{item.description}</p>
            <p className="mb-1 text-[18px] w-full h-[20px]"><span className="font-bold">Price:</span> <span className="text-red-600 font-semibold">{item.price}$</span></p>
            <p className="font-semibold text-[18px] mb-2 w-full h-[20px]">{item.creationAt.split("T")[0]}💔{item.creationAt.split("T")[1].split(".")[0]}</p>
            <div className="flex items-center justify-between">
                <button onClick={() => dispatch(collectLikeList(item))} className="w-[40%] p-2 border-[2px] border-slate-600 text-slate-600 text-[18px] font-semibold rounded-2xl cursor-pointer">Liked</button>
                <button onClick={() => dispatch(collectSavedList(item))} className="w-[40%] p-2 border-[2px] border-slate-600 text-slate-600 text-[18px] font-semibold rounded-2xl cursor-pointer">Saved</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
