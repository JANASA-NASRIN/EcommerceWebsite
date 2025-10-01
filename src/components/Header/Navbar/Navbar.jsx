import React from 'react';
import logo from '../../../assets/logo.png';
import { CiSearch, CiHeart } from 'react-icons/ci';
import { FaOpencart } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../../context/WishlistContext';
import Container from '../Layout/Container';

const Navbar = () => {
  const { cart, wishlist } = useWishlist();

  return (
    <nav className="pt-[43px] pb-[14px] border-b border-[#D9D9D9]">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[20%]">
            <Link to="/">
              <img src={logo} alt="logo" className="cursor-pointer" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="w-[40%] font-primary text-base">
            <ul className="flex gap-x-[48px]">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/signup">SignUp</Link></li>
            </ul>
          </div>

          {/* Right Icons */}
          <div className="w-[40%] flex items-center justify-end gap-4">
            {/* Search */}
            <div className="w-[243px] relative">
              <input
                className="w-full border bg-[#F5F5F5] rounded-sm py-[7px] pl-[20px] pr-[32px] placeholder:font-primary placeholder:text-sm"
                type="text"
                placeholder="What are you looking for?"
              />
              <CiSearch size={24} className="absolute top-[7px] right-[12px]" />
            </div>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <CiHeart className="cursor-pointer" size={24} />
              {wishlist?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <FaOpencart size={24} />
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Login */}
            <Link to="/login">
              <GoPerson size={24} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
