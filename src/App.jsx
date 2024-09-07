import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <AuthProvider> {/* Wrap ProductProvider with AuthProvider */}
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
