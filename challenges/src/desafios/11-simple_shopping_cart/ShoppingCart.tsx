import React from 'react'

import { items } from './Items'
import './styles.css'

const ShoppingCart = () => {
  const [cart, setCart] = React.useState([])

  const addToCart = (item: any[]) => {
    const cartCopy = [...cart]
    const itemInCart = cartCopy.find(i => item.name === i.name)

    if (itemInCart) {
      itemInCart.quantity += 1
      setCart(cartCopy)
    } else {
      setCart(prevCart => [...prevCart, { ...item, quantity: 1 }] as any)
    }
  }

  const increase = (name: string) => {
    const cartCopy = [...cart]
    console.log(cartCopy)
    const item = cartCopy.find(i => i.name === name) as any
    item.quantity += 1
    setCart(cartCopy)
  }

  const decrease = (name: string) => {
    let cartCopy = [...cart]
    const item = cartCopy.find(i => i.name === name) as any

    if (item.quantity > 1) {
      item.quantity -= 1
    } else {
      cartCopy = cartCopy.filter(i => i.name !== name)
    }

    setCart(cartCopy)
  }

  return (
    <div className='shopping-cart'>
      <h1>Shopping Cart</h1>

      <div className='items-cart_section'>
        <div className='items_section'>
          <h2>Items</h2>
          {items.map(item => (
            <div className='items-list'>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          ))}
        </div>
        <div className='cart_section'>
          <h2>Cart</h2>

          {cart.length > 0 ? (
            cart.map(({ name, price, quantity }) => (
              <div className='items-list'>
                <h3>{name}</h3>
                <p>
                  <button onClick={() => decrease(name)}>-</button>
                  {quantity}
                  <button onClick={() => increase(name)}>+</button>
                </p>
                <p>Subtotal: ${(quantity * price).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>Add an item to your cart</p>
          )}
        </div>
      </div>

      <center>
        <h2>
          Total: $
          {cart.reduce((acc, i) => acc + i.quantity * i.price, 0).toFixed(2)}
        </h2>
      </center>
    </div>
  )
}

export default ShoppingCart
