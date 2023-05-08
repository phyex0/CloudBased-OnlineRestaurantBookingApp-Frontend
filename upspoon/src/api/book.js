import axios from "axios";
import { resolve } from "./resolve.js";
import { apiUrl } from "../constants/apiUrl.js";

const bookUrl = `${apiUrl}/book/api`;

export const updateBusiness = async (
  businessObj = {
    organizationName: "",
    packageService: "",
    fullAddress: "",
  }
) => {
  return await resolve(
    axios
      .put(`${bookUrl}`, businessObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data)
  );
};

export const createBook = async (
  businessId,
  bookDetailObj = {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    fullName: "",
    phoneNumber: "",
    numberOfPeople: 0,
    bookDate: "2023-04-24T14:29:50.617Z",
    tableNumber: 1,
  }
) => {
  return await resolve(
    axios
      .post(`${bookUrl}/create-book-detail`, bookDetailObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          businessId,
        },
      })
      .then((res) => res.data)
  );
};

export const getBooks = async (
  businessId,
  date,
  pageableObj = {
    page: 0,
    size: 1,
  }
) => {
  return await resolve(
    axios
      .get(`${bookUrl}/get-books-for-business`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          businessId,
          date,
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};

export const getBookDetail = async (
  businessId,
  bookId,
  pageableObj = {
    page: 0,
    size: 1,
  }
) => {
  return await resolve(
    axios
      .get(`${bookUrl}/get-book-details-for-business`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          businessId,
          bookId,
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};

export const enableBooking = async (restaurantId, day) => {
  return await resolve(
    axios
      .get(`${bookUrl}/enable-booking-for-given-amount-of-day`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          restaurantId,
          day,
        },
      })
      .then((res) => res.data)
  );
};

export const deleteBook = async (businessId, bookId) => {
  return await resolve(
    axios
      .delete(`${bookUrl}/delete-book`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          businessId,
          bookId,
        },
      })
      .then((res) => res.data)
  );
};

export const cancelBook = async (businessId, bookDetailId) => {
  return await resolve(
    axios
      .delete(`${bookUrl}/cancel-book-detail`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          businessId,
          bookDetailId,
        },
      })
      .then((res) => res.data)
  );
};
