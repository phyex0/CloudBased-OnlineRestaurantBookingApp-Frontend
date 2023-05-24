import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Campaigns from "../../components/Campaigns";
import Cards from "../../components/Cards";
import HeroSection from "../../components/HeroSection";
import Categories from "../../components/Categories";

const UserBasket = () => {
  const [basketItems, setBasketItems] = useState([]);
  const width = useWindowWidth();

  return (
    <div>
      {basketItems.length == 0 && (
        <div className="flex flex-col text-center items-center mt-4 w-full md:w-1/2 ml-auto mr-auto">
          <h2 className="font-semibold text-xl">Sepetin şu an boş</h2>
          <p className="mt-2">
            Sepetini Hepsiburada’nın fırsatlarla dolu dünyasından doldurmak için
            aşağıdaki ürünleri incelemeye başlayabilirsin.
          </p>
        </div>
      )}
      {basketItems.map((item) => (
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src={item.image} alt="" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>{item.name}</div>
            <div className={styles.cardPrice}>{item.price} TL</div>
            <div className={styles.cardDescription}>{item.description}</div>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.cardFooterButton}>
              <button
                onClick={() => {
                  setBasketItems((prev) => {
                    return prev.filter((i) => i.id !== item.id);
                  });
                }}
              >
                <MdDelete size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserBasket;
