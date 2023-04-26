import React, { useState } from 'react';
const ContentMenu = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const data = {
        title: 'İçim Tereyağı 500g',
        ingredients: [
            'Pastörize inek sütü yağı',
            'Tuz (1.5%)',
            'Peynir kültürü',
            'Maya',
        ],
        nutrition: [
            { name: 'Enerji', value: '744 kcal' },
            { name: 'Yağ', value: '82 g' },
            { name: 'Doymuş Yağ', value: '57 g' },
            { name: 'Karbonhidrat', value: '0.6 g' },
            { name: 'Şeker', value: '0.6 g' },
            { name: 'Protein', value: '0.5 g' },
            { name: 'Tuz', value: '1.5 g' },
        ],
        usage:
            'Bu ürünü serin ve kuru bir yerde saklayınız. Üzerindeki tarih son kullanma tarihini gösterir. İçtikten sonra buzdolabında saklayınız ve en kısa zamanda tüketiniz.',
        extraInfo: [
            {
                name: 'Ambalaj',
                value: 'Karton kutu',
            },
            {
                name: 'Menşei',
                value: 'Türkiye',
            },
            {
                name: 'Saklama Koşulları',
                value: 'Serin ve kuru yerde saklayınız.',
            },
        ]
    };
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex space-x-4">
                <button
                    className={`${openIndex === 0 ? 'bg-gray-100' : ''
                        } flex-grow-1 text-left text-gray-700 font-semibold py-2`}
                    onClick={() => setOpenIndex(0)}
                >
                    İçindekiler
                </button>
                <button
                    className={`${openIndex === 1 ? 'bg-gray-100' : ''
                        } flex-grow-1 text-left text-gray-700 font-semibold py-2`}
                    onClick={() => setOpenIndex(1)}
                >
                    Besin Değerleri
                </button>
                <button
                    className={`${openIndex === 2 ? 'bg-gray-100' : ''
                        } flex-grow-1 text-left text-gray-700 font-semibold py-2`}
                    onClick={() => setOpenIndex(2)}
                >
                    Kullanım
                </button>
                <button
                    className={`${openIndex === 3 ? 'bg-gray-100' : ''
                        } flex-grow-1 text-left text-gray-700 font-semibold py-2`}
                    onClick={() => setOpenIndex(3)}
                >
                    Ek Bilgiler
                </button>
            </div>
            {openIndex === 0 && (
                <ul className="list-disc list-inside mt-2 ml-4">
                    {data.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            {openIndex === 1 && (
                <table className="table-auto mt-2 ml-4">
                    <tbody>
                        {data.nutrition.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {openIndex === 2 && (
                <p className="mt-2 ml-4">{data.usage}</p>
            )}
            {openIndex === 3 && (
                <ul className="list-disc list-inside mt-2 ml-4">
                    {data.extraInfo.map((item, index) => (
                        <li key={index}>
                            <span className="font-semibold">{item.name}: </span>
                            <span>{item.value}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};



export default ContentMenu;