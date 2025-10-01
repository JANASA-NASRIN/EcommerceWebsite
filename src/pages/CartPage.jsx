import React, { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../components/Header/Layout/Container";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useWishlist();

  const [couponText, setCouponText] = useState("");
  const [discount, setDiscount] = useState(0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = totalPrice - discount;

  const handleChange = (e) => setCouponText(e.target.value);

  const handleApplyCoupon = () => {
    if (!couponText) {
      toast.success("Please Enter Coupon");
    } else if (couponText === "Aney20") {
      setDiscount(totalPrice * 0.2);
      toast.success("Coupon Applied: 20% Off");
    } else if (couponText === "Aney30") {
      setDiscount(totalPrice * 0.3);
      toast.success("Coupon Applied: 30% Off");
    } else {
      toast.error("Invalid Coupon");
    }
  };

  const handleIncrement = (id) => increaseQuantity(id);
  const handleDecrement = (id) => decreaseQuantity(id);
  const handleRemove = (id) => {
    removeFromCart(id);
    toast.success("Product removed ");
  };

  if (cart.length === 0)
    return (
      <Container>
        <h2 className="text-center mt-10 text-xl">Your Cart is Empty</h2>
      </Container>
    );

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="pb-[80px] md:pb-[140px]">
        {/* Breadcrumb */}
        <div className="flex py-[80px] font-primary">
          <p className="text-[14px] leading-[21px]">Home</p>
          <p className="px-3">/</p>
          <p className="text-[14px] leading-[21px]">Cart</p>
        </div>

        {/* Cart Header */}
        <div className="flex justify-between shadow-[0_1px_13px_rgba(0,0,0,0.05)] py-6 px-10 rounded font-primary">
          <div className="w-[25%]">
            <p className="text-base leading-6">Product</p>
          </div>
          <div className="w-[25%]">
            <p className="text-base leading-6">Price</p>
          </div>
          <div className="w-[25%]">
            <p className="text-base leading-6">Quantity</p>
          </div>
          <div className="w-[25%]">
            <p className="text-base leading-6">Subtotal</p>
          </div>
        </div>

        {/* Cart Items */}
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center shadow-[0_1px_13px_rgba(0,0,0,0.05)] py-6 px-5 rounded font-primary my-[40px] relative"
          >
            <div className="w-[25%] flex items-center gap-x-4">
              <img
                className="w-[54px] h-[54px] object-contain"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="text-base leading-6">{product.title}</p>
            </div>

            <div className="w-[25%]">
              <p className="text-base leading-6">${product.price}</p>
            </div>

            <div className="w-[25%]">
              <div className="inline-flex items-center py-[6px] px-3 border border-black/30 rounded">
                <p className="text-base leading-6 pr-4">{product.quantity}</p>
                <div className="flex flex-col">
                  <FaAngleUp
                    className="cursor-pointer hover:text-primary hover:scale-125 transition-transform duration-200"
                    onClick={() => handleIncrement(product.id)}
                  />
                  <FaAngleDown
                    className="cursor-pointer hover:text-primary hover:scale-125 transition-transform duration-200"
                    onClick={() => handleDecrement(product.id)}
                  />
                </div>
              </div>
            </div>

            <div className="w-[25%]">
              <p className="text-base leading-6">
                ${(product.price * product.quantity).toFixed(2)}
              </p>
            </div>

            {/* Cross Remove Icon */}
            <div
              className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-red-500 text-white ml-4 cursor-pointer text-xl font-bold hover:bg-red-600 hover:scale-110 transition-all duration-200"
              onClick={() => handleRemove(product.id)}
            >
              ×
            </div>
          </div>
        ))}

        {/* Cart Actions */}
        <div className="flex justify-between pt-6 pb-[80px]">
          <div className="font-primary font-medium text-base leading-6 border border-black/30 rounded py-[16px] px-[25px] md:px-[48px]">
            <Link to="/product">Return To Shop</Link>
          </div>
          <div className="font-primary font-medium text-base leading-6 border border-black/30 rounded py-[16px] px-[25px] md:px-[48px]">
            <a href="#">Update Cart</a>
          </div>
        </div>

        {/* Coupon & Summary */}
        <div className="lg:flex justify-between">
          <div>
            <div className="md:flex gap-x-4">
              <div className="font-primary font-medium text-base leading-6 border border-black/30 rounded py-[16px] pl-[24px]">
                <input
                  onChange={handleChange}
                  name="coupon"
                  type="text"
                  placeholder="Coupon Code"
                  className="outline-0"
                />
              </div>
              <button
                onClick={handleApplyCoupon}
                className="font-primary font-medium text-base leading-6 rounded py-[16px] px-[48px] bg-primary text-white mt-[20px] md:mt-0"
              >
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="w-auto md:w-[470px] border py-[32px] px-[24px] font-primary mt-[30px] lg:mt-0">
            <p className="font-primary font-medium text-[20px] leading-7">
              Cart Total
            </p>
            <div className="flex justify-between border-b border-black/30 pt-6 pb-4">
              <p className="text-base leading-6">Subtotal:</p>
              <p className="text-base leading-6">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between border-b border-black/30 pt-6 pb-4">
              <p className="text-base leading-6">Discount:</p>
              <p className="text-base leading-6">${discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between border-b border-black/30 py-4">
              <p className="text-base leading-6">Shipping:</p>
              <p className="text-base leading-6">Free</p>
            </div>
            <div className="flex justify-between py-4">
              <p className="text-base leading-6">Total:</p>
              <p className="text-base leading-6">${total.toFixed(2)}</p>
            </div>
            <div className="text-center">
              <div className="font-primary font-medium text-base leading-6 rounded py-[16px] px-[48px] bg-primary text-white inline-block cursor-pointer hover:scale-105 transition-transform duration-200">
                <Link to="/checkout">Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
