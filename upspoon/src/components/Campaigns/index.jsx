import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from "@react-hook/window-size";
import styles from "./style.module.css";

function NextButton({ onClick, className }) {
  return (
    <button className={`${className} text-green-700`} onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>
  );
}
function PrevButton({ onClick, className }) {
  return (
    <button className={`${className} text-green-700`} onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    setBanners([
      {
        id: 1,
        image:
          "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
      },
      {
        id: 2,
        image:
          "https://cdn.getir.com/misc/611e4a50c270af509cd486b5_banner_tr_1629375115516.jpeg",
      },
      {
        id: 3,
        image:
          "https://cdn.getir.com/misc/5fb524d4c725f1530045cefc_banner_tr_1609343376255.jpeg",
      },
      {
        id: 4,
        image:
          "https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1629921878792.jpeg",
      },
    ]);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    /*  nextArrow: <NextButton />,
         prevArrow: <PrevButton />, */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={[styles.container, "sm:container"].join(" ")}
        style={{ width: width < 640 ? width : "" }}
      >
        <h3 className={styles.campaignsText}>Kampanyalar</h3>
        <Slider className={styles.slider} {...settings}>
          {banners &&
            banners.map((banner) => (
              <div key={banner.id} className={styles.banner}>
                <img src={banner.image} className={styles.bannerImage} />
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}

export default Campaigns;
