import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = ({ refresh, setRefresh }) => {
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

  const handleClick = () => {
    if (
      name === "" ||
      url === "" ||
      quantity === "" ||
      url2 === "" ||
      url3 === "" ||
      url4 === "" ||
      price === "" ||
      brand === "" ||
      description === "" ||
      Categories === ""
    ) {
      toast.warn("Please Fill All Credential", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      axios
        .post("https://rich-pear-kangaroo-gear.cyclic.app/products", {
          name: name,
          image: url,
          image2: url2,
          image3: url3,
          image4: url4,
          description: description,
          brand: brand,
          category: Categories,
          price: price,
          rating: rating,
          review: review,
          quantity: quantity,
        })
        .then((res) => {
          setRefresh(!refresh);
        })
        .catch((err) => {});
      toast.success("Product Added Please Refresh ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <Heading className="Text" mb={"20px"} textAlign="center">
        Add Product
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
            Add Product
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AddProduct;
