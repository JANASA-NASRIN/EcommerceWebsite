import React from 'react'
import Container from '../Header/Layout/Container'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'

const Services = () => {
    const Services = [
        {
            image:service1,
            name:'FREE AND FAST DELIVERY',
            p: 'Free delivery for all orders over $140'
        },
        {
            image:service2,
            name:'24/7 CUSTOMER SERVICE',
            p: 'Friendly 24/7 customer support'
        },
        {
            image:service3,
            name:'MONEY BACK GUARANTEE',
            p: 'We reurn money within 30 days'
        },
    ]
  return (
    <div className='mb-[167px]'>
        <Container>
            <div className='flex gap-x-[88px] justify-center'>
                {
                    Services.map((item)=>(
                        <div className='text-center'>
                            <img className='mx-auto' src={item.image} alt="" />
                            <h3 className='font-primary font-semibold text-[20px] leading-[28px] py-6 px-2'>{item.name}</h3>
                            <p className='font-primary text-[14px] leading-[21px]'>{item.p}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Services