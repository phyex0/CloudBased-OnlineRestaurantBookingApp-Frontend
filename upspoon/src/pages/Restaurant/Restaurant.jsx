import { useState, useEffect, useContext } from "react";
import styles from "../../styles/restaurant/RestaurantHome.module.css";
import {
  createMenu,
  createProduct,
  getMenu,
  getProduct,
  getProducts,
} from "../../api/order";
import AuthContext from "../../context/Auth";
import Menu from "../../components/Menu";
import Modal from "react-modal";
import { Input } from "@chakra-ui/react";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { errorMessage, successMessage } from "../../helpers/toast";

/*
let fakeMenu = {
  content: [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "Chicken Menu",
      productList: [
        {
          productCode: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          productName: "2 li Nugget",
          description: "Patates ve istediğiniz içecek ile birlikte 2 li Nugget",
          price: 68,
          productImage: "string",
        },
      ],
    },
  ],
  number: 0,
  size: 0,
  totalElements: 0,
  pageable: {
    offset: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
    pageNumber: 0,
    pageSize: 0,
    unpaged: true,
    paged: true,
  },
  last: true,
  totalPages: 0,
  sort: {
    empty: true,
    sorted: true,
    unsorted: true,
  },
  first: true,
  numberOfElements: 0,
  empty: true,
};

let fakeProductList = {
  content: [
    {
      productCode: "string",
      productName: "string",
      description: "string",
      price: 0,
      productImage: "string",
    },
  ],
  number: 0,
  size: 0,
  totalElements: 0,
  pageable: {
    offset: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
    pageNumber: 0,
    pageSize: 0,
    unpaged: true,
    paged: true,
  },
  last: true,
  totalPages: 0,
  sort: {
    empty: true,
    sorted: true,
    unsorted: true,
  },
  first: true,
  numberOfElements: 0,
  empty: true,
};
*/

const Restaurant = () => {
  const [restaurantMenus, setRestaurantMenus] = useState([]);
  const [addProductModalIsOpen, setAddProductModalIsOpen] = useState(false);
  const [activeMenuData, setActiveMenuData] = useState(null);
  const [addMenuModal, setAddMenuModal] = useState(false);

  const [organizationId, setOrganizationId] = useState(
    "2d0f0a27-70b9-4f67-8fad-c4a449b9e9f9"
  );

  // product
  const [product, setProduct] = useState({
    productCode: "",
    productName: "",
    description: "",
    price: 0,
    productImage: "",
  });

  const [menu, setMenu] = useState({
    menuName: "",
    // productCode: "",
    // productName: "",
    // description: "",
    // price: 0,
    // productImage: "",
  });

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      let response = await getMenu(organizationId);
      console.log("get menu response: ", response);

      setRestaurantMenus(response?.data?.content);
    } catch (err) {
      errorMessage("There is an error while getting menu.");
    }
  };

  const addProductToMenu = async () => {
    console.log("add product to menu: ", activeMenuData.id);
    try {
      let response = await createProduct(
        organizationId,
        activeMenuData.id,
        product
      );
      console.log("add product to menu response: ", response);
    } catch (err) {
      errorMessage("There is an error while adding product to menu.");
    } finally {
      setAddProductModalIsOpen(false);
    }
  };

  const addMenu = async () => {
    try {
      let response = await createMenu(organizationId, {
        name: menu.menuName,
        productList: [menu],
      });
      console.log("add menu response: ", response);
      successMessage("Menu created successfully.");
      getRestaurantMenu();
    } catch (err) {
      errorMessage("There is an error while creating menu.");
    } finally {
      setAddMenuModal(false);
    }
  };

  return (
    <div className={styles.container}>
      <Modal
        isOpen={addProductModalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setAddProductModalIsOpen(false);
        }}
        className="bg-white relative flex flex-col w-full md:w-1/2 mx-auto mt-20 dark:bg-gray-800 dark:text-white rounded-md shadow-md px-6 py-4"
        contentLabel="Add Product"
      >
        <button
          className="absolute right-3 top-3"
          onClick={() => {
            setAddProductModalIsOpen(false);
          }}
        >
          <Close width="22" height="22" />
        </button>
        <h2>
          Add Product to{" "}
          <span className="font-semibold">{activeMenuData?.name}</span>
        </h2>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex flex-col gap-1">
            <p className={styles.modalTitle}>Product Code</p>
            <Input
              placeholder="Enter Product Code"
              size="md"
              value={product.productCode}
              onChange={(e) => {
                setProduct({ ...product, productCode: e.target.value });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className={styles.modalTitle}>Product Name</p>
            <Input
              placeholder="Enter Product Name"
              size="md"
              value={product.productName}
              onChange={(e) => {
                setProduct({ ...product, productName: e.target.value });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className={styles.modalTitle}>Product Description</p>
            <Input
              placeholder="Enter Product Description"
              size="md"
              value={product.description}
              onChange={(e) => {
                setProduct({ ...product, description: e.target.value });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className={styles.modalTitle}>Product Price</p>
            <Input
              placeholder="Enter Product Price"
              size="md"
              value={product.price}
              onChange={(e) => {
                setProduct({ ...product, price: e.target.value });
              }}
            />
          </div>
        </div>

        <button
          className="border rounded-md px-3 py-2 mr-auto mt-4 font-semibold bg-main text-white"
          onClick={() => {
            addProductToMenu();
          }}
        >
          Add Product
        </button>

        {/* <div className="flex flex-col gap-2">
          <p className={styles.modalTitle}>Product Image</p>
          <Input placeholder='' size='md' />
        </div> */}
      </Modal>
      <Modal
        isOpen={addMenuModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setAddMenuModal(false);
        }}
        className="bg-white relative flex flex-col w-full md:w-1/2 mx-auto mt-20 dark:bg-gray-800 dark:text-white rounded-md shadow-md px-6 py-4"
        contentLabel="Add Menu"
      >
        <button
          className="absolute right-3 top-3"
          onClick={() => {
            setAddProductModalIsOpen(false);
          }}
        >
          <Close width="22" height="22" />
        </button>
        <h2>
          Add Menu to <span className="font-semibold">Restaurant</span>
        </h2>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex flex-col gap-1">
            <p className={styles.modalTitle}>Menu Name</p>
            <Input
              placeholder="Enter Menu Name"
              size="md"
              value={menu.menuName}
              onChange={(e) => {
                setMenu({ ...menu, menuName: e.target.value });
              }}
            />
          </div>

          {/* <h4 className="font-semibold mt-4 mb-1 text-lg">Menüye Ürün Ekle</h4>

          <div className="flex flex-col gap-1">
            <p className={styles.modalTitle}>Product Code</p>
            <Input
              placeholder="Enter Product Code"
              size="md"
              value={menu.productCode}
              onChange={(e) => {
                setMenu({ ...menu, productCode: e.target.value });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className={styles.modalTitle}>Product Name</p>
            <Input
              placeholder="Enter Product Name"
              size="md"
              value={menu.productName}
              onChange={(e) => {
                setMenu({ ...menu, productName: e.target.value });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className={styles.modalTitle}>Product Description</p>
            <Input
              placeholder="Enter Product Description"
              size="md"
              value={menu.description}
              onChange={(e) => {
                setMenu({ ...menu, description: e.target.value });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className={styles.modalTitle}>Product Price</p>
            <Input
              placeholder="Enter Product Price"
              size="md"
              value={menu.price}
              onChange={(e) => {
                setMenu({ ...menu, price: e.target.value });
              }}
            />
          </div> */}
        </div>

        <button
          className="border rounded-md px-3 py-2 mr-auto mt-4 font-semibold bg-main text-white"
          onClick={() => {
            addMenu();
          }}
        >
          Add Menu
        </button>

        {/* <div className="flex flex-col gap-2">
          <p className={styles.modalTitle}>Product Image</p>
          <Input placeholder='' size='md' />
        </div> */}
      </Modal>
      <div className={styles.menuSection}>
        <div className="flex justify-between items-center mb-4">
          <h4 className={styles.title}>{organizationId} Menu</h4>
          <button
            className="border rounded-md px-3 py-2 font-semibold bg-main text-white"
            onClick={() => {
              setAddMenuModal(true);
            }}
          >
            Add Menu
          </button>
        </div>

        <div className={styles.menusContainer}>
          {restaurantMenus?.map((menu) => (
            <Menu
              menuData={menu}
              key={menu.id}
              addProduct={(menuData) => {
                setAddProductModalIsOpen(true);
                setActiveMenuData(menuData);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
