import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import RatingComp from "./RatingCOmp";

const FashionData = ({ data, filter, refresh, setRefresh }) => {
  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);
  const [loading, setloading] = useState(false);

  const handleDlete = async () => {
    const data = deleteData;
    try {
      setloading(true);
      let res = await axios.post(
        "https://rich-pear-kangaroo-gear.cyclic.app/products/delete",
        data
      );
      setRefresh(!refresh);
      toast.warn("Product Delete", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
      toast.warn("Something Went Wrong", {
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
  };

  if (loading) {
    return (
      <Image
        display={"block"}
        margin="auto"
        width={"30%"}
        className="loading"
        src={
          "https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
        }
      ></Image>
    );
  }

  return (
    <>
      <Box mb={"4%"} textAlign={"center"}>
        {deleteData.length > 0 ? (
          <button onClick={handleDlete}>Delete products</button>
        ) : (
          ""
        )}
      </Box>
      <Box className="prod-items">
        {data
          .filter((item) => {
            return item.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map((prod, i) => {
            return (
              <div key={i}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      setDeleteData([...deleteData, prod._id]);
                    } else {
                      setDeleteData(
                        deleteData.filter((e) => {
                          return e !== prod._id;
                        })
                      );
                    }
                  }}
                />

                <img src={prod.image} alt="prod.img" />
                <Heading textAlign={"center"} size={"sm"}>
                  {prod.name}
                </Heading>

                <RatingComp
                  value={prod.rating}
                  text={`${prod.review} reviews`}
                />

                <Heading color={"grey"} textAlign={"center"} size={"sm"}>
                  {`₹ ${prod.price}`}
                </Heading>

                <Link to={`/Fashion/${prod._id}`}>
                  <Button bg={"#525ded"} color={"white"}>
                    More Details
                  </Button>
                </Link>

                <main>
                  <Button
                    onClick={() => navigate(`/edit/${prod._id}`)}
                    bg={"white"}
                  >
                    Edit
                  </Button>
                </main>
              </div>
            );
          })}
      </Box>
      <ToastContainer />
    </>
  );
};

export default FashionData;
