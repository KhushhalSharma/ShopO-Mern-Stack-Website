import { Box, Select } from "@chakra-ui/react";
import React from "react";
import { toast } from "react-toastify";

const Sort = ({ sort, setSort }) => {
  const handlesort = (e) => {
    if (e.target.value === "asc") {
      toast.success("Products By Asending Order", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (e.target.value === "desc") {
      toast.success("Products By Desending Order", {
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
    setSort(e.target.value);
  };
  return (
    <div>
      <Box>
        <select
          className="sort"
          placeholder="Sort"
          value={sort}
          onChange={handlesort}
        >
          <option className="sort" value="asc">
            Sort By
          </option>
          <option className="sort" value="asc">
            ASC
          </option>
          <option className="sort" value="desc">
            DESC
          </option>
        </select>
      </Box>
    </div>
  );
};

export default Sort;
