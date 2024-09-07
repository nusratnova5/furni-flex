import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  if (!cart.length) return <p>Your cart is empty.</p>;

  return (
    <div className="p-4">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center border-b p-4">
          <img src={item.imgurl} alt={item.title} className="w-16 h-16 mr-4" />
          <div className="flex-1">
            <h2 className="font-bold">{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>
              Quantity:
              <button onClick={() => decreaseQuantity(item.id)} className="mx-2 bg-gray-300 p-1 rounded">
                -
              </button>
              {item.quantity}
              <button onClick={() => increaseQuantity(item.id)} className="mx-2 bg-gray-300 p-1 rounded">
                +
              </button>
            </p>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white p-2 rounded">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
