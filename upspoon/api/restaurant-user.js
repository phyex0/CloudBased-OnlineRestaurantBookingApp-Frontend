import { client } from "./index";
const url = `restaurant-user/api/`;

export const getRestaurantUser = async (organizationId, page = 0, size = 1) => {
  try {
    const response = await client.get(url, {
      params: {
        organizationId: organizationId,
        pageable: {
          page: page,
          size: size,
          sort: ["string"],
        },
      },
    });
    return response.data;
  } catch (err) {
    // return error to user
    console.log(err);
    return err;
  }
};
