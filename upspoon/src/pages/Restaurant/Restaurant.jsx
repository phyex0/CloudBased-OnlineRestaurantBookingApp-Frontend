import { useState, useEffect } from "react";
import { getRestaurantUserByEmail } from "../../api/restaurant-user";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const [restaurantUser, setRestaurantUser] = useState(null);

  useEffect(() => {
    getRestaurantUserInfo();
  }, []);

  const getRestaurantUserInfo = async () => {
    let email = localStorage.getItem("email");
    let response = await getRestaurantUserByEmail(email);
    console.log("resutaurnt response: ", response);

    setRestaurantUser(response?.data);
  };

  return (
    <div className="px-2 md:px-8 py-8 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-2xl">Restaurant User</h2>
        <p className="text-xl">
          <span className="font-semibold text-lg">Name:</span>{" "}
          {restaurantUser?.name} {restaurantUser?.middleName}{" "}
          {restaurantUser?.lastName}
        </p>
        <p className="text-xl">
          <span className="font-semibold text-lg">Email: </span>
          {restaurantUser?.email}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl">Organizations</h3>
        <div className="flex flex-col gap-6">
          {restaurantUser?.organizations?.map((organization) => (
            <Link
              to={`/restaurant/detail?organization=${JSON.stringify(
                organization
              )}`}
              className="flex flex-col gap-2 bg-green-50 px-4 py-3 rounded-md"
            >
              <p className="text-xl">
                <span className="font-semibold text-lg">Name:</span>{" "}
                {organization?.organizationName}
              </p>
              <p className="text-xl">
                <span className="font-semibold text-lg">
                  Parent Organization:
                </span>{" "}
                {organization?.parentOrganization?.organizationName}
              </p>
              <p className="text-xl">
                <span className="font-semibold text-lg">Address:</span>{" "}
                {organization?.fullAddress}
              </p>
              <p className="text-xl">
                <span className="font-semibold text-lg">Package Service:</span>{" "}
                {organization?.packageService}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
