import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Unspash = () => {
  return (
    <div>
      <SimpleGrid
        columns={[2, 3, 3, 3, 3, 3]}
        spacing={"40px"}
        className="unsplash"
      >
        <Box>
          <img
            src="https://source.unsplash.com/random/906x906?fashion"
            alt="fashions"
          ></img>
        </Box>
        <Box>
          <img
            src="https://source.unsplash.com/random/906x906?shoes"
            alt="shoes"
          ></img>
        </Box>
        <Box>
          <img
            src="https://source.unsplash.com/random/906x906?pants"
            alt=""
          ></img>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Unspash;
