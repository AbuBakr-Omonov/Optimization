import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../product/ProductCard'

const Wishlist = () => {
  const wishlist = useSelector(state => state.counterSlice.whishlist) || []

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4 md:px-10">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">
        Wishlist ({wishlist.length})
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No items in your wishlist.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((product) => (
             <ProductCard product={product} key={product.id} />            
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist