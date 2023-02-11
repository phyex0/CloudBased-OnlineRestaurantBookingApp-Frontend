import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import CategoryDetailData from '../../api/categoryDetail.json'

const AccordionCategory = () => {
    return (
        <Accordion>
            {CategoryDetailData.map((item) => <AccordionItem>
                <AccordionHeader>
                    <h3 className={`accordion-title text-red-800`}>{item.title}</h3>
                </AccordionHeader>
                <AccordionBody>
                    {item.subTitles.map((categoryDetailItem) =>
                        <div className="accordion-body">
                            {categoryDetailItem}
                        </div>)}
                </AccordionBody>
            </AccordionItem>)}
        </Accordion>
    );
};

export default AccordionCategory;