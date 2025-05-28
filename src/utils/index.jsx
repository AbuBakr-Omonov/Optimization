import React from 'react'
import "./style.css"

export const Loading = () =>{
    return <div className='w-full h-screen grid place-items-center'>
      <span className="loader"></span>
    </div>
}

export const Suspense = ({children}) =>{
    return <React.Suspense fallback= {<Loading/>}>{children}</React.Suspense>
}