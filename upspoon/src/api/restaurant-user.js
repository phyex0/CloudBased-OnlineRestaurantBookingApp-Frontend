import axios from "axios";
import { resolve } from "./resolve.js";
import { apiUrl } from "../constants/apiUrl.js";

const restaurantUserUrl = `${apiUrl}/restaurant-user/api`;

export const getAllUsers = async (
  organizationId,
  pageableObj = {
    page: 0,
    size: 1,
  }
) => {
  return await resolve(
    axios
      .get(restaurantUserUrl, {
        params: {
          organizationId,
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};

export const updateUser = async (
  userId,
  userObj = {
    name: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    email: "",
  }
) => {
  return await resolve(
    axios.put(`${restaurantUserUrl}/${userId}`, userObj).then((res) => res.data)
  );
};

export const createUser = async (
  restaurantId,
  userObj = {
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    email: "",
  }
) => {
  return await resolve(
    axios
      .post(`${restaurantUserUrl}/${restaurantId}`, userObj)
      .then((res) => res.data)
  );
};

export const deleteUser = async (userId) => {
  return await resolve(
    axios.delete(`${restaurantUserUrl}/${userId}`).then((res) => res.data)
  );
};
