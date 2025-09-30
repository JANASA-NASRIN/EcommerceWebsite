import React from 'react'
import Container from '../Header/Layout/Container'
import Featured1 from '../../assets/Featured1.png'
import Featured2 from '../../assets/Featured2.png'
import Featured3 from '../../assets/Featured3.png'
import Featured4 from '../../assets/Featured4.png'


const NewArrival = () => {
  return (
    <div className='py-[32px] pb-[192px]'>
        <Container>
            <div>
                 <div className='title-part'>
                        <div className='flex items-center '>
                            <div className='w-5 h-10 rounded bg-primary'></div>
                            <div>
                                <p className='font-primary font-semibold text-[16px] leading-5 pl-[16px] text-primary'>Featured</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='font-secondery font-semibold text-[36px] leading-[48px] mt-5'>New Arrival</h3>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[60px]'>
                        <div className="left">
                            <img src={Featured1} alt="" />
                        </div>
                        <div className="right">
                            <div className='mb-[32px]'>
                                <img src={Featured2} alt="" />
                            </div>
                            <div className='flex gap-x-[30px]'>
                                <img src={Featured3} alt="" />
                                <img src={Featured4} alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        </Container>
    </div>
  )
}

export default NewArrival