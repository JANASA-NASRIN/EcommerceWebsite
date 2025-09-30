import React from 'react'
import Container from '../Header/Layout/Container'
import BestProduct1 from '../../assets/Best-Product1.png'
import BestProduct2 from '../../assets/Best-Product2.png'
import BestProduct3 from '../../assets/Best-Product3.png'
import BestProduct4 from '../../assets/Best-Product4.png'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";


const BestSellingProduct = () => {
  return (
    <div className='pb-[122px]'>
      <Container>
       <div className='border-t border-gray-500 pt-[27px]'>


        <div className='items-center  flex'>
            <div className='w-[20px] h-[40px] bg-primary rounded'></div>
            <div><p className='font-primary text-primary font-semibold ml-[16px]'>
                This Month
            </p>
            </div>
        </div>
       </div>
       <div className='mt-20px '>
        <div className='flex justify-between items-center'>
            <h3 className='font-secondary text-[36px] font-semibold text-black pt-[27px]'>Best Selling Products</h3>

        <div className='font-primary text-medium py-4 px-12 text-white bg-primary rounded '>View All</div>
        </div>
       </div>

       <div className='mt-[60px] flex justify-between items-center '>

        


        <div className='w-[270px] h-[250px] relative '>
        <div className='absolute top-3 right-3'>
          <div >
             <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>< CiHeart size={20}/></div>
        </div>

        <div>
             <div className='w-[34px] h-[34px] mt-2 bg-white rounded-full flex justify-center items-center'>  <IoEyeOutline size={20}/></div>
        </div>
        </div>


        <div className=' py-[52px] px-[65px] bg-secondary rounded w-[270px] h-[250px] flex items-center justify-center'>
            <img src={BestProduct1} alt="BestProduct1"className='max-h-full object-contain' />
        </div>
        <div className='mt-4'>
            <p className='font-primary font-medium'>The north coat</p>
            <p className='py-2 font-primary font-medium text-primary'>$260 <del className='text-[#7F7F7F] ml-3'>$360</del></p>
            <div className='flex items-center'>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <p className='ml-2 font-primary font-medium text-[#7F7F7F]'>(65)</p>
            </div>
        </div>
       </div>



       <div className='w-[270px] h-[250px] relative '>
        <div className='absolute top-3 right-3'>
          <div >
             <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>< CiHeart size={20}/></div>
        </div>

        <div>
             <div className='w-[34px] h-[34px] mt-2 bg-white rounded-full flex justify-center items-center'>  <IoEyeOutline size={20}/></div>
        </div>
        </div>


        <div className=' py-[52px] px-[65px] bg-secondary rounded  w-[270px] h-[250px] flex items-center justify-center'>
            <img src={BestProduct2} alt="BestProduct2" className='max-h-full object-contain' />
        </div>
        <div className='mt-4'>
            <p className='font-primary font-medium'>The north coat</p>
            <p className='py-2 font-primary font-medium text-primary'>$260 <del className='text-[#7F7F7F] ml-3'>$360</del></p>
            <div className='flex items-center'>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <p className='ml-2 font-primary font-medium text-[#7F7F7F]'>(65)</p>
            </div>
        </div>
       </div>



       <div className='w-[270px] h-[250px] relative '>
        <div className='absolute top-3 right-3'>
          <div >
             <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>< CiHeart size={20}/></div>
        </div>

        <div>
             <div className='w-[34px] h-[34px] mt-2 bg-white rounded-full flex justify-center items-center'>  <IoEyeOutline size={20}/></div>
        </div>
        </div>


        <div className=' py-[52px] px-[65px] bg-secondary rounded w-[270px] h-[250px] flex items-center justify-center'>
            <img src={BestProduct3} alt="BestProduct3" className='max-h-full object-contain'/>
        </div>
        <div className='mt-4'>
            <p className='font-primary font-medium'>The north coat</p>
            <p className='py-2 font-primary font-medium text-primary'>$260 <del className='text-[#7F7F7F] ml-3'>$360</del></p>
            <div className='flex items-center'>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <p className='ml-2 font-primary font-medium text-[#7F7F7F]'>(65)</p>
            </div>
        </div>
       </div>


       <div className='w-[270px] h-[250px] relative '>
        <div className='absolute top-3 right-3'>
          <div >
             <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>< CiHeart size={20}/></div>
        </div>

        <div>
             <div className='w-[34px] h-[34px] mt-2 bg-white rounded-full flex justify-center items-center'>  <IoEyeOutline size={20}/></div>
        </div>
        </div>


        <div className=' py-[52px] px-[65px] bg-secondary rounded w-[270px] h-[250px] flex items-center justify-center'>
            <img  src={BestProduct4} alt="BestProduct4" className='max-h-full object-contain' />
        </div>
        <div className='mt-4'>
            <p className='font-primary font-medium'>The north coat</p>
            <p className='py-2 font-primary font-medium text-primary'>$260 <del className='text-[#7F7F7F] ml-3'>$360</del></p>
            <div className='flex items-center'>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <FaStar className='text-[#FFAD33]'/>
              <p className='ml-2 font-primary font-medium text-[#7F7F7F]'>(65)</p>
            </div>
        </div>
       </div>
       </div>


       
      </Container>
    </div>
  )
}

export default BestSellingProduct
