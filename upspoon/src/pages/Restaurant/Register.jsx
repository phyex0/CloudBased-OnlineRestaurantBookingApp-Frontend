import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { Select, CreatableSelect, AsyncSelect } from "chakra-react-select";
import { Link as RouterLink } from "react-router-dom";
import {
  groupedProvinces,
  groupedStreets,
  groupedTownships,
} from "../../helpers/data";

const RestaurantRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [province, setProvince] = useState("");
  const [township, setTownship] = useState("");
  const [street, setStreet] = useState("");

  useEffect(() => {
    console.log(province);
  }, [province]);

  const handleClickPassword = () => setShowPassword(!showPassword);

  const onSubmit = (values) => {
    // api call here
    return new Promise((resolve) => {
      setTimeout(() => {
        // add values object states
        values.province = province;
        values.township = township;
        values.street = street;
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:max-w-2xl mx-auto py-4 px-8 md:px-0 flex flex-col"
    >
      <h2 className="text-center font-bold mb-8 text-lg">
        RESTAURANT REGISTER
      </h2>
      <FormControl isInvalid={errors.name}>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full">
            <FormLabel htmlFor="name">Restaurant Name</FormLabel>
            <Input
              id="name"
              placeholder="Enter Restaurant Name"
              type="text"
              {...register("name", {
                required: "This is required",
              })}
            />

            <FormLabel className="mt-4">Restaurant Province</FormLabel>
            <Select
              name="provinces"
              options={groupedProvinces}
              value={province}
              onChange={(value) => setProvince(value)}
              placeholder="Select Province"
              closeMenuOnSelect={false}
            />

            <FormLabel className="mt-4">Restaurant Township</FormLabel>
            <Select
              name="townships"
              options={groupedTownships}
              value={township}
              onChange={(value) => setTownship(value)}
              placeholder="Select Township"
              closeMenuOnSelect={false}
            />

            <FormLabel className="mt-4">Restaurant Street</FormLabel>
            <Select
              name="streets"
              options={groupedStreets}
              value={street}
              onChange={(value) => setStreet(value)}
              placeholder="Select Township"
              closeMenuOnSelect={false}
            />
          </div>

          <div className="w-full">
            <FormLabel htmlFor="name">Official Name</FormLabel>
            <Input
              id="name"
              placeholder="Enter Restaurant Owner Name"
              type="text"
              {...register("company-owner-name", {
                required: "This is required",
              })}
            />
            <FormLabel htmlFor="tc" className="mt-4">
              TC.NO
            </FormLabel>
            <Input
              id="tc"
              placeholder="Enter Restaurant Name"
              type="number"
              {...register("tc", {
                required: "This is required",
                minLength: {
                  value: 11,
                  message: "TC.NO must be 11 digits",
                },
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
          to="/restaurant/login"
          className="text-center mt-4 font-semibold text-base"
        >
          Login
        </Link>
      </div>
    </form>
  );
};

export default RestaurantRegister;
