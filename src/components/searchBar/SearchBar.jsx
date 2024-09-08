import { Paper, IconButton, Icon } from "@mui/material";
import { colors } from "../../constants/colors";
import { Search } from "@mui/icons-material";

import "./searchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      navigate(`/search/${value}`);
      setValue("");
    }
  };

  return (
    <Paper
      onSubmit={handleSubmit}
      component={"form"}
      sx={{
        border: `1px solid ${colors.secondary}`,
        boxShadow: "none",
        paddingLeft: 2,
        borderRadius: "10px",
      }}
      className="searchBar-parent"
    >
      <input
        type="text"
        placeholder="Search..."
        className="searchBar"
        style={{ fontSize: "15px" }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
