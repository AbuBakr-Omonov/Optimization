import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const { data: product, loading, error } = useFetch(`/products/${id}`)

  if (error) return <div className="text-red-500 text-center py-10">Error loading product.</div>
  if (!product) return <div className="text-gray-400 text-center py-10">Product not found.</div>

  return (
    <div className="mt-[50px] container mx-auto rounded-2xl bg-gray-800 min-h-[70vh] py-10 px-4 md:px-10 text-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <img  src={product.image} alt={product.title} className="rounded-2xl w-full max-h-[500px] object-contain bg-gray-800 p-4"  />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-gray-300 text-sm">{product.description}</p>

          <div className="flex flex-wrap items-center gap-6">
            <div>
              <span className="text-yellow-400 text-2xl font-bold">${product.price}</span>
              <p className="text-sm text-gray-500 mt-1">Tax included</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Category:</span> {product.category}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Rating:</span> {product.rating?.rate} ({product.rating?.count} reviews)
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-xl font-semibold transition">
              Add to Cart
            </button>
            <button className="border border-yellow-500 hover:bg-yellow-600 hover:text-black text-yellow-400 px-6 py-2 rounded-xl font-semibold transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail


