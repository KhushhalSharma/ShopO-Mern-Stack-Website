import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../Redux/User/user.action";
import { toast, ToastContainer } from "react-toastify";

export default function UserProfileEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginusername, loginsetUsername] = useState("");
  const [loginemail, loginsetEmail] = useState("");
  const [loginpassword, loginsetPassword] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handlelogin = async () => {
    try {
      let res = await axios.post(
        "https://rich-pear-kangaroo-gear.cyclic.app/user/login",
        {
          username: loginusername,
          email: loginemail,
          password: loginpassword,
        }
      );
      setRefresh(!refresh);
      toast.success("Login Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.warn("User Not Found", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    if (loginusername === "" || loginpassword === "" || loginemail === "") {
      toast.warn("Please Fill All Credential", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch(UserLogin(loginusername, loginemail, loginpassword));
    }
  };

  if (refresh) {
    navigate("/Fashion");
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Login
        </Heading>
        <FormControl id="userName"></FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            value={loginusername}
            placeholder="UserName"
            _placeholder={{ color: "gray.500" }}
            type="text"
            onChange={(e) => loginsetUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            value={loginemail}
            onChange={(e) => loginsetEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            value={loginpassword}
            onChange={(e) => loginsetPassword(e.target.value)}
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            onClick={handlelogin}
          >
            Login
          </Button>
        </Stack>
        <Text color={"grey"}>
          Not A User :{" "}
          <Link to={"/signup"} style={{ color: "blue" }}>
            Sign Up
          </Link>
        </Text>
      </Stack>
      <ToastContainer />
    </Flex>
  );
}
