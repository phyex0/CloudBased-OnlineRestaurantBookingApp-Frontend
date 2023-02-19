import React from 'react'
import HeroSection from '../../components/HeroSection'
import Categories from '../../components/Categories'
import Campaigns from '../../components/Campaigns'
import Cards from '../../components/Cards'
import { useWindowWidth } from '@react-hook/window-size'

const User = () => {
  const width = useWindowWidth()
  return (
    <div>
      {width < 640 && <Campaigns />}
      <HeroSection />
      <Categories />
      <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
        {width > 640 && <Campaigns />}
        <Cards />
      </div>
    </div>
  );
};

export default User;
