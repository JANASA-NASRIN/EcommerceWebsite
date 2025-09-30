import React from 'react'
import Container from '../Header/Layout/Container'
import Countdown from 'react-countdown';
import RenderedTime from './RenderedTime';

const Offer = () => {
  return (
    <div className='pt-[122px] pb-[161px]'>
      <Container>
        <div class="bg-[url(./assets/Offer-Banner.png)] py-10 bg-cover bg-no-repeat bg-center ">
        
        <div className='pl-[56px]'>
            <p className='font-primary text-[#00FF66] font-semibold'>Categories</p>
            <h3 className='font-secondary text-white font-semibold text-[48px] w-[441px] leading-[60px] mt-[32px] tracking-[4%]'>Enhance Your Music Experience</h3>
        
          <div>
            <Countdown date={Date.now() + 100000000}
          renderer={RenderedTime}
          />,
          </div>
        <div className='mt-[40px]'>
          <button className='px-[48px] py-4 bg-[#00FF66] rounded font-primary font-medium text-white'>Buy Now!</button>
        </div>

      </div>
      </div>
      </Container>
    </div>
  )
}

export default Offer
