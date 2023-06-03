import axios from "axios";
import { resolve } from "./resolve.js";
import { apiUrl } from "../constants/apiUrl.js";

const userUrl = `${apiUrl}/api/user`;

export const getUser = async (mail) => {
  return await resolve(
    axios
      .get(userUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          mail,
        },
      })
      .then((res) => res.data)
  );
};

export const updateUser = async (
  userObj = {
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    address: "",
    mailAddress: "",
    password: "",
    orderHistory: [],
  }
) => {
  return await resolve(
    axios
      .put(`${userUrl}`, userObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data)
  );
};

export const deleteUser = async (userId) => {
  return await resolve(
    axios
      .delete(`${restaurantUserUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          userId,
        },
      })
      .then((res) => res.data)
  );
};

export const createOrder = async (mail, orderId) => {
  return await resolve(
    axios
      .put(`${userUrl}/create-order`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          mail,
          orderId,
        },
      })
      .then((res) => res.data)
  );
};

export const createUser = async (
  userObj = {
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    address: "",
    mailAddress: "",
    password: "",
    orderHistory: [],
  }
) => {
  return await resolve(
    axios
      .post(`${userUrl}/create`, userObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data)
  );
};
