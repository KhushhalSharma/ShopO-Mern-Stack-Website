import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ Cpage, CsetPage }) => {
  return (
    <div>
      <Box className="pagination-Button">
        <Button
          disabled={Cpage >= 0 && Cpage === 1}
          onClick={() => CsetPage(Cpage - 1)}
        >
          Prev
        </Button>
        <Button>{Cpage}</Button>
        <Button onClick={() => CsetPage(Cpage + 1)}>Next</Button>
      </Box>
    </div>
  );
};

export default Pagination;
