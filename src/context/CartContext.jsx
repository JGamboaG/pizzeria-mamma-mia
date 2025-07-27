import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  
  const addToCart = (pizza) => {
    setCart(prevCart => {
      const existing = prevCart.find(p => p.id === pizza.id)
      if (existing) {
        return prevCart.map(p => p.id === pizza.id ? {...p, quantity: p.quantity + 1} : p)
      } else {
        return [...prevCart, {...pizza, quantity: 1}]
      }
    })
  }

  const increment = (pizza) => {
    setCart(prevCart => {
      return prevCart.map(p => p.id === pizza.id ? {...p, quantity: p.quantity + 1} : p)
    })
  }

  const decrement = (pizza) => {
    setCart(prevCart => {
      return prevCart.map(p => p.id === pizza.id ? {...p, quantity: p.quantity - 1} : p).filter(p => p.quantity > 0)
    })
  }

  const total = cart.reduce((acumulador, pizza) => acumulador + pizza.price * pizza.quantity,0)

  return(
    <CartContext.Provider value={{total, cart, addToCart, increment, decrement}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}

export default CartProvider