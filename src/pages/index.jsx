import React, { lazy } from 'react'
import { Suspense } from '../utils'
import { Route, Routes } from 'react-router-dom'
const Layout = lazy(() => import("./layout/layout"))
const Products = lazy(() => import("./Products/Products"))
const Users = lazy(() => import("./Users/Users"))
const NotFaund = lazy(() => import("./NotFaund/NotFaund"))
const ProductDetail = lazy(() => import("./product-deatil/ProductDetail"))
const UserDeatail = lazy(() => import("./user-deatil/UserDeatail"))
const Wishlist = lazy(() => import("./wishlists/Wishlists"))
const MainRouters = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Suspense><Layout/></Suspense>}>
          <Route path="product" element={<Suspense><Products/></Suspense>}/>
          <Route path="user" element={<Suspense><Users/></Suspense>}/>
          <Route path="*" element={<Suspense><NotFaund/></Suspense>}/>
          <Route path="/product/:id" element={<Suspense><ProductDetail/></Suspense>}/>
          <Route path="/user/:id" element={<Suspense><UserDeatail/></Suspense>}/>
          <Route path="wishlist" element={<Suspense><Wishlist/></Suspense>}/>
        </Route>
    </Routes>
    </>
  )
}

export default React.memo(MainRouters) 