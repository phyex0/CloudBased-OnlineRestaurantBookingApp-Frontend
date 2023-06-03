import { useState, useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import Campaigns from "../../components/Campaigns";
import Cards from "../../components/Cards";
import { useWindowWidth } from "@react-hook/window-size";
import {
  createProduct,
  deleteProduct,
  getMenu,
  getProduct,
  getProducts,
  updateProduct,
} from "../../api/order";
import Organizations from "../../components/Organizations";
import FoodVideo from "../../assets/videos/food-video.mp4";

const User = () => {
  const width = useWindowWidth();

  return (
    <div>
      {width < 640 && <Campaigns />}
      <HeroSection />
      <Organizations />
      <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
        {width > 640 && <Campaigns />}
        <div className="mx-auto mt-8">
          <video src={FoodVideo} width={600} autoPlay muted></video>
        </div>
        {/* <Cards /> */}
      </div>
    </div>
  );
};

export default User;
