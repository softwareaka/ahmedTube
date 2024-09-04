import { Box, Stack } from "@mui/material";
import { VideoCart, ChannelCart } from "../index";
import { Loader } from "../index";

function Videos({ videos }) {
  if (!videos.length) {
    return <Loader />;
  }
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index} gridColumn="span 3">
          {item.id.videoId && <VideoCart video={item} />}
          {item.id.channelId && <ChannelCart video={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
