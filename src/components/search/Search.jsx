import { useParams } from "react-router-dom";
import "./search.css";
import { useEffect, useState } from "react";
import { Videos } from "../index";
import { Box, Container, Typography, colors } from "@mui/material";
import { ApiService } from "../../service/ApiService";

function Search() {
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
          Search results for{" "}
          <span style={{ color: colors.secondary }}>{id}</span>
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
}

export default Search;
