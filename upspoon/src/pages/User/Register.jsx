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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickPassword = () => setShowPassword(!showPassword);
  const handleClickConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

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
          className="mb-6"
          {...register("email", {
            required: "This is required",
          })}
        />
        <FormLabel htmlFor="name">Password</FormLabel>
        <InputGroup size="md" className="mb-6">
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
        <FormLabel htmlFor="name">Password Again</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            id="password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Enter password"
            {...register("confirm_password", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClickConfirmPassword}>
              {showConfirmPassword ? "Hide" : "Show"}
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
          Register
        </Button>
        <Link
          as={RouterLink}
          to="/user/login"
          className="text-center font-semibold text-base"
        >
          Login
        </Link>
      </div>
    </form>
  );
};

export default UserRegister;
