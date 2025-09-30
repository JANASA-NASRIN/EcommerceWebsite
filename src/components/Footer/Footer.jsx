import React from 'react'
import Container from '../Header/Layout/Container'
import { FaRegCopyright } from "react-icons/fa6";
import footer1 from '../../assets/qrcode.png'
import footer2 from '../../assets/playstore.png'
import footer3 from '../../assets/appstore.png'
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
    return (
        <div className='bg-black text-[#FAFAFA]'>
            <Container>
                <div className='flex pt-[80px] pb-[124px] justify-between'>
                    <div className="exclusive w-[217px]">
                        <h5 className='font-secondery font-bold text-[24px] leading--[24px] mb-[24px] text-white'>Exclusive</h5>
                        <h3 className='font-primary font-medium text-[20px] leading-[28px] mb-[24px] '>Subscribe</h3>
                        <p className='font-primary text-base leading-[24px] mb-[16px]'>Get 10% off your first order</p>
                        <div className='flex relative font-primary text-base leading-[24px] border border-white py-3 pl-4 rounded'>
                            <input type="text" placeholder='Enter your email'  className='w-full outline-0 pr-[45px] '/>
                            <div className='absolute top-4 right-3'><VscSend /></div>
                        </div>
                    </div>
                    <div className="support w-[175px]">
                        <h3 className='font-primary font-medium text-[20px] leading-[28px] mb-[24px]'>Support</h3>
                        <p className='font-primary text-base leading-[24px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='font-primary text-base leading-[24px] py-[16px]'>exclusive@gmail.com</p>
                        <p className='font-primary text-base leading-[24px]'>+88015-88888-9999</p>
                    </div>
                    <div className="account w-[123px]">
                        <h3 className='font-primary font-medium text-[20px] leading-[28px] mb-[24px]'>Account</h3>
                        <p className='font-primary text-base leading-[24px]'>My Account</p>
                        <p className='font-primary text-base leading-[24px] py-[16px]'>Login / Register</p>
                        <p className='font-primary text-base leading-[24px]'>Cart</p>
                        <p className='font-primary text-base leading-[24px] py-[16px]'>Wishlist</p>
                        <p className='font-primary text-base leading-[24px]'>Shop</p>
                    </div>
                    <div className="quick-link w-[109px]">
                        <h3 className='font-primary font-medium text-[20px] leading-[28px] mb-[24px]'>Quick Link</h3>
                        <p className='font-primary text-base leading-[24px]'>Privacy Policy</p>
                        <p className='font-primary text-base leading-[24px] py-[16px]'>Terms Of Use</p>
                        <p className='font-primary text-base leading-[24px]'>FAQ</p>
                        <p className='font-primary text-base leading-[24px] pt-[16px]'>Contact</p>
                    </div>
                    <div className="download-app w-[198px]">
                        <h3 className='font-primary font-medium text-[20px] leading-[28px] mb-[24px]'>Download App</h3>
                        <p className='font-primary font-medium text-[12px] leading-[18px] pb-2'>Save $3 with App New User Only</p>
                        <div className='flex justify-between'>
                            <div className="left">
                                <img src={footer1} alt="" />
                            </div>
                            <div className="right">
                                <img src={footer2} alt=""  className=' mb-[9px]'/>
                                <img src={footer3} alt="" />
                            </div>
                        </div>
                        <div className="icons flex mt-[24px]">
                            <div className='w-[24px] h-[24px] font-bold'><RiFacebookLine /></div>
                            <div className='w-[24px] h-[24px] font-bold'><CiTwitter /></div>
                            <div className='w-[24px] h-[24px] font-bold'><CiInstagram /></div>
                            <div className='w-[24px] h-[24px] font-bold'><TiSocialLinkedin /></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-x-[6px] pb-[24px]'>
                    <div className='text-[#3D3D3D]'>
                        <FaRegCopyright />
                    </div>
                    <div>
                      <p className='font-primary text-base leading-[24px] text-[#3D3D3D]'>Copyright Jenesa 2025. All right reserved</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer