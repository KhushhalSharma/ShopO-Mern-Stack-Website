import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleEdit = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [url, seturl] = useState("");
  const [url2, seturl2] = useState("");
  const [url3, seturl3] = useState("");
  const [url4, seturl4] = useState("");
  const [price, setprice] = useState("");
  const [brand, setbrand] = useState("");
  const [review, setreview] = useState("");
  const [rating, setrating] = useState("");
  const [description, setDescription] = useState("");
  const [Categories, setCategories] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChangeUrl = (e) => {
    seturl(e.target.value);
  };

  const handleChangePrice = (e) => {
    setprice(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeCat = (e) => {
    setCategories(e.target.value);
  };

  const params = useParams();
  const _id = params.id;
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `https://rich-pear-kangaroo-gear.cyclic.app/products/${_id}`
      );
      console.log(res.data);
      setName(res.data.name);
      seturl(res.data.image);
      seturl2(res.data.image2);
      seturl3(res.data.image3);
      seturl4(res.data.image4);
      setprice(res.data.price);
      setbrand(res.data.brand);
      setreview(res.data.review);
      setrating(res.data.rating);
      setDescription(res.data.description);
      setCategories(res.data.category);
      setQuantity(res.data.quantity);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleClick = async () => {
    const data = {
      id: _id,
      name,
      url,
      url2,
      url3,
      url4,
      price,
      brand,
      review,
      rating,
      description,
      Categories,
      quantity,
    };

    try {
      await axios.post(
        "https://rich-pear-kangaroo-gear.cyclic.app/products/edit",
        data
      );
      toast.success("Product Edited", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      navigate("/Fashion");
    } catch (error) {
      console.log("error:", error);
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

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {params.id}
      <div>
        <Heading className="Text" mb={"20px"} textAlign="center">
          Edit Product
        </Heading>
        <Box className="Add-Products">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Input
              onChange={handleChange}
              value={name}
              placeholder="Name Of Product"
            />
            <Input
              onChange={handleChangeUrl}
              value={url}
              placeholder="URL Of Product Image"
            />
            <Input
              onChange={(e) => seturl2(e.target.value)}
              value={url2}
              placeholder="URL Of Product Image 2"
            />
            <Input
              onChange={(e) => seturl3(e.target.value)}
              value={url3}
              placeholder="URL Of Product Image 3"
            />
            <Input
              onChange={(e) => seturl4(e.target.value)}
              value={url4}
              placeholder="URL Of Product Image 4"
            />
            <Input
              onChange={handleChangePrice}
              value={price}
              placeholder="Price Of Product"
            />
            <Input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              placeholder="Quantity Of Product"
            />
            <Input
              onChange={(e) => setbrand(e.target.value)}
              value={brand}
              placeholder="Brand Of Product"
            />
            <Input
              onChange={(e) => setreview(e.target.value)}
              value={review}
              placeholder="Review Of Product"
            />
            <Input
              onChange={(e) => setrating(e.target.value)}
              value={rating}
              placeholder="Rating Of Product"
            />
            <Textarea
              onChange={handleChangeDescription}
              value={description}
              placeholder="Description Of Products"
            />
            <Select
              placeholder="Category"
              value={Categories}
              onChange={handleChangeCat}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </Select>
            <Button bg={"#525ded"} color={"white"} onClick={handleClick}>
              Edit Product
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default SingleEdit;
