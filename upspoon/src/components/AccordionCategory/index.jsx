import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { useState } from "react";

const AccordionCategory = () => {
  const [categoryDetail, setCategoryDetail] = useState([
    {
      title: "Su & İçecek",
      subTitles: ["Su", "Gazlı İçecek", "Maden Suyu"],
    },
    {
      title: "Meyve & Sebze",
      subTitles: ["Meyve", "Sebze"],
    },
    {
      title: "Fırından",
      subTitles: ["Taze Fırın", "Unlu Mamüller"],
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Accordion allowToggle w="full">
      {categoryDetail.map((item, index) => (
        <AccordionItem key={item.title}>
          <AccordionHeader className={`px-4 py-2 text-left ${activeIndex === index ? 'bg-green-500' : 'hover:bg-green-100'}`} onClick={() => handleToggle(index)}>
            <h3 className="accordion-title text-green-800 ti-align-left">{item.title}</h3>
          </AccordionHeader>
          <AccordionBody px={4} py={2}>
            {item.subTitles.map((categoryDetailItem, index) => (
              <div key={index} className="accordion-body">
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
