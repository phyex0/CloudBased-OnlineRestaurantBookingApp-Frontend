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
import { Link as RouterLink } from "react-router-dom";
import homeBg from "../../assets/images/home-bg.png";
import { createUser } from "../../api/user";
import { errorMessage, successMessage } from "../../helpers/toast";
import MiniLoading from "../../components/Loading/MiniLaoding";

const UserRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [loadingCreateUser, setLoadingCreateUser] = useState(false);

  const onSubmit = async (values) => {
    console.log("values: ", values);
    setLoadingCreateUser(true);
    try {
      let response = await createUser({
        firstName: values?.first_name,
        lastName: values?.last_name,
        middleName: values?.middle_name,
        phoneNumber: values?.phone,
        address: values?.full_address,
        mailAddress: values?.email,
        password: values?.password,
        orderHistory: [],
      });
      console.log("user create response: ", response);
      if (response.error == null) {
        successMessage("User created successfully");
      }
    } catch (err) {
      errorMessage("Error creating user");
    } finally {
      setLoadingCreateUser(false);
    }
  };

  return (
    <div className="flex h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-1/2 mx-auto py-4 px-8 md:px-16 flex flex-col"
      >
        <h2 className="text-center font-bold mb-6 text-lg">Register</h2>
        {loadingCreateUser && <MiniLoading className="mb-8" />}
        <FormControl isInvalid={errors.name}>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full">
              <FormLabel htmlFor="name">First Name</FormLabel>
              <Input
                id="first_name"
                placeholder="Enter First Name"
                type="text"
                {...register("first_name", {
                  required: "This is required",
                })}
              />

              <FormLabel htmlFor="name" className="mt-4">
                Middle Name
              </FormLabel>
              <Input
                id="middle_name"
                placeholder="Enter Middle Name"
                type="text"
                {...register("middle_name")}
              />

              <FormLabel className="mt-4">Last Name</FormLabel>
              <Input
                id="last_name"
                placeholder="Enter Last Name"
                type="text"
                {...register("last_name", {
                  required: "This is required",
                })}
              />
            </div>

            <div className="w-full">
              <FormLabel className="">Full Address</FormLabel>
              <Input
                id="full_address"
                placeholder="Enter Full Address"
                type="text"
                {...register("full_address", {
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

              <FormLabel htmlFor="name" className="mt-4">
                Password
              </FormLabel>
              <Input
                id="password"
                placeholder="Enter Password"
                type="text"
                {...register("password", {
                  required: "This is required",
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

export default UserRegister;
