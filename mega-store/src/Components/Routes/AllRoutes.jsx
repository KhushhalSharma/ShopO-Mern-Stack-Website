import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Fashion from "./Fashion/Fashion";
import Electronics from "./Electronics";
import Login from "./Login";
import Cart from "./Cart/Cart";
import SinglePageFashion from "./SinglePageFashion/SinglePageFashion";
import Signup from "./Signup";
import SingleEdit from "./SinglePageFashion/SingleEdit";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Fashion" element={<Fashion />}></Route>
        <Route
          path="/Fashion/:id"
          element={
            <PrivateRoutes>
              <SinglePageFashion />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/edit/:id"
          element={
            <PrivateRoutes>
              <SingleEdit />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/Electronics" element={<Electronics />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/Cart"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
