import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Timer from "../../Timer";
import Footer from "./Footer";
import "./home.css";

const Home = () => {
  return (
    <>
      <SimpleGrid
        className="banner"
        spacing={"40px"}
        columns={[1, 1, 2, 2, 2, 2]}
      >
        <Box className="right-div">
          <Link to={"/Electronics"}>
            <Image src="./Fashions/banner-1.png"></Image>
          </Link>
        </Box>
        <Box className="left-div">
          <Box>
            <Link to={"/Fashion"}>
              <Image src="./Fashions/banner-2.png"></Image>
            </Link>
          </Box>
          <Box>
            <Image src="./Fashions/banner-3.png"></Image>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2, 2, 4, 4]} className="specification-Box">
        <Box className="specification">
          <Box>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H5.63636V24.1818H35"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              ></path>
              <path
                d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              ></path>
              <path
                d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              ></path>
              <path
                d="M34.9982 1H11.8164V18H34.9982V1Z"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              ></path>
              <path
                d="M11.8164 7.18164H34.9982"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              ></path>
            </svg>
          </Box>
          <Box>
            <Heading>Free Shipping</Heading>
            <Text>When order over $100</Text>
          </Box>
        </Box>
        <Box className="specification">
          <svg
            width="32"
            height="34"
            viewBox="0 0 32 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M30.7 2L29.5 10.85L20.5 9.65"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="square"
            ></path>
          </svg>
          <div>
            <Heading>Free Return</Heading>
            <Text>Get Return in 30 days</Text>
          </div>
        </Box>
        <Box className="specification">
          <svg
            width="32"
            height="38"
            viewBox="0 0 32 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="square"
            ></path>
            <path
              d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="square"
            ></path>
            <path
              d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="square"
            ></path>
          </svg>
          <div>
            <Heading>Secure Payment</Heading>
            <Text>100% Secure Payment</Text>
          </div>
        </Box>
        <Box className="specification">
          <svg
            width="32"
            height="35"
            viewBox="0 0 32 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M16 28V22"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="square"
            ></path>
            <path
              d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="square"
            ></path>
          </svg>
          <div>
            <Heading>Best Quality</Heading>
            <Text>Original Product Quality</Text>
          </div>
        </Box>
      </SimpleGrid>

      <SimpleGrid className="timer">
        <Timer duration={30 * 24 * 60 * 60 * 1000} className="timer2" />
      </SimpleGrid>

      <SimpleGrid
        className="cate-div"
        spacing={"30px"}
        columns={[2, 2, 2, 3, 3, 3]}
      >
        <Box className="backGround">
          <Heading size={"sm"}>Mobile & Tablet</Heading>
          <Text>Xioami</Text>
          <Text>Apple</Text>
          <Text>Samsung</Text>
          <Link
            to={"/Electronics"}
            style={{ display: "flex", gap: "5px", alignItems: "center" }}
          >
            Shop Now
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.08984"
                y="0.636719"
                width="6.94219"
                height="1.54271"
                transform="rotate(45 2.08984 0.636719)"
                fill="#1D1D1D"
              ></rect>
              <rect
                x="7"
                y="5.54492"
                width="6.94219"
                height="1.54271"
                transform="rotate(135 7 5.54492)"
                fill="#1D1D1D"
              ></rect>
            </svg>
          </Link>
        </Box>
        <Box className="backGround2">
          <Heading size={"sm"}>Electronics</Heading>
          <Text>Washing Machine</Text>
          <Text>A/C</Text>
          <Text>LED/LCD</Text>
          <Link
            to={"/Electronics"}
            style={{ display: "flex", gap: "5px", alignItems: "center" }}
          >
            Shop Now
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.08984"
                y="0.636719"
                width="6.94219"
                height="1.54271"
                transform="rotate(45 2.08984 0.636719)"
                fill="#1D1D1D"
              ></rect>
              <rect
                x="7"
                y="5.54492"
                width="6.94219"
                height="1.54271"
                transform="rotate(135 7 5.54492)"
                fill="#1D1D1D"
              ></rect>
            </svg>
          </Link>
        </Box>
        <Box className="rightSideImage">
          <Image src="./Fashions/ads-2.png"></Image>
          <Image src="./Fashions/1.png"></Image>
        </Box>
      </SimpleGrid>
      <Footer />
    </>
  );
};

export default Home;
