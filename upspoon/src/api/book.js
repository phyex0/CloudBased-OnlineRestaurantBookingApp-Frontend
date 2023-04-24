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
    axios.put(`${bookUrl}`, businessObj).then((res) => res.data)
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
      .post(`${bookUrl}/create-book-detail/${businessId}`, bookDetailObj)
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
      .get(`${bookUrl}/get-books-for-business/${businessId}/${date}`, {
        params: {
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
      .get(`${bookUrl}/get-book-details-for-business/${businessId}/${bookId}`, {
        params: {
          ...pageableObj,
        },
      })
      .then((res) => res.data)
  );
};

export const enableBooking = async (restaurantId, day) => {
  return await resolve(
    axios
      .get(
        `${bookUrl}/enable-booking-for-given-amount-of-day/${restaurantId}/${day}`
      )
      .then((res) => res.data)
  );
};

export const deleteBook = async (businessId, bookId) => {
  return await resolve(
    axios
      .delete(`${bookUrl}/delete-book/${businessId}/${bookId}`)
      .then((res) => res.data)
  );
};

export const cancelBook = async (businessId, bookDetailId) => {
  return await resolve(
    axios
      .delete(`${bookUrl}/cancel-book-detail/${businessId}/${bookDetailId}`)
      .then((res) => res.data)
  );
};
