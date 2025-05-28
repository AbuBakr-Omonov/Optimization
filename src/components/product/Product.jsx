import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const {data,loading,error} = useFetch("/products")
    const navigate = useNavigate()
  return (
   <>
      <div className="bg-gray-900 min-h-screen py-10 px-4 md:px-10">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">Products</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
            <img  onClick={() => navigate(`/product/${product.id}`)} src={product.image } alt={product.title}  className="h-48 w-full  object-cover"
            />
            <div className="p-4">
              <h3 className="text-white text-xl font-semibold truncate">{product.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2 mt-1">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-yellow-400 font-bold text-lg">${product.price}</span>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default React.memo(Product)