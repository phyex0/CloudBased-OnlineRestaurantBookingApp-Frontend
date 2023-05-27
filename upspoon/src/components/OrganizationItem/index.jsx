import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { ReactComponent as Restaurant } from "../../assets/icons/restaurant.svg";
import { prettySlug } from "../../helpers/slug";

const OrganizationItem = ({ organization }) => {
  return (
    <Link
      to={`/user/food/${prettySlug(
        organization.organizationName
      )}?organizationId=${organization.organizationId}`}
      className={styles.container}
    >
      {organization.organizationImage ? (
        <img src={organization.organizationImage} className={styles.image} />
      ) : (
        <Restaurant width="28" height="28" />
      )}

      <span className={styles.title}>{organization.organizationName}</span>
    </Link>
  );
};

export default OrganizationItem;
