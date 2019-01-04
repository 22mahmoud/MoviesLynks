import React, { useState } from "react";
import { Box } from "rebass";
import { withRouter } from "react-router-dom";
import { SearchAlt } from "styled-icons/boxicons-regular/SearchAlt";
import { Input } from "../../ui/Form";

function SearchForm({ history }) {
  const [searchValue, setSearchValue] = useState("");

  const handleOnSubmit = e => {
    e.preventDefault();
    if (searchValue) {
      setSearchValue("");
      history.push(`/search/${searchValue}`);
    }
  };

  return (
    <Box>
      <form onSubmit={handleOnSubmit}>
        <Input
          fontSize={[2]}
          p={2}
          bg="transparent"
          icon={<SearchAlt size={24} color={"#678ade"} />}
          borderBottom={1}
          placeholderColor="lightBlue"
          borderColor="lightBlue"
          placeholder="Search.."
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </form>
    </Box>
  );
}

export default withRouter(SearchForm);
