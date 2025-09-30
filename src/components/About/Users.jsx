import React from 'react';
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../Header/Layout/Container';

// Import your fixed images
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user1.png';
import user5 from '../../assets/user2.png';
import user6 from '../../assets/user3.png';



const Users = () => {
  // Fixed data
  const users = [
    { avatar: user1, name: "John Doe", role: "CEO" },
    { avatar: user2, name: "Jane Smith", role: "Developer" },
    { avatar: user3, name: "Michael Brown", role: "Designer" },
    { avatar: user4, name: "Emily White", role: "Marketing" },
    { avatar: user5, name: "David Wilson", role: "Support" },
    { avatar: user6, name: "Sarah Lee", role: "HR" },
  ];

  const settings = {
    
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    
  };

  return (
    <div className='mb-[196px]'>
      <Container>
        <Slider {...settings}>
          {users.map((item, index) => (
            <div key={index} className='w-[370px] px-[30px]'>
              <div className='w-full h-[200px] md:h-[400px] flex justify-center bg-white'>
                <img
                  src={item.avatar}
                  alt={`${item.name} avatar`}
                  className='pt-[33px] w-full h-full object-cover'
                />
              </div>
              <p className='w-[370px] font-secondery font-medium text-[30px] leading-[30px] tracking-[4%] pt-[32px] pb-2 break-words'>
                {item.name}
              </p>
              <p className='font-primary text-base leading-[24px]'>{item.role}</p>
              <div className='flex gap-x-4 mt-4'>
                <CiTwitter size={24}/>
                <CiInstagram size={24}/>
                <RiLinkedinLine size={24}/>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Users;
