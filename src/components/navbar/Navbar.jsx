import { Box, Stack, Switch, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "../";
import { useState, useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun icon

import "./navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode setting
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

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
        background: darkMode ? "#333" : "white",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <div className="logo">
        <Link to="/" style={{ color: darkMode ? "#fff" : "#000" }}>
          Ahmed.tube
        </Link>
      </div>
      <SearchBar />
      <Box display="flex" alignItems="center">
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Stack>
  );
}

export default Navbar;
