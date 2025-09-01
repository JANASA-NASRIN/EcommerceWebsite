import React from 'react'
import logo from '../../../assets/logo.png'
import { CiSearch } from 'react-icons/ci'
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import Container from '../Layout/Container';


const Navbar = () => {
  return (

    <nav className='pt-[43px] pb-[14px]  border-b border-[#D9D9D9]'>

      <Container >
      <div className='flex items-center justify-between'>
    
        <div className='w-[20%]'>
            <img src={logo} alt="logo" />
        </div>

        <div className='w-[40%] font-primary taxt-base '>
            <ul className='flex gap-x-[48px]  '>
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Signup</a></li>
            </ul>
        </div>

        <div className='w-[40%] flex items-center justify-end gap-4'>
            <div className='w-[243px] relative'>
                <input className="w-full  border bg-[#F5F5F5] rounded-sm py-[7px] pl-[20px] pr-[32px] placeholder:font-primary placeholder:text-sm " 
                type="text"
                placeholder='What are you looking for?' />

                <CiSearch size={24} className='font-bold absolute top-[7px] right-[12px]'/>
            </div>
            <CiHeart size={24}/>
            <FaOpencart size={24}/>
            <GoPerson size={24}/>
        </div>

      </div>
      </Container>
    </nav>
    
  )
}

export default Navbar
