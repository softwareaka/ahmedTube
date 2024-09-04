import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../index";
import { ApiService } from "../../service/ApiService";

function Main() {
  const [selectCat, setSelectCat] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectCategory = (cat) => setSelectCat(cat);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectCat}`
        );
        console.log(data);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectCat]);

  return (
    <Stack>
      <Category selectCategory={selectCategory} selectCat={selectCat} />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"}>
            {selectCat} <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
