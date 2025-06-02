import { Heart } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToWhishlist, removeFromWhishlist } from "../../assets/redux/features/wishlist.slice"

export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false)
    const navigate = useNavigate()
    const  dispatch = useDispatch()

  return <div
    key={product.id}
    className="relative bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
  >
    <img
      onClick={() => navigate(`/product/${product.id}`)}
      src={product.image}
      alt={product.title}
      className="h-48 w-full object-cover cursor-pointer"
    />
    <div className="p-4">
      <h3 className="text-white text-xl font-semibold truncate">{product.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-2 mt-1">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-yellow-400 font-bold text-lg">${product.price}</span>
        <button onClick={() => {
            if (isLiked) {
                dispatch(removeFromWhishlist(product))
             setIsLiked(false)   
            } else{
                dispatch(addToWhishlist(product))
                setIsLiked(true)
            }
        }} className="absolute top-2 right-2">
          <Heart color='red' fill={isLiked ? 'red' : 'none'} />
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold" onClick={() => dispatch(removeFromWhishlist(product))}>remove</button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
}