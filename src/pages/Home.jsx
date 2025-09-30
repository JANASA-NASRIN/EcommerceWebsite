import react from 'react';

import Banner from '../components/Header/Banner/Banner';
import Categories from '../components/Categories/Categories';
import BestSellingProduct from '../components/BestSellingProduct/BestSellingProduct';
import Offer from '../components/Offer/Offer';
import OurProducts from '../components/OurProducts/OurProducts';
import NewArrival from '../components/NewArrival/NewArrival';
import Services from '../components/Services/Services';


const Home = () => {
  return (
    <>
        
        <Banner/>
        <Categories/>
        <BestSellingProduct/>
        <Offer/>
        <OurProducts/>
        <NewArrival/>
        <Services/>
        
    </>
  );
}
export default Home;