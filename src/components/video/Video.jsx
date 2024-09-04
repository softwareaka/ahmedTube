import { useParams } from "react-router-dom";
import "./video.css";
import { useEffect, useState } from "react";
import { ApiService } from "../../service/ApiService";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";

function Video() {
  const [videoDetail, setVideoDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const {
    snippet: { channelId, title, channelTitle, description, tags, thumbnails },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetail;
  return (
    <Box minHeight={"90vg"} mb={10}>
      <Box display={"flex"}>
        <Box width={"75%"}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
        </Box>
        <Box width={"25%"}>Suggested video</Box>
      </Box>
    </Box>
  );
}

export default Video;
