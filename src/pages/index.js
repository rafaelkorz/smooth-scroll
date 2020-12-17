import React, {useState} from 'react'
import Sidebar from '../components/Siderbar';
import Navbar from '../components/Navbar';
import { homeObjOne } from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
    </>
  )
}

export default Home
