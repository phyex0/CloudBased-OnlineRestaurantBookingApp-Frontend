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

const UserRegister = () => {
  const {
    handleSubmit,
    register,
    watch,
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto py-4 px-8 md:px-0 flex flex-col"
    >
      <h2 className="text-center font-bold mb-8 text-lg">LOGIN</h2>
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
          Submit
        </Button>
        <Link
          as={RouterLink}
          to="/user/register"
          className="text-center font-semibold text-base"
        >
          Register
        </Link>
      </div>
    </form>
  );
};

export default UserRegister;
