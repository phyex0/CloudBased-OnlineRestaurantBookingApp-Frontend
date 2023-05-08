import axios from "axios";
import { resolve } from "./resolve.js";
import { apiUrl } from "../constants/apiUrl.js";

const orderUrl = `${apiUrl}/order-service/api`;

export const getProduct = async (organizationId, productId) => {
  return await resolve(
    axios
      .get(`${orderUrl}/product`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
          productId,
        },
      })
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
      .put(`${orderUrl}/product`, productObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
          menuId,
          productId,
          businessTypes,
        },
      })
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
      .post(`${orderUrl}/product`, productObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
          menuId,
        },
      })
      .then((res) => res.data)
  );
};

export const deleteProduct = async (organizationId, productId, menuId) => {
  return await resolve(
    axios
      .delete(`${orderUrl}/product`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
          productId,
          menuId,
        },
      })
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
      .get(`${orderUrl}/menu`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};

export const updateMenu = async (
  organizationId,
  menuId,
  menuObj = {
    name: "hey",
  }
) => {
  return await resolve(
    axios
      .put(`${orderUrl}/menu`, menuObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
          menuId,
        },
      })
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
      .post(`${orderUrl}/menu`, menuObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
        },
      })
      .then((res) => res.data)
  );
};

export const deleteMenu = async (organizationId, menuId) => {
  return await resolve(
    axios
      .delete(`${orderUrl}/menu`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
          menuId,
        },
      })
      .then((res) => res.data)
  );
};

export const getOrganization = async (organizationId) => {
  return await resolve(
    axios
      .get(`${orderUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
        },
      })
      .then((res) => res.data)
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
    axios
      .post(`${orderUrl}`, orderObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data)
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
      .get(`${orderUrl}/product-list`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          organizationId,
          menuId,
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
      .get(`${orderUrl}/get-order-history`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          userId,
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
  return await resolve(
    axios
      .get(`${orderUrl}/business`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          businessTypes,
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};
