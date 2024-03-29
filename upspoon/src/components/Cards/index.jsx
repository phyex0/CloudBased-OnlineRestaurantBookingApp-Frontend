import CardItem from "../CardItem";
import styles from "./style.module.css";
import React, { useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([
    {
      title: "A campaign for every order",
      description:
        'Getir"de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.',
      image:
        "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
    },
    {
      title: "Order in minutes",
      description: "Getir’le siparişiniz dakikalar içinde kapınıza gelir.",
      image:
        "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
    },
    {
      title: "Be Happy",
      description:
        "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
      image:
        "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
    },
  ]);

  return (
    <>
      <div className={styles.container}>
        {cards.map((card, key) => (
          <CardItem key={key} card={card} />
        ))}
      </div>
    </>
  );
};

export default Cards;
