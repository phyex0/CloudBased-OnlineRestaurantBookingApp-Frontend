import axios from "axios";
import { resolve } from "./resolve.js";
import { apiUrl } from "../constants/apiUrl.js";

const stockUrl = `${apiUrl}/stock/api/`;

export const updateStock = async (productId, count) => {
  let stockObj = {
    productId,
    count,
  };
  return await resolve(
    axios
      .put(stockUrl, stockObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data)
  );
};

export const createStock = async (productId, count) => {
  let stockObj = {
    productId,
    count,
  };
  return await resolve(
    axios
      .post(stockUrl, stockObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        productId,
        count,
      })
      .then((res) => res.data)
  );
};
