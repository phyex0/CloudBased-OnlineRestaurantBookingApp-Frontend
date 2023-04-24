import axios from "axios";
import { resolve } from "./resolve.js";
import { apiUrl } from "../constants/apiUrl.js";

const orderUrl = `${apiUrl}/order-service/api`;

export const getProduct = async (organizationId, productId) => {
  return await resolve(
    axios
      .get(`${orderUrl}/product/${organizationId}/${productId}`)
      .then((res) => res.data)
  );
};

// businessTypes = "MARKET" || "RESTAURANT" || "BOOK" || "ALL" || "MARKET_RESTAURANT" || "RESTAURANT_BOOK"
export const updateProduct = async (
  organizationId,
  menuId,
  productId,
  businessTypes = "MARKET",
  productObj = {
    productCode: "",
    productName: "",
    description: "",
    price: 0,
    productImage: "",
  }
) => {
  return await resolve(
    axios
      .put(
        `${orderUrl}/product/${organizationId}/${menuId}/${productId}/${businessTypes}`,
        productObj
      )
      .then((res) => res.data)
  );
};

export const createProduct = async (
  organizationId,
  menuId,
  productObj = {
    productCode: "",
    productName: "",
    description: "",
    price: 0,
    productImage: "",
  }
) => {
  return await resolve(
    axios
      .post(`${orderUrl}/product/${organizationId}/${menuId}`, productObj)
      .then((res) => res.data)
  );
};

export const deleteProduct = async (organizationId, productId, menuId) => {
  return await resolve(
    axios
      .delete(`${orderUrl}/product/${organizationId}/${productId}/${menuId}`)
      .then((res) => res.data)
  );
};

export const getMenu = async (
  organizationId,
  pageableObj = {
    page: 0,
    size: 1,
  }
) => {
  return await resolve(
    axios
      .get(`${orderUrl}/menu/${organizationId}`, {
        params: {
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};

export const updateMenu = async (organizationId, menuId) => {
  return await resolve(
    axios
      .put(`${orderUrl}/menu/${organizationId}/${menuId}`)
      .then((res) => res.data)
  );
};

export const createMenu = async (
  organizationId,
  menuObj = {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "",
    productList: [
      {
        productCode: "",
        productName: "",
        description: "",
        price: 0,
        productImage: "",
      },
    ],
  }
) => {
  return await resolve(
    axios
      .post(`${orderUrl}/menu/${organizationId}`, menuObj)
      .then((res) => res.data)
  );
};

export const deleteMenu = async (organizationId, menuId) => {
  return await resolve(
    axios
      .delete(`${orderUrl}/menu/${organizationId}/${menuId}`)
      .then((res) => res.data)
  );
};

export const getOrganization = async (organizationId) => {
  return await resolve(
    axios.get(`${orderUrl}/${organizationId}`).then((res) => res.data)
  );
};

export const createOrder = async (
  orderObj = {
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    productId: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
    orderStatus: "ORDER_CREATED",
    orderNote: "",
  }
) => {
  return await resolve(
    axios.post(`${orderUrl}`, orderObj).then((res) => res.data)
  );
};

export const getProducts = async (
  organizationId,
  menuId,
  pageableObj = {
    page: 0,
    size: 1,
  }
) => {
  return await resolve(
    axios
      .get(`${orderUrl}/product-list/${organizationId}/${menuId}`, {
        params: {
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};

export const getOrderHistory = async (
  userId,
  pageableObj = {
    page: 0,
    size: 1,
  }
) => {
  return await resolve(
    axios
      .get(`${orderUrl}/get-order-history/${userId}`, {
        params: {
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};

// Available values : MARKET, RESTAURANT, BOOK, ALL, MARKET_RESTAURANT, RESTAURANT_BOOK
export const getOrganizationsByBusinessType = async (
  businessTypes,
  pageableObj = {
    page: 0,
    size: 1,
  }
) => {
  console.log("env: ", import.meta.env.VITE_API_DEV);
  console.log("apiUrl: ", apiUrl);
  console.log("orderUrl: ", orderUrl);

  return await resolve(
    axios
      .get(`${orderUrl}/business/${businessTypes}`, {
        params: {
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};
