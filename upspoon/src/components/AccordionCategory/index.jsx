import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const AccordionCategory = () => {
  const categoryDetail = [{
    id: 1,
    title: "Yeni Ürünler",
    image:
      "http://cdn.getir.com/cat/5697c78dc181490f00c99fea_f7ef7ccb-f3a4-4388-b787-232967c16320.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 2,
    title: "İndirimler",
    image:
      "http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 3,
    title: "Su & İçecek",
    image:
      "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 4,
    title: "Meyve & Sebze",
    image:
      "http://cdn.getir.com/cat/5928113e616cab00041ec6de_1619242870968_1619242871055.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 5,
    title: "Fırından",
    image:
      "http://cdn.getir.com/cat/566eeb85f9facb0f00b1cb16_1619242817768_1619242817849.jpeg",
    subTitles: ["Taze Fırın", "Unlu Mamüller"],
  },
  {
    id: 6,
    title: "Temel Gıda",
    image:
      "http://cdn.getir.com/cat/56dfcfba86004203000a870d_1619242834654_1619242834734.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 7,
    title: "Atıştırmalık",
    image:
      "http://cdn.getir.com/cat/56dfe03cf82055030022cdc0_1619242841966_1619242842053.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 8,
    title: "Dondurma",
    image:
      "http://cdn.getir.com/cat/55bca8484dcda90c00e3aa80_1619242741382_1619242741482.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 9,
    title: "Yiyecek",
    image:
      "http://cdn.getir.com/cat/551430043427d5010a3a5c5d_1619242660025_1619242660107.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 10,
    title: "Süt & Kahvaltı",
    image:
      "http://cdn.getir.com/cat/56dfed05ab747f03008d9379_1619242850313_1619242850394.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 11,
    title: "Fit & Form",
    image:
      "http://cdn.getir.com/cat/57e2996551f3ee030027e28b_1619242858559_1619242858642.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 12,
    title: "Kişisel Bakım",
    image:
      "http://cdn.getir.com/cat/551430043427d5010a3a5c5c_1619242651249_1619242651335.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 13,
    title: "Ev Bakım",
    image:
      "http://cdn.getir.com/cat/55449fdf02632e11003c2da8_1619242719523_1619242719602.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 14,
    title: "Ev & Yaşam",
    image:
      "http://cdn.getir.com/cat/5b06b056b883b700044e3e4c_1619242916956_1619242917048.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 15,
    title: "Teknoloji",
    image:
      "http://cdn.getir.com/cat/551430043427d5010a3a5c62_1619242697597_1619242697702.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 16,
    title: "Evcil Hayvan",
    image:
      "http://cdn.getir.com/cat/551430043427d5010a3a5c63_1619242711604_1619242711687.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 17,
    title: "Bebek",
    image:
      "http://cdn.getir.com/cat/551430043427d5010a3a5c5b_1619242620186_1619242620271.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 18,
    title: "Cinsel Sağlık",
    image:
      "http://cdn.getir.com/cat/559c07b093be370c0063dd29_1619242727735_1619242727816.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },
  {
    id: 19,
    title: "Giyim",
    image:
      "http://cdn.getir.com/cat/551430043427d5010a3a5c5f_1619242679723_1619242679822.jpeg",
    subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
  },]
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Accordion allowToggle w="full">
      {categoryDetail?.map((item, index) => (
        <AccordionItem key={item.title}>
          <AccordionHeader className={`px-4 py-2 whitespace-nowrap text-left w-52 flex flex-row items-center justify-between ${activeIndex === index ? 'bg-green-100' : 'hover:bg-green-100'}`} onClick={() => handleToggle(index)}>
            <div className="flex flex-row items-center">
              <img className="w-8 h-8 mr-2" src={item.image} alt="Görsel" />
              <h3 className="accordion-title text-green-800">{item.title}</h3>
            </div>
            {activeIndex === index ?
              <div className="text-green-800">
                <FaAngleUp />
              </div>
              :
              <div className="text-gray-400">
                <FaAngleDown />
              </div>}

          </AccordionHeader>
          <AccordionBody className="py-1">
            {item.subTitles.map((categoryDetailItem, index) => (
              <div key={index} className="accordion-body pl-12 ">
                {categoryDetailItem}
              </div>
            ))}
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionCategory;
