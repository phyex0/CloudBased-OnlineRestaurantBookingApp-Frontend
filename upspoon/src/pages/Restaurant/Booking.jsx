import React, { useState, useEffect } from "react";
import { getBooks as getBooksAPI } from "../../api/book";
import { Link } from "react-router-dom";

const RestaurantBooking = () => {
  const restaurants = [
    {
      "name": "El Poblet",
      "description": "Inventive Spanish cuisine in a sleek, modern space.",
      "image": "https://res.cloudinary.com/tf-lab/image/upload/w_1200,c_fill,q_auto,f_auto,b_white/restaurant/2b12a701-8df1-4444-a4d1-9135b467c609/283357ad-52fe-439b-9ac7-66062f08611b.jpg",
      "location": "Valencia, Spain"
    },
    {
      "name": "Sushi Nakazawa",
      "description": "Sushi master Daisuke Nakazawa's omakase-only restaurant.",
      "image": "https://res.cloudinary.com/tf-lab/image/upload/w_1200,c_fill,q_auto,f_auto,b_white/restaurant/370cfe7b-70e9-47da-ae64-ef0b6f547f6f/fb1471d3-61f6-4d73-bf88-685fb75d8163.jpg",
      "location": "New York City, USA"
    },
  ]

  return (
    <div className="px-8 py-8">
      <h1 className="text-2xl text-center font-bold text-main mb-10">
        Restaurant Booking
      </h1>
      <div className="px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4 mt-8">Booking restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{restaurant.name}</h2>
                <p className="text-gray-600">{restaurant.location}</p>
                <p className="mt-2 text-sm text-gray-700">{restaurant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantBooking;
