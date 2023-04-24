import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

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
    <Accordion>
      {categoryDetail.map((item) => (
        <AccordionItem>
          <AccordionHeader>
            <h3 className={`accordion-title text-red-800`}>{item.title}</h3>
          </AccordionHeader>
          <AccordionBody>
            {item.subTitles.map((categoryDetailItem) => (
              <div className="accordion-body">{categoryDetailItem}</div>
            ))}
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionCategory;
