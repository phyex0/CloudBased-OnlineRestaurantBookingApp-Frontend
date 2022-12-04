import client from "./index";
const url = `restaurant-user/api/`;


export const getRestaurantUser = async (
  organizationId = "652d6ff7-f653-4995-98d3-44440d092006",
  page = 0,
  size = 10
) => {
  let newUrl = url + `?organizationId=${organizationId}&page=${page}&size=${size}`;
  try {
    const response = await client.get(newUrl);
    return response.data;
  } catch (err) {
    // return error to user
    console.log(err);
    return err;
  }
};
