import React from 'react'
import Container from '../Layout/Container'
import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';

const Banner = () => {
  return (
    
    <section>
        <Container>
            <div className='flex mt-[40px] '>
                <BannerLeft/>
                <BannerRight/>
            </div>
        </Container>
    </section>



  )
}

export default Banner
