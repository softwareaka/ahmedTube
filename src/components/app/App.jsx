import { Box } from "@mui/material";
import { Main, Channel, Video, Search, Navbar } from "../index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;
