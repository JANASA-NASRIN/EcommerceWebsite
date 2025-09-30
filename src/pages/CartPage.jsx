import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useWishlist();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return <h2 className="text-center mt-10 text-xl">Your Cart is Empty</h2>;

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border rounded p-4 bg-white">
            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1 mx-4">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-red-600 font-bold">${item.price}</p>
              <div className="flex items-center mt-2 gap-2">
                <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 border rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 border rounded">+</button>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-bold">Remove</button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
