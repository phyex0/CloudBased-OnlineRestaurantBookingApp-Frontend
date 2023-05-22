import React from "react";
import { Link } from "react-router-dom";
const restaurants = [
  {
    "name": "Le Comptoir du Relais",
    "description": "French cuisine in a cozy, traditional bistro setting.",
    "image": "https://res.cloudinary.com/tf-lab/image/upload/w_1200,c_fill,q_auto,f_auto,b_white/restaurant/34851720-af46-4ddd-abe1-c99e67d4cc62/26b3e7a0-563c-4b54-8685-29bed84bc470.jpg",
    "location": "Paris, France"
  },
  {
    "name": "Pizza East",
    "description": "Authentic wood-fired pizzas in a trendy, industrial space.",
    "image": "https://res.cloudinary.com/tf-lab/image/upload/w_1200,c_fill,q_auto,f_auto,b_white/restaurant/40a66d81-3547-4e9c-8ce4-9c1a4368dbf9/2300f288-8e8f-44d1-9d55-d118c6fc7cc3.jpg",
    "location": "London, UK"
  },
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
  {
    "name": "Le Comptoir du Relais",
    "description": "French cuisine in a cozy, traditional bistro setting.",
    "image": "https://res.cloudinary.com/tf-lab/image/upload/w_1200,c_fill,q_auto,f_auto,b_white/restaurant/34851720-af46-4ddd-abe1-c99e67d4cc62/26b3e7a0-563c-4b54-8685-29bed84bc470.jpg",
    "location": "Paris, France"
  },
  {
    "name": "Pizza East",
    "description": "Authentic wood-fired pizzas in a trendy, industrial space.",
    "image": "https://res.cloudinary.com/tf-lab/image/upload/w_1200,c_fill,q_auto,f_auto,b_white/restaurant/40a66d81-3547-4e9c-8ce4-9c1a4368dbf9/2300f288-8e8f-44d1-9d55-d118c6fc7cc3.jpg",
    "location": "London, UK"
  },
]

const selections = [
  {
    id: 'france-top-10',
    name: "Fransa'nın en iyi restoranları",
    image: 'https://cdn-blog.thefork.com/static/styles/half_container_xl/public/2021-06/ambiance-560x413.webp?VersionId=sE4i3F8DiCeJ3TaM0Q6DxkFihXm10Y6Y&itok=B35wkbZY',
    description: 'Fransa\'nın en iyi restoranları listesi.',
  },
  {
    id: 'italy-top-10',
    name: "İtalya'nın en iyi restoranları",
    image: 'https://c.tfstatic.com/w_2560,h_480,c_fill,g_center,q_auto,f_auto/restaurant_tag/tag/891/banner_4_marketing/ca982f633de867573d955bd7aeba659e.png',
    description: 'İtalya\'nın en iyi restoranları listesi.',
  },
  {
    id: 'spain-top-10',
    name: "İspanya'nın en iyi restoranları",
    image: 'https://res.cloudinary.com/tf-lab/image/upload/w_1200,c_fill,q_auto,f_auto,b_white/restaurant/2b12a701-8df1-4444-a4d1-9135b467c609/283357ad-52fe-439b-9ac7-66062f08611b.jpg',
    description: 'İspanya\'nın en iyi restoranları listesi.',
  }
];

const UserBooking = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4 mt-8">Restaurants chosen for you</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Link to={`/user/booking/${restaurant.name}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{restaurant.name}</h2>
                <p className="text-gray-600">{restaurant.location}</p>
                <p className="mt-2 text-sm text-gray-700">{restaurant.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* <div>
        <h2 class="text-2xl font-bold my-4">UpSpoon selections</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {selections.map((selection) => (
            <div key={selection.id} class="bg-white rounded-lg overflow-hidden shadow-md">
              <img class="w-full h-40 object-cover" src={selection.image} alt={selection.name} />
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">{selection.name}</h3>
                <p class="text-gray-600 mb-2">{selection.description}</p>
                <a href="#" class="text-blue-500 font-semibold hover:text-blue-700">Daha fazla bilgi</a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default UserBooking;