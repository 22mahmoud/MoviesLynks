import React, { useState } from "react";
import { Box } from "rebass";
import { withRouter } from "react-router-dom";
import { SearchAlt } from "styled-icons/boxicons-regular/SearchAlt";
import { Input } from "../../ui/Form";

function SearchForm({ history }) {
  const [searchValue, setSerachValue] = useState("");

  const handleOnSubmit = e => {
    e.preventDefault();
    if (searchValue) {
      setSerachValue("");
      history.push(`/search/${searchValue}`);
    }
  };

  return (
    <Box>
      <form onSubmit={handleOnSubmit}>
        <Input
          fontSize={[3]}
          p={2}
          bg="transparent"
          icon={<SearchAlt size={24} color={"#678ade"} />}
          borderBottom={1}
          placeholderColor="lightBlue"
          borderColor="lightBlue"
          placeholder="Serach.."
          value={searchValue}
          onChange={e => setSerachValue(e.target.value)}
        />
      </form>
    </Box>
  );
}

export default withRouter(SearchForm);
