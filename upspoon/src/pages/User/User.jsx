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

  useEffect(() => {
    // apiTest();
    // apiTest2();
    // apiTest3();
  }, []);

  const apiTest = async () => {
    let { data, error } = await getMenu(
      "2d0f0a27-70b9-4f67-8fad-c4a449b9e9f9 ",
      {
        page: 0,
        size: 1,
      }
    );
    console.log("data:", data);
    console.log("error:", error);
  };

  const apiTest2 = async () => {
    let response = await getProducts(
      "2d0f0a27-70b9-4f67-8fad-c4a449b9e9f9",
      "eef064e9-30d7-4f49-8a73-79b60566945b",
      {
        page: 0,
        size: 1,
      }
    );

    console.log("api2 response: ", response);
  };

  const apiTest3 = async () => {
    let response = await getOrganizationsByBusinessType("RESTAURANT", {
      page: 0,
      size: 1,
    });

    console.log("api3 response: ", response);
  };

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
