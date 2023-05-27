import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { errorMessage } from "../../helpers/toast";
import { getOrganizationsByBusinessType } from "../../api/order";
import MiniLoading from "../Loading/MiniLaoding";
import OrganizationItem from "../OrganizationItem";

const Organizations = () => {
  const [organizations, setOrganizations] = useState([]);
  const [isLaodingOrganizations, setIsLaodingOrganizations] = useState(false);

  useEffect(() => {
    getOrganiations();
  }, []);

  const getOrganiations = async () => {
    setIsLaodingOrganizations(true);
    try {
      let response = await getOrganizationsByBusinessType("RESTAURANT");
      console.log("get organizations response", response);
      setOrganizations(response?.data?.content);
    } catch (err) {
      errorMessage("Can't get organizations");
    } finally {
      setIsLaodingOrganizations(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {isLaodingOrganizations && <MiniLoading />}
        <h3 className={styles.organizationsTitle}>Restaurants</h3>
        <p className={styles.organizationsDesc}>
          Select a restaurant to see the menu and order food.
        </p>
        <div className={styles.organizationList}>
          {organizations &&
            organizations.map((org) => (
              <OrganizationItem key={org.id} organization={org} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Organizations;
