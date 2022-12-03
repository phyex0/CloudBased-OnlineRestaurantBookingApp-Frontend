import { client } from "./index";
const url = `order-service/api/product`;

export const getOrders = async (organizationId, productId) => {
  try {
    const response = await client.get(url, {
      params: {
        organizationId: organizationId,
        productId: productId,
      },
    });
    return response.data;
  } catch (err) {
    // return error to user
    console.log(err);
    return err;
  }
};
