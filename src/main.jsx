import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct.jsx'
import Product from './pages/Product'
import Cart from './pages/Cart.jsx'

import { Provider } from 'react-redux'
import { store } from './config/redux/store/store.js'


const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'product/:id',
        element: <SingleProduct />
      },
      {
        path: 'product',
        element: <Product />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: '*',
        element: <Home />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>

)
