import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { Link as RouterLink } from "react-router-dom";
import homeBg from "../../assets/images/home-bg.png";
import { createOrganization } from "../../api/organization";

const RestaurantRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [businessType, setBusinessType] = useState(null);

  const onSubmit = async (values) => {
    console.log("values: ", values);
    console.log("businessType: ", businessType);

    let { data, error } = await createOrganization({
      newOrganizationDTO: {
        organizationId: "",
        organizationName: values?.organization_name,
        packageService: values?.package_service,
        fullAddress: values?.full_address,
        businessTypes: businessType?.value,
      },
      newRestaurantUserDTO: {
        userId: "",
        name: values?.user_name,
        lastName: values?.user_last_name,
        middleName: "",
        phoneNumber: values?.phone,
        email: values?.email,
      },
    });

    console.log("data: ", data);
    console.log("error: ", error);
  };

  return (
    <div className="flex h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-1/2 mx-auto py-4 px-8 md:px-16 flex flex-col"
      >
        <h2 className="text-center font-bold mb-8 text-lg">
          Create Organization
        </h2>
        <FormControl isInvalid={errors.name}>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full">
              <FormLabel htmlFor="name">Organization Name</FormLabel>
              <Input
                id="organization_name"
                placeholder="Enter Organization Name"
                type="text"
                {...register("organization_name", {
                  required: "This is required",
                })}
              />

              <FormLabel className="mt-4">Package Service</FormLabel>
              <Input
                id="package_service"
                placeholder="Enter Package Service"
                type="text"
                {...register("package_service", {
                  required: "This is required",
                })}
              />

              <FormLabel className="mt-4">Full Address</FormLabel>
              <Input
                id="full_address"
                placeholder="Enter Full Address"
                type="text"
                {...register("full_address", {
                  required: "This is required",
                })}
              />

              <FormLabel className="mt-4">Business Type</FormLabel>
              <Select
                name="business_types"
                options={[
                  { value: "MARKET", label: "Market" },
                  { value: "RESTAURANT", label: "Restaurant" },
                  { value: "BOOK", label: "Book" },
                  { value: "ALL", label: "All" },
                  { value: "MARKET_RESTAURANT", label: "MARKET_RESTAURANT" },
                  { value: "RESTAURANT_BOOK", label: "RESTAURANT_BOOK" },
                ]}
                value={businessType}
                onChange={(value) => setBusinessType(value)}
                placeholder="Select BusinessType"
                closeMenuOnSelect={true}
              />

              {/* <Select placeholder="Select Business Type">
                <option value="market">Market</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Book">Book</option>
                <option value="All">All</option>
                <option value="MARKET_RESTAURANT">MARKET_RESTAURANT</option>
                <option value="RESTAURANT_BOOK">RESTAURANT_BOOK</option>
              </Select> */}
            </div>

            <div className="w-full">
              <FormLabel htmlFor="name">Restaurant User Name</FormLabel>
              <Input
                id="user_name"
                placeholder="Enter Restaurant Owner Name"
                type="text"
                {...register("user_name", {
                  required: "This is required",
                })}
              />
              <FormLabel htmlFor="name" className="mt-4">
                Restaurant User Last Name
              </FormLabel>
              <Input
                id="user_last_name"
                placeholder="Enter Restaurant Owner Name"
                type="text"
                {...register("user_last_name", {
                  required: "This is required",
                })}
              />

              <FormLabel htmlFor="phone" className="mt-4">
                Phone Number
              </FormLabel>
              <Input
                id="phone"
                placeholder="Enter Phone Number"
                type="number"
                {...register("phone", {
                  required: "This is required",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Phone Number must be digits",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone Number must be 10 digits",
                  },
                })}
              />

              <FormLabel htmlFor="email" className="mt-4">
                Email
              </FormLabel>
              <Input
                id="email"
                placeholder="Enter Email"
                type="email"
                {...register("email", {
                  required: "This is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
          </div>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <div className="flex flex-col items-center justify-between mt-8">
          <Button
            className="w-1/3"
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Register
          </Button>
          <Link
            as={RouterLink}
            to="/"
            className="text-center mt-4 font-semibold text-base"
          >
            Login
          </Link>
        </div>
      </form>
      <img src={homeBg} className="hidden lg:block w-1/2" alt="" />
    </div>
  );
};

export default RestaurantRegister;
