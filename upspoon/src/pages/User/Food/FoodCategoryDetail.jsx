import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Campaigns from '../../../components/Campaigns'
import AccordionCategory from '../../../components/AccordionCategory'
import { useWindowWidth } from '@react-hook/window-size'
import { FaPlus } from 'react-icons/fa';

const products = [
    {
        id: 1,
        name: "Organik Yumurta",
        price: 12.99,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
    {
        id: 2,
        name: "Kırmızı Elma",
        price: 1.99,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
    {
        id: 3,
        name: "Tam Yağlı Süt",
        price: 5.99,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
    {
        id: 4,
        name: "Taze Çilek",
        price: 4.99,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
    {
        id: 5,
        name: "Doğal Bal",
        price: 19.99,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
    {
        id: 6,
        name: "Organik Brokoli",
        price: 3.99,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
    {
        id: 7,
        name: "Taze Ekmek",
        price: 2.49,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
    {
        id: 8,
        name: "Tam Tahıllı Makarna",
        price: 4.99,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
    {
        id: 9,
        name: "Dondurulmuş Yaban Mersini",
        price: 6.99,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
    {
        id: 10,
        name: "Doğal Tavuk Göğsü",
        price: 16.99,
        image: "https://cdn.getir.com/product/579b4033ec61940300514099_tr_1618323887986.jpeg",
    },
];


const items = [
    { id: 1, name: "Dondurma", price: 10 },
    { id: 2, name: "Meybuz", price: 20 },
    { id: 3, name: "Kalafat", price: 30 },
];

const FoodCategoryDetail = () => {
    const width = useWindowWidth()
    const { name } = useParams();
    useEffect(() => {
        document.title = name;
    }, []);
    return (
        <div>
            <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
                {width > 640 && <Campaigns />}
            </div>
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mx-8">
                <AccordionCategory />
                <div className="grid grid-cols-4 gap-4 w-full px-4">
                    {products.map((product) => (
                        <a href={`/user/food/${name}/${product.name}/detail`}>
                            <div key={product.id} className="border rounded-md shadow-md relative">
                                <button className="absolute top-0 right-0 m-2 py-1 px-1 bg-white text-green-500 font-bold rounded-md hover:bg-green-500 hover:text-white focus:outline-none border-2 border-green-500">
                                    <FaPlus />
                                </button>
                                <img src={product.image} alt={product.name} className="w-full object-cover h-48" />
                                <div className="p-4">
                                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                                    <p className="text-green-500 text-lg font-medium">{product.price} TL</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="bg-white border rounded-md shadow-md p-4 mt-4 md:mt-0">
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} className="flex justify-between mb-2">
                                <p className="mr-2">{item.name}</p>
                                <p>{item.price} TL</p>
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg font-medium mt-4">
                        Toplam: {items.reduce((total, item) => total + item.price, 0)} TL
                    </p>
                    <button className="bg-green-500 text-white rounded-md px-4 py-2 mt-4">Satın Al</button>
                </div>
            </div>
            );
        </div>
    );

};

export default FoodCategoryDetail;
