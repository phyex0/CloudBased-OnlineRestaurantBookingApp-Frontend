import React, { useState, useEffect } from "react";
import { getBooks as getBooksAPI } from "../../api/book";

const RestaurantBooking = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    let businessId = localStorage.getItem("businessId");
    let response = await getBooksAPI(businessId);
    console.log("books response: ", response);
    setBooks(response?.data);
  };

  return (
    <div className="px-8 py-8">
      <h1 className="text-2xl text-center font-bold text-main mb-10">
        Restaurant Booking
      </h1>

      <div>
        bookingleri görecek <br />
        onaylayacak
        <br /> booking masalarını açabilecek
      </div>
    </div>
  );
};

export default RestaurantBooking;
