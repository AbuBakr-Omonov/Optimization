import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './assets/redux/index.js'
import { Provider } from 'react-redux'
const App = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Suspense>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
  // </React.StrictMode>,
)
