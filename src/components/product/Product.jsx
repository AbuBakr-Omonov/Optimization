import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import ProductCard from './ProductCard'

const Product = () => {
    const {data,loading,error} = useFetch("/products")
  return (
   <>
      <div className="bg-gray-900 min-h-screen py-10 px-4 md:px-10">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">Products</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      </div>
    </>
  )
}

export default React.memo(Product)