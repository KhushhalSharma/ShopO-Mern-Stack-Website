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
import { Link, useNavigate, useParams } from "react-router-dom";
import "./singleFashion.css";
import RatingComp from "../Fashion/FashionData/RatingCOmp";
import { TbReplace } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";
import { BiAperture } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getcart } from "../../Redux/Cart/cart.action";
import { ToastContainer } from "react-toastify";
import Footer from "../Home/Footer";

const SinglePageFashion = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const _id = params.id;
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://rich-pear-kangaroo-gear.cyclic.app/products/${_id}`
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useDispatch();

  const handleCart = (productId) => {
    dispatch(getcart(productId));
  };

  if (loading) {
    return (
      <Image
        width={"200px"}
        display={"block"}
        m={"auto"}
        className="loading"
        src={
          "https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
        }
      ></Image>
    );
  }

  return (
    <div>
      <Box
        color={"blue"}
        fontSize={"25px"}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Link to={"/"}>Home</Link>
        <Text color={"black"}> {` / ${data.name}`}</Text>
      </Box>
      <SimpleGrid
        columns={[1, 1, 1, 2, 2, 2]}
        spacing="40px"
        className="singleFashion"
      >
        <Box className="Image-Section">
          <Box className="Image-Section2 ">
            <Image src={data.image2} alt={"data"} width={"100%"}></Image>
            <Image src={data.image3} alt={"data"} width={"100%"}></Image>
            <Image src={data.image4} alt={"data"} width={"100%"}></Image>
          </Box>
          <Box>
            <Image
              src={data.image}
              alt="data"
              width={"75%"}
              display={"block"}
              margin={"auto"}
            ></Image>
          </Box>
        </Box>
        <Box className="right-section">
          <Heading style={{ fontSize: "25px" }}>{data.name}</Heading>

          <RatingComp
            value={data.rating}
            text={`(${data.review} customer reviews)`}
          />

          <Heading
            style={{
              fontSize: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text>MRP : </Text>
              <div style={{ textDecoration: "line-through" }}>
                {`₹${data.price + 2000}`}
              </div>
            </div>
          </Heading>
          <Box style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Heading
              color={"#525ded"}
              style={{ fontSize: "20px" }}
            >{`Deal of the Day ₹ ${data.price}`}</Heading>
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GrDeliver fontSize={"30px"} color={"blue"} />
              <Text color={"grey"}>Free Delivery</Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TbReplace fontSize={"30px"} />
              <Text color={"grey"}>7 Days Replacement</Text>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <BiAperture color="balck" fontSize={"30px"} />
              <Text color={"grey"}>1 Year Color Fade Warranty</Text>
            </div>
          </Box>
          <div className="line"></div>
          <Text color={"grey"}>ID: MEGASTORE</Text>
          <Text color={"grey"}>
            Availability : {data.quantity > 0 ? "In Stock" : "Not In Stock"}
          </Text>
          <Text color={"grey"}>{`BRAND : ${data.brand}`}</Text>
          <div className="line"></div>
          <Text color={"grey"}>Description : {data.description}</Text>
          <div className="line"></div>
          <Box>
            <Button
              className="cart-btn"
              bg={"#000"}
              color={"white"}
              onClick={() => handleCart(data._id)}
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default SinglePageFashion;
