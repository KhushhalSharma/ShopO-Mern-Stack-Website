import { Heading, SimpleGrid } from "@chakra-ui/react";
import "./Fashion.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/product/product.action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Unspash from "./SingleComponents/Unspash";
import AddProduct from "./SingleComponents/AddProduct";
import DeleteProduct from "./SingleComponents/DeleteProduct/DeleteProduct";
import Filter from "./SingleComponents/FilterProduct/Filter";
import Sort from "./SingleComponents/SortProduct/Sort";
import Pagination from "./SingleComponents/Pagination/Pagination";
import FashionData from "./FashionData/FashionData";
import Footer from "../Home/Footer";

const Fashion = () => {
  const [Cpage, CsetPage] = useState(1);
  const [sort, setSort] = useState("");
  const [filter, setfilter] = useState("");
  const [refresh, setRefresh] = useState(false);
  const data = useSelector((store) => {
    return store.products.data;
  });

  const diapatch = useDispatch();
  useEffect(() => {
    diapatch(getProducts({ page: Cpage, limit: 8, check: sort }));
  }, [diapatch, Cpage, sort, refresh]);

  return (
    <div>
      <SimpleGrid m={"3% auto"} w={"90%"} className="products" id="Fashion">
        <Heading size className="Text" textAlign={"center"}>
          Products By Trending
        </Heading>
        <SimpleGrid
          className="Trending"
          columns={[2, 2, 2, 2, 2, 2]}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "97%",
            margin: "40px auto",
            gap: "10%",
          }}
        >
          <Sort sort={sort} setSort={setSort} />
          <Filter filter={filter} setfilter={setfilter} />
        </SimpleGrid>
      </SimpleGrid>
      <FashionData
        data={data}
        filter={filter}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <Pagination Cpage={Cpage} CsetPage={CsetPage} />
      <Unspash />
      <SimpleGrid
        columns={[1, 1, 1, 2, 2, 2, 2]}
        className="ADD"
        spacing={"80px"}
      >
        <AddProduct refresh={refresh} setRefresh={setRefresh} />
        <DeleteProduct />
      </SimpleGrid>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Fashion;
