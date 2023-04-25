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

  return (
    <Accordion allowToggle w="full">
      {categoryDetail.map((item) => (
        <AccordionItem key={item.title}>
          <AccordionHeader px={4} py={2} _hover={{ bg: "gray.100" }}>
            <h3 className="accordion-title text-red-800">{item.title}</h3>
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
