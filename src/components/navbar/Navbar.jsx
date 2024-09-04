import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "../";
import { colors } from "../../constants/colors";

import "./navbar.css";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      pt={2}
      pl={4}
      pb={2}
      pr={4}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <div className="logo">
        <Link to="/">Ahmed.tube</Link>
      </div>
      <SearchBar />
      <h4>Dark Mode</h4>
    </Stack>
  );
}

export default Navbar;
