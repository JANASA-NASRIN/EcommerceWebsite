import react from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Header/Navbar/Navbar';
import Banner from '../components/Header/Banner/Banner';

const Home = () => {
  return (
    <>
        <Header />
        <Navbar/>
        <Banner/>
    </>
  );
}
export default Home;