import { useState, useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import Categories from "../../components/Categories";
import Campaigns from "../../components/Campaigns";
import Cards from "../../components/Cards";
import { useWindowWidth } from "@react-hook/window-size";
import {
  createProduct,
  deleteProduct,
  getMenu,
  getProduct,
  updateProduct,
} from "../../api/order";

const User = () => {
  const width = useWindowWidth();

  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = async () => {
    let { data, error } = await getMenu(
      "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      {
        page: 0,
        size: 1,
      }
    );
    console.log("data:", data);
    console.log("error:", error);
  };

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
