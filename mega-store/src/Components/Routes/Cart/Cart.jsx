import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingComp from "../Fashion/FashionData/RatingCOmp";
import Footer from "../Home/Footer";
import "./cart.css";

const Cart = () => {
  const [data, setData] = useState([]);
  const [plus, setplus] = useState(0);
  const [loading, setloading] = useState(false);

  const getUserCart = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    try {
      setloading(true);
      let res = await axios.post(
        "https://rich-pear-kangaroo-gear.cyclic.app/user/get-cart",
        {
          userId: userId,
        }
      );
      setloading(false);
      setData(res.data.cart);
    } catch (error) {
      console.log("error:", error);
      setloading(false);
    }
  };

  useEffect(() => {
    getUserCart();
  }, []);

  if (loading) {
    return (
      <Image
        display={"block"}
        margin={"auto"}
        width={"200px"}
        className="loading"
        src={
          "https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
        }
      ></Image>
    );
  }

  const handleDec = (i) => {
    setData((data) =>
      data.map((items) =>
        i === items._id
          ? {
              ...items,

              quantity:
                items.quantity - 1 || items.quantity === 0
                  ? items.quantity - 1
                  : 1,
            }
          : items
      )
    );
    setplus(plus - 1);
  };

  const handleInc = (i) => {
    setplus(plus + 1);
    setData((data) =>
      data.map((items) =>
        i === items._id
          ? {
              ...items,
              quantity: items.quantity + 1,
            }
          : items
      )
    );
  };

  return (
    <>
      <Box className="Top">
        <Box className="Top-Down">
          <Box>
            <Link to={"/"} style={{ textAlign: "left" }}>
              {"Home / Cart"}
            </Link>
          </Box>
          <Heading m={"20px auto"} height={"200px"} textAlign={"center"}>
            Your Cart
          </Heading>
        </Box>
      </Box>
      <div className="cart-items">
        <Box>
          <Heading>Products</Heading>
        </Box>
        <Box>
          <Heading>Name</Heading>
        </Box>
        <Box>
          <Heading>Reviews</Heading>
        </Box>
        <Box>
          <Heading>Quantity</Heading>
        </Box>
        <Box>
          <Heading>Price</Heading>
        </Box>
      </div>
      <Box>
        {data.map((prod, i) => {
          return (
            <Box className="items-cart">
              <img src={prod.image} alt="" />
              <Heading>{prod.name}</Heading>
              <RatingComp
                value={prod.rating}
                text={`(${prod.review} customer reviews)`}
              />

              <Box className="btns">
                <Button
                  bg={"#525ded"}
                  color={"white"}
                  onClick={() => handleDec(prod._id)}
                >
                  -
                </Button>
                <Button color={"black"} bg={"white"}>
                  {prod.quantity}
                </Button>
                <Button
                  bg={"#525ded"}
                  color={"white"}
                  onClick={() => handleInc(prod._id)}
                >
                  +
                </Button>
              </Box>
              <Text>Price : ₹ {prod.price * prod.quantity}</Text>
            </Box>
          );
        })}
      </Box>
      <hr />
      <Button
        className="btn"
        display={"block"}
        m={"2% auto"}
        color={"white"}
        bg={"#525ded"}
      >
        Continue Shopping
      </Button>
      <Box className="subtotal">
        <Box>
          <Text>Subtotal</Text>
          <Box>
            ₹{" "}
            {data
              .map((items) => {
                return items.price * items.quantity;
              })
              .reduce((total, value) => {
                return total + value;
              }, 0)}
          </Box>
        </Box>
        <hr />
        <Box>
          <Box>
            <p>
              <Text>Free Shipping</Text>
              <Text>Free Shipping</Text>
              <Text>Free Shipping</Text>
            </p>
          </Box>
          <Box>
            <p>
              <Text> +₹ 00.00 </Text>
              <Text> +₹ 00.00 </Text>
              <Text> +₹ 00.00 </Text>
            </p>
          </Box>
        </Box>
        <hr />
        <Box>
          <Text color={"grey"}> No Taxes and Delivery Prices</Text>
        </Box>
        <Box>
          <Text>Subtotal</Text>
          <Box>
            ₹{" "}
            {data
              .map((items) => {
                return items.price * items.quantity;
              })
              .reduce((total, value) => {
                return total + value;
              }, 0)}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
