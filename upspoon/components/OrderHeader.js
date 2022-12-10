import { FiGlobe } from 'react-icons/fi';
import { HiUser, HiUserAdd } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io'

function OrderHeader() {
    return (
        <>
            <div className="bg-green-800 px-8">
                <div className="h-14 sm:h-11 container mx-auto flex items-center justify-center sm:justify-between">
                    <a href="#" className="text-lg text-white font-semibold">
                        <a href="#"
                            className="hover:transition-colors text-white text-xl font-semibold gap-x-2 flex items-center">
                            Upspoon LOGOMARK
                        </a>
                    </a>
                    <nav className="gap-x-8 hidden sm:flex">
                        <a href="#"
                            className="hover:text-opacity-100 transition-colors text-white text-opacity-80 text-sm font-semibold gap-x-2 flex items-center">
                            <FiGlobe size={18} />
                            Türkçe (TR)
                        </a>
                        <a href="#"
                            className="hover:text-opacity-100 transition-colors text-white text-opacity-80 text-sm font-semibold gap-x-2 flex items-center">
                            <HiUser size={18} />
                            Giriş yap
                        </a>
                        <a href="#"
                            className="hover:text-opacity-100 transition-colors text-white text-opacity-80 text-sm font-semibold gap-x-2 flex items-center">
                            <HiUserAdd size={19} />
                            Kayıt ol
                        </a>
                    </nav>
                </div>
            </div>
            <button className="flex bg-white h-10 w-full items-center px-3 sm:hidden justify-between">
                <div className="flex items-center">
                    <span className="text-green-700">
                        <IoLocationSharp />
                    </span>
                    <span className="text-sm font-semibold text-gray-700 ml-1">Teslimat Adresi Belirle</span>
                </div>
                <span className="text-green-700">
                    <IoIosArrowForward size={18} />
                </span>
            </button>
        </>
    )
}

export default OrderHeader