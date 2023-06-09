import React, { useState } from "react";
import Modal from "react-modal";
import { successMessage } from "../../helpers/toast";

Modal.setAppElement("#root");

const BookingModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleBooking = (e) => {
        e.preventDefault();
        successMessage("Succesfully created!")
        // Perform booking logic here

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Booking Modal"
            className="bg-white relative flex flex-col w-full md:w-1/2 mx-auto mt-4 dark:bg-gray-800 dark:text-white rounded-md shadow-md px-6 py-4"

        >
            <h2 className="text-2xl font-bold mb-4">Book a Table</h2>
            <form onSubmit={handleBooking}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                        Date
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                        Time
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit"
                    >
                        Book
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default BookingModal;
