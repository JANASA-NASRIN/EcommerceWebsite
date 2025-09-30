import React from 'react'


import slide from '../../assets/slide.png'
import Shopping from './Shopping.jsx'
import Users from './Users.jsx'
import Container from '../Header/Layout/Container.jsx'
import Services from '../Services/Services.jsx'

const About = () => {
  return (
    <div>
        <Container>
            <div className='flex font-primary pt-[96px] pb-[42px] gap-x-3'>
                <p className='text-[14px] leading-[21px] text-black/70'>Home</p>
                <p>/</p>
                <p className='text-[14px] leading-[21px]'>About</p>
            </div>
            <div className='lg:flex gap-[75px] items-center'>
                <div className='w-auto md:w-[525px] mb-6 lg:mb-0'>
                    <h2 className='font-secondery font-semibold text-[40px] md:text-[54px] leading-[64px] tracking-[6%]'>Our Story</h2>
                    <p className='md:w-[525px] font-primary text-base leading-[26px] mt-[40px] mb-[24px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='font-primary text-base leading-[26px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div>
                    <img src={slide} alt="" />
                </div>
            </div>
        </Container>
        <Shopping />
        <Users />
        <Services/>
    </div>
  )
}

export default About