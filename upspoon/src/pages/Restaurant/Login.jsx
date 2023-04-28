import { useState } from "react";
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
import { Link as RouterLink } from "react-router-dom";
import homeBg from "../../assets/images/home-bg.png";
import Oauth2Login from "../../components/Oauth2Login";

const RestaurantLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickPassword = () => setShowPassword(!showPassword);

  const onSubmit = (values) => {
    // api call here
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

  return (
    <div className="flex h-full">
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 mx-auto py-4 px-8 md:px-16 flex flex-col"
      >
        <h2 className="text-center font-bold mb-8 text-lg">RESTAURANT LOGIN</h2>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Email</FormLabel>
          <Input
            id="email"
            placeholder="Enter Email"
            type="email"
            className="mb-8"
            {...register("email", {
              required: "This is required",
            })}
          />
          <FormLabel htmlFor="name">Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", {
                required: "This is required",
                // minLength:{value: 8, message: "Password must be at least 8 characters"}
              })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClickPassword}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <div className="flex items-center justify-between mt-4">
          <Button
            className="w-1/3"
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Login
          </Button>
          <Link
            as={RouterLink}
            to="/restaurant/register"
            className="text-center font-semibold text-base"
          >
            Register
          </Link>
        </div>
      </form> */}
      <div className="flex flex-col items-center justify-center gap-2 w-full md:w-1/2">
        <Oauth2Login />
        <Link
          as={RouterLink}
          to="/restaurant/register"
          className="text-center font-semibold text-base"
        >
          Register
        </Link>
      </div>

      <img src={homeBg} className="hidden md:block w-1/2" alt="" />
    </div>
  );
};

export default RestaurantLogin;
