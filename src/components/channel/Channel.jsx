import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/ApiService";
import { Box, Container } from "@mui/material";
import { ChannelCart, Videos } from "../";

function Channel() {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail.items[0]);
        console.log(dataChannelDetail);
        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideo(dataVideo.items);
        console.log(dataVideo);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"300px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCart video={channelDetail} marginTop={"-140px"} />
      </Box>
      <Container maxWidth="90%">
        <Videos videos={video} />
      </Container>
    </Box>
  );
}

export default Channel;
