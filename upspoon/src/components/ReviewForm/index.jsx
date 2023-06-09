import { useState } from "react";
import { successMessage } from "../../helpers/toast";

function ReviewForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        successMessage("Your review succesfully sended!")
    };

    return (
        <div className="mt-8">
            <h2 className="text-lg font-medium">Make review</h2>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="name" className="block font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 block w-1/4 rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 px-4"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        E-Mail
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 block w-1/4 rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 px-4"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="comment" className="block font-medium text-gray-700">
                        Review
                    </label>
                    <textarea
                        name="comment"
                        id="comment"
                        rows="4"
                        className="mt-1 block w-1/4 rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 px-4"
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ReviewForm;