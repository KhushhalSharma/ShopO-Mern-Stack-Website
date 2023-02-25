import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Box, Button, Image } from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";

import axios from "axios";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const getUserCart = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    try {
      let res = await axios.post(
        "https://rich-pear-kangaroo-gear.cyclic.app/user/get-cart",
        {
          userId: userId,
        }
      );
      setData(res.data.cart.length);
      console.log(res.data.cart.length);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getUserCart();
  }, []);

  const handleLogin = () => {
    navigate("/signup");
  };

  const handlelogout = () => {
    navigate("/login");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    toast.success("Logout Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    window.location.reload(true);
  };

  return (
    <>
      <div className="Navbar">
        <Link to={"/"}>
          <Image
            className="logo"
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
          ></Image>
        </Link>

        <div className="Links-2">
          {localStorage.getItem("token") ? (
            <Button
              style={{
                border: "none",
                background: "transparent",
                color: "#525ded",
              }}
              onClick={handlelogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              style={{
                border: "none",
                background: "transparent",
                color: "#525ded",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
          <Box>
            <Link to={"/Cart"}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Cart
                <AiOutlineShoppingCart
                  style={{
                    fontSize: "20px",
                    marginTop: "2px",
                    color: "#525ded",
                  }}
                />
              </div>
            </Link>
          </Box>
        </div>
      </div>

      <div className="Links">
        <Link to={"/"}>Home</Link>
        <Link to={"/Fashion"}>Fashion</Link>
        <Link to={"/Electronics"}>Electronics</Link>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
