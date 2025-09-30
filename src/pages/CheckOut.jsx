import React, { useState } from 'react'


import { IoMdCheckbox } from "react-icons/io";
import monitor from '../assets/monitor.png'
import gamepad from '../assets/gamepad.png'
import bkash from '../assets/bkash.png'
import visa from '../assets/visa.png'
import masterCard from '../assets/masterCard.png'
import nagad from '../assets/nagad.png'
import Container from '../components/Header/Layout/Container';

const CheckOut = () => {
    const check = [
        {
            title: "Account",
            p: "/"
        },
        {
            title: "My Account",
            p: "/"
        },
        {
            title: "Product",
            p: "/"
        },
        {
            title: "View Cart",
            p: "/"
        }
    ]
    const inputFields = [
        {
            label: "First Name*",
            type: "text"
        },
        {
            label: "Company Name",
            type: "text"
        },
        {
            label: "Street Address*",
            type: "text"
        },
        {
            label: "Apartment, floor, etc. (optional)",
            type: "text"
        },
        {
            label: "Town/City*",
            type: "text"
        },
        {
            label: "Phone Number*",
            type: "number"
        },
        {
            label: "Email Address*",
            type: "email"
        }
    ]
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const [coupon, setCoupon] = useState("")
    const [couponErr, setCouponErr] = useState("")

    const handleCoupon = (e)=>{
        setCoupon(e.target.value)
        setCouponErr("")
    }
    const handleAplyCoupon = (e)=>{
        if(coupon){
            alert("You Got a Discount")
            setCoupon("")
        }else{
            setCouponErr("Put your coupon first")
        }
    }
    return (
        <div className='pt-[80px] pb-[140px]'>
            <Container>
                <div className='flex'>
                    {
                        check.map((item) => (
                            <div className='flex'>
                                <p className='font-primary text-base leading-[21px] text-secondery'>{item.title}</p>
                                <p className='text-secondery px-[12px]'>{item.p}</p>
                            </div>
                        ))
                    }
                    <p className='font-primary text-base leading-[21px]'>CheckOut</p>
                </div>
                <h2 className='font-secondery font-medium text-[30px] leading-[36px] pt-[80px] pb-[48px]'>Billing Details</h2>
                <div className='lg:flex justify-between'>
                    <div>
                        {
                            inputFields.map((field) => (
                                <div className='w-[470px] flex flex-col'>
                                    <label className='font-primary text-base leading-[24px] text-secondery mb-2'>{field.label}</label>
                                    <input type={field.type} className='bg-[#F5F5F5] mb-[32px] h-[50px] rounded outline-0' />
                                </div>
                            ))
                        }
                        <div className='flex items-center'>
                            <div className='rounded text-primary'>
                                <IoMdCheckbox size={24} />
                            </div>
                            <p className='font-primary text-base leading-[24px] ml-4'>Save this information for faster check-out next time</p>
                        </div>
                    </div>

                    
                    <div className='right w-[527px] pt-[80px]'>
                        <div className='pr-[105px] font-primary'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <img className='w-[54px] h-[54px] pr-[15px]' src={gamepad} alt="" />
                                    <p className='text-base leading-6'>H1 Gamepad</p>
                                </div>
                                <div>
                                    <p className='text-base leading-6'>$550</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <img className='w-[54px] h-[54px] pr-[15px]' src={monitor} alt="" />
                                    <p className='text-base leading-6'>LCD Monitor</p>
                                </div>
                                <div>
                                    <p className='text-base leading-6'>$1100</p>
                                </div>
                            </div>
                            <div className='flex justify-between border-b border-black/30 pt-6 pb-4'>
                                <p className='text-base leading-6'>Subtotal:</p>
                                <p className='text-base leading-6'>$1750</p>
                            </div>
                            <div className='flex justify-between border-b border-black/30 py-4'>
                                <p className='text-base leading-6'>Shipping:</p>
                                <p className='text-base leading-6'>Free</p>
                            </div>
                            <div className='flex justify-between pt-4'>
                                <p className='text-base leading-6'>Total:</p>
                                <p className='text-base leading-6'>$1750</p>
                            </div>
                            <div className='flex justify-between py-[32px] cursor-pointer'
                                 onClick={() => setPaymentMethod("bank")}>
                                <div className='flex gap-x-4'>
                                    <div className='w-[24px] h-[24px] rounded-full border border-black flex flex-col justify-center items-center'>
                                        {paymentMethod === "bank" && (
                                         <div className="w-[14px] h-[14px] bg-black rounded-full"></div>
                                        )}
                                    </div>
                                    <p className='text-base leading-6'>Bank</p>
                                </div>
                                <div className='flex gap-x-2 items-center'>
                                    <div className='w-[42px] h-[28px]'>
                                        <img className='w-full h-full object-contain' src={bkash} alt="" />
                                    </div>
                                    <div>
                                        <img className='w-[42px] h-[28px] object-contain' src={visa} alt="" />
                                    </div>
                                    <div>
                                        <img className='w-[42px] h-[28px] object-contain' src={masterCard} alt="" />
                                    </div>
                                    <div>
                                        <img className='w-[42px] h-[28px] object-contain' src={nagad} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-4 cursor-pointer'
                             onClick={() => setPaymentMethod("coupon")}
                            >
                                <div className='w-[24px] h-[24px] rounded-full border border-black flex flex-col justify-center items-center'>
                                     {paymentMethod === "coupon" && (
                                         <div className="w-[14px] h-[14px] bg-black rounded-full"></div>
                                     )}
                                </div>
                                <p className='text-base leading-6'>Cash on delivery</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-x-4 py-[32px]'>
                                <div className='flex flex-col'>
                                    <div className='font-primary text-base leading-6 border border-black/30 rounded py-[16px] pl-[24px] pr-[73px]'>
                                    <input type="number" 
                                    onChange={handleCoupon}
                                    value={coupon}
                                    placeholder='Coupon Code'
                                    className='outline-0 w-[200px]'
                                    />
                                </div>
                                  <p className='font-primary text-red-700 mt-[20px]'>{couponErr}</p>
                                </div>
                                <div className='font-primary font-medium text-base leading-6 rounded py-[16px] px-[48px] bg-primary text-white h-[56px]'>
                                    <button onClick={handleAplyCoupon}>Apply Coupon</button>
                                </div>
                            </div>
                        </div>
                        <div className='font-primary font-medium text-base leading-6 rounded py-[16px] px-[48px] bg-primary text-white inline-block'>
                            <a href="/contact">Place Order</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CheckOut