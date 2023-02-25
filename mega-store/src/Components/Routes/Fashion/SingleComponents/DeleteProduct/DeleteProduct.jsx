import { Box, Image } from "@chakra-ui/react";

import React from "react";

const DeleteProduct = () => {
  return (
    <div>
      <Box textAlign={"center"} display={"block"} m={"auto"}>
        <Image
          display={"block"}
          m={"20px auto"}
          borderRadius={"10px"}
          src="https://source.unsplash.com/random/506x506?style"
          alt="fashions"
        ></Image>
      </Box>
    </div>
  );
};

export default DeleteProduct;
