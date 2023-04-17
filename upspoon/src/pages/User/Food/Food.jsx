import Campaigns from '../../../components/Campaigns'
import { useWindowWidth } from '@react-hook/window-size'
import AccordionCategory from '../../../components/AccordionCategory'

const UserFood = () => {
  const width = useWindowWidth()
  return (
    <div>
      <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
        {width > 640 && <Campaigns />}
      </div>
      <AccordionCategory />
    </div>
  );
};

export default UserFood;
