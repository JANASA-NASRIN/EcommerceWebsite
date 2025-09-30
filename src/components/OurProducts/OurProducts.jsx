import React, { useState } from 'react'
import Container from '../Header/Layout/Container'
import BestProduct1 from '../../assets/Best-Product1.png'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import ourProduct1 from '../../assets/our-product1.png'
import ourProduct2 from '../../assets/our-product2.png'
import ourProduct3 from '../../assets/our-product3.png'
import ourProduct4 from '../../assets/our-product4.png'

const OurProduct = () => {
  const [visible, setVisible] = useState(4)

  const product = [
    { name: 'Breed dry dog Food', price: '$50', imgage: ourProduct1, rating: 3, sold: '(35)' },
    { name: 'CANON EOS DSLR Camera', price: '$500', imgage: ourProduct2, rating: 5, sold: '(39)' },
    { name: 'ASUS FHD Gaming Laptop', price: '$650', imgage: ourProduct3, rating: 3, sold: '(95)' },
    { name: 'Curology Product Set', price: '$580', imgage: ourProduct4, rating: 5, sold: '(25)' },
    { name: 'Breed dry dog Food', price: '$50', imgage: ourProduct1, rating: 3, sold: '(35)' },
    { name: 'CANON EOS DSLR Camera', price: '$500', imgage: ourProduct2, rating: 5, sold: '(39)' },
    { name: 'ASUS FHD Gaming Laptop', price: '$650', imgage: ourProduct3, rating: 3, sold: '(95)' },
    { name: 'Curology Product Set', price: '$580', imgage: ourProduct4, rating: 5, sold: '(25)' },
    { name: 'Breed dry dog Food', price: '$50', imgage: ourProduct1, rating: 3, sold: '(35)' },
    { name: 'CANON EOS DSLR Camera', price: '$500', imgage: ourProduct2, rating: 5, sold: '(39)' },
    { name: 'ASUS FHD Gaming Laptop', price: '$650', imgage: ourProduct3, rating: 3, sold: '(95)' },
    { name: 'Curology Product Set', price: '$580', imgage: ourProduct4, rating: 5, sold: '(25)' },
    { name: 'Breed dry dog Food', price: '$50', imgage: ourProduct1, rating: 3, sold: '(35)' },
    { name: 'CANON EOS DSLR Camera', price: '$500', imgage: ourProduct2, rating: 5, sold: '(39)' },
    { name: 'ASUS FHD Gaming Laptop', price: '$650', imgage: ourProduct3, rating: 3, sold: '(95)' },
    { name: 'Curology Product Set', price: '$580', imgage: ourProduct4, rating: 5, sold: '(25)' },
  ]

  const handleLoadData = () => {
    setVisible(prev => prev + 4)
  }

  return (
    <div className="pb-[122px]">
      <Container>
        {/* Heading */}
        <div className="border-t border-gray-500 pt-[27px]">
          <div className="items-center flex">
            <div className="w-[20px] h-[40px] bg-primary rounded"></div>
            <p className="font-primary text-primary font-semibold ml-[16px]">Our Products</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <h3 className="font-secondary text-[36px] font-semibold text-black pt-[27px]">
            Explore Our Products
          </h3>
          
        </div>

        {/* Product Grid */}
        <div className="mt-[60px] grid grid-cols-4 gap-6">
          {product.slice(0, visible).map((item, index) => (
            <div key={index} className="w-[270px] h-[350px]">
              <div className="relative group bg-secondary rounded flex items-center justify-center w-[270px] h-[250px]">
                <img src={item.imgage} alt={item.name} className="max-h-full object-contain" />
                <p className="bg-black text-white font-primary font-medium py-2 text-center bottom-0 left-0 w-full hidden group-hover:block absolute">
                  Add to Cart
                </p>

        <div className='absolute top-3 right-3'>
                <div className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center mb-2 '>
                  <CiHeart />
                </div>
        <div className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center '>
                 <IoEyeOutline />
                 </div>


        </div>
              </div>

             
              <div className="mt-4">
                <p className="font-primary font-medium">{item.name}</p>
                <p className="py-2 font-primary font-medium text-primary">
                  {item.price}
                </p>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < item.rating ? "text-[#FFAD33]" : "text-[#cfc8c2]"}
                    />
                  ))}
                  <p className="ml-2 font-primary font-medium text-[#7F7F7F]">{item.sold}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show button only if products remain */}
        {visible < product.length && (
          <div className="text-center mt-[60px]">
            <button
              onClick={handleLoadData}
              className="bg-primary text-white font-primary font-medium py-4 px-[48px] text-center rounded"
            >
              View All Products
            </button>
          </div>
        )}
      </Container>
    </div>
  )
}

export default OurProduct
