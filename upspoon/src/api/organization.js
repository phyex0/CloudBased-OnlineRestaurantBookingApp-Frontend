import axios from "axios";
import { resolve } from "./resolve.js";
import { apiUrl } from "../constants/apiUrl.js";

const organizationUrl = `${apiUrl}/organization/api`;

export const getOrganizationsByUserId = async (restaurantUserId, pageable) => {
  return await resolve(
    axios
      .get(organizationUrl, {
        params: {
          restaurantUserId,
          ...pageable,
        },
      })
      .then((res) => res.data)
  );
};

export const updateRestaurant = async (
  restaurantId,
  organizationObj = {
    organizationName: "",
    packageService: "",
    fullAddress: "",
  }
) => {
  return await resolve(
    axios
      .put(`${organizationUrl}/${restaurantId}`, organizationObj)
      .then((res) => res.data)
  );
};

export const createOrganization = async (
  organizationAndRestaurantUserObj = {
    newOrganizationDTO: {
      organizationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      organizationName: "",
      packageService: "",
      fullAddress: "",
      businessTypes: "",
    },
    newRestaurantUserDTO: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "",
      lastName: "",
      middleName: "",
      phoneNumber: "",
      email: "",
    },
  }
) => {
  return await resolve(
    axios
      .post(organizationUrl, organizationAndRestaurantUserObj)
      .then((res) => res.data)
  );
};

export const deleteRestaurant = async (restaurantId) => {
  return await resolve(
    axios.delete(`${organizationUrl}/${restaurantId}`).then((res) => res.data)
  );
};

// Creates a new organization and links to given organization
export const createBusiness = async (organizationId) => {
  return await resolve(
    axios
      .post(`${organizationUrl}/create-business/${organizationId}`)
      .then((res) => res.data)
  );
};

export const linkUserToGivenRestaurant = async (restaurantId, userId) => {
  return await resolve(
    axios
      .get(
        `${organizationUrl}/link-user-to-given-restaurant/${restaurantId}/${userId}`
      )
      .then((res) => res.data)
  );
};

export const unlinkUserFromRestaurant = async (userId, restaurantId) => {
  return await resolve(
    axios
      .delete(
        `${organizationUrl}/unlink-user-from-given-restaurant/${userId}/${restaurantId}`
      )
      .then((res) => res.data)
  );
};
