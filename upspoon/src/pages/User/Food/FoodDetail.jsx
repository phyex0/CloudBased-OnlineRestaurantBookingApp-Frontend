import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ContentMenu from '../../../components/ContentMenu'

const FoodDetail = ({ product }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-start justify-center bg-white p-4 md:p-8">
            <div className="w-full md:w-1/3 border-2 border-green-500 border-opacity-50">
                <img
                    className="w-full"
                    src="https://market-product-images-cdn.getirapi.com/product/a0983334-2757-481e-955e-8a9b0dc916c7.jpg"
                    alt="Product image"
                />
            </div>
            <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0 flex flex-col justify-start">
                <h1 className="text-xl md:text-2xl font-semibold mb-1">
                    İçim Tereyağı
                </h1>
                <span className="text-sm md:text-sm text-gray-600 mb-2">
                    500g
                </span>
                <p className="text-lg md:text-xl font-medium text-gray-700 mb-4">
                    1. Sınıf lezzeti ile sofralarınıza lezzet katmaya hazır
                </p>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center flex-col">
                        <span className="text-lg md:text-xl font-semibold">
                            ₺18,45
                        </span>
                        <span className="text-lg md:text-xl text-gray-400 line-through">
                            ₺20,50
                        </span>
                    </div>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none w-1/4 mb-4">
                    Sepete Ekle
                </button>
                <ContentMenu />
            </div>

        </div >
    );
};

export default FoodDetail;