import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Campaigns from "../../../components/Campaigns";
import AccordionCategory from "../../../components/AccordionCategory";
import { useWindowWidth } from "@react-hook/window-size";
import { FaPlus } from "react-icons/fa";
import { errorMessage, successMessage } from "../../../helpers/toast";
import { getMenu, getProducts } from "../../../api/order";
import Food5 from "../../../assets/images/food-5.webp";
import { prettySlug } from "../../../helpers/slug";
import AuthContext from "../../../context/Auth";

const FoodCategoryDetail = () => {
  const width = useWindowWidth();
  const { name } = useParams();
  const location = useLocation();

  const [menuList, setMenuList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);

  const [organizationId, setOrganizationId] = useState(null);

  const { addProductToCart } = useContext(AuthContext);

  useEffect(() => {
    document.title = name;

    const organizationId = getOrganizationId();
    getRestaurantMenu(organizationId);
  }, [location.search]);

  useEffect(() => {
    const organizationId = getOrganizationId();
    console.log("organizationId: ", organizationId);

    if (organizationId && activeMenu) {
      getMenuProducts(organizationId);
    }
  }, [activeMenu]);

  const getOrganizationId = () => {
    const queryParams = new URLSearchParams(location.search);
    setOrganizationId(queryParams.get("organizationId"));

    return queryParams.get("organizationId");
  };

  const getRestaurantMenu = async (organizationId) => {
    try {
      let response = await getMenu(organizationId);
      console.log("menu response: ", response.data.content);
      setMenuList(response.data.content);
      setActiveMenu(response.data.content[0]);
    } catch (err) {
      errorMessage("Can't get restaurant menu.");
    } finally {
    }
  };

  const getMenuProducts = async (organizationId) => {
    try {
      let response = await getProducts(organizationId, activeMenu.id);
      console.log("product response: ", response);
      setProductList(response.data.content);
    } catch (err) {
      errorMessage("Can't get products.");
    } finally {
    }
  };

  const activeMenuItemStyle = (id) => {
    if (id === activeMenu.id) {
      return "bg-green-400 text-white";
    } else {
      return "text-green-400";
    }
  };

  return (
    <div>
      <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
        {width > 640 && <Campaigns />}
      </div>
      <div class="flex flex-col md:flex-row md:justify-between md:items-start mx-8">
        {/* Menu */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg text-center underline mb-2">
            Menu
          </h4>
          {menuList.map((menu) => (
            <button
              key={menu.id}
              className={[
                "font-semibold bg-green-100 px-1 py-3 rounded-md hover:bg-green-400 transition-all duration-100",
                activeMenuItemStyle(menu.id),
              ].join(" ")}
              onClick={() => {
                setActiveMenu(menu);
              }}
            >
              {menu.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2 w-full px-8">
          {productList.map((product) => (
            <Link
              to={`/user/food/detail/${prettySlug(
                product.productName
              )}?menuId=${activeMenu.id}&productId=${
                product.productCode
              }&organizationId=${organizationId}`}
            >
              <div
                key={product.productCode}
                className="border rounded-md shadow-md relative z-40"
              >
                <button
                  className="absolute top-0 right-0 m-2 py-2 px-2 bg-white text-green-500 font-bold rounded-md hover:bg-green-500 hover:text-white focus:outline-none border-2 border-green-500"
                  onClick={(e) => {
                    e.preventDefault();
                    addProductToCart(product);
                    successMessage("Product added to cart.");
                  }}
                >
                  <FaPlus />
                </button>
                <img
                  src={product.productImage ? product.productImage : Food5}
                  alt={product.productName}
                  className="w-full object-cover h-48"
                />

                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">
                    {product.productName}
                  </h3>
                  <p className="text-green-500 text-lg font-medium">
                    {product.price}₺
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="bg-white border rounded-md shadow-md p-4 mt-4 md:mt-0">
          {items?.length == 0 ? (
            <div>Sepetin boş</div>
          ) : (
            <div>
              <ul>
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between mb-2">
                    <p className="mr-2">{item.name}</p>
                    <p>{item.price} TL</p>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium mt-4">
                Toplam: {items.reduce((total, item) => total + item.price, 0)}{" "}
                TL
              </p>
            </div>
          )}
          <button className="bg-green-500 text-white rounded-md px-4 py-2 mt-4">
            Satın Al
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FoodCategoryDetail;
