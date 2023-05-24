import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import styles from "../../styles/user/Basket.module.css";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";

const UserBasket = () => {
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      name: "Samsung Galaxy M51 128 GB (Samsung Türkiye Garantili)",
      price: 3999,
      description: "6.7 inç, 64 MP + 12 MP + 5 MP + 5 MP, 7000 mAh, 25 MP",
      image:
        "https://productimages.hepsiburada.net/s/44/550/11093629798482.jpg/format:webp",
    },
    {
      id: 2,
      name: "Samsung Galaxy M51 128 GB (Samsung Türkiye Garantili)",
      price: 3999,
      description: "6.7 inç, 64 MP + 12 MP + 5 MP + 5 MP, 7000 mAh, 25 MP",
      image:
        "https://productimages.hepsiburada.net/s/44/550/11093629798482.jpg/format:webp",
    },
  ]);
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
        <div className="flex flex-col border gap-10 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0 space-y-4 w-full bg-white rounded-md shadow-md p-4">
          <div className="flex justify-center items-center w-full md:w-1/4">
            <img src={item.image} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-2">
            <div className="font-semibold text-lg text-center w-full">
              {item.name}
            </div>
            <div className="font-semibold text-lg text-center w-full">
              {item.price} TL
            </div>
            <div className="font-semibold text-lg text-center w-full">
              {item.description}
            </div>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/4 space-x-4 space-y-2">
            <div
              className="
            flex
            justify-center
            items-center
            w-full
            md:w-1/2
            space-x-4
            space-y-2
            
            "
            >
              <button
                onClick={() => {
                  setBasketItems((prev) => {
                    return prev.filter((i) => i.id !== item.id);
                  });
                }}
              >
                <Trash width="22" height="22" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserBasket;
