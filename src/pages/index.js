import React, {useState} from 'react'
import Sidebar from '../components/Siderbar';
import Navbar from '../components/Navbar';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';

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
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home
