import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import ReviewForm from '../../../components/ReviewForm'
function BookingDetail() {
    const reviews = [
        {
            id: 1,
            username: "John Doe",
            comment: "Great food and service!",
            date: "May 5, 2023"
        },
        {
            id: 2,
            username: "Jane Smith",
            comment: "Amazing atmosphere and delicious food.",
            date: "May 4, 2023"
        },
        {
            id: 3,
            username: "Bob Johnson",
            comment: "Highly recommended! The staff is very friendly.",
            date: "May 3, 2023"
        }
    ];
    const { name } = useParams();
    useEffect(() => {
        document.title = name;
    }, []);
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-green h-16 flex items-center justify-between px-4">
                <h1 className="text-green-400 font-bold text-lg ">Restaurant Detail Page</h1>
            </header>

            <div className="px-4 py-8 max-w-screen-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img
                        src="https://res.cloudinary.com/tf-lab/image/upload/w_1200,c_fill,q_auto,f_auto,b_white/restaurant/2b12a701-8df1-4444-a4d1-9135b467c609/126a232e-968e-4297-bd4e-dc73f223772a.jpg"
                        alt="Restaurant"
                        className="w-full h-full object-cover"
                    />

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Ristorante Italiano</h2>
                        <p className="text-gray-600 mb-4">
                            Via Roma, 21 - 00186, Rome, Italy - Centro Storico
                        </p>
                        <div className="mb-4">
                            <span className="font-bold">Cuisine:</span> Italian
                        </div>
                        <div className="mb-4">
                            <span className="font-bold">Price range:</span> 35€ - 85€
                        </div>
                        <div className="mb-4">
                            <span className="font-bold">Hours:</span> Open today · 12:30–3:00 PM, 7:30–11:00 PM
                        </div>
                        <button className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-800">
                            Book a table
                        </button>
                    </div>
                </div>
                <div className="my-8">
                    <h2 className="text-2xl font-bold mb-4">About</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, enim eget
                        ullamcorper viverra, elit elit dictum magna, at egestas mauris est ac ante.
                        Suspendisse potenti</p>
                </div>
                <div className="mt-16">
                    <h2 className="text-xl font-medium mb-4">Reviews</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border border-gray-300">#</th>
                                <th className="py-2 px-4 border border-gray-300">Username</th>
                                <th className="py-2 px-4 border border-gray-300">Comment</th>
                                <th className="py-2 px-4 border border-gray-300">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review) => (
                                <tr key={review.id}>
                                    <td className="py-2 px-4 border border-gray-300">{review.id}</td>
                                    <td className="py-2 px-4 border border-gray-300">{review.username}</td>
                                    <td className="py-2 px-4 border border-gray-300">{review.comment}</td>
                                    <td className="py-2 px-4 border border-gray-300">{review.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <ReviewForm />
            </div>
        </div>)
}
export default BookingDetail;