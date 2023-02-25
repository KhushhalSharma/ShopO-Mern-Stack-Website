import { Box, Input } from "@chakra-ui/react";
import React from "react";

const Filter = ({ filter, setfilter }) => {
  return (
    <div>
      <Box>
        <Input
          border={"1px solid #525ded"}
          m={"6% auto"}
          placeholder="Search Products"
          value={filter}
          onChange={(e) => setfilter(e.target.value)}
        ></Input>
      </Box>
    </div>
  );
};

export default Filter;
