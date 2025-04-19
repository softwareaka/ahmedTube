import { Link, useParams } from "react-router-dom";
import "./video.css";
import { useEffect, useState } from "react";
import { ApiService } from "../../service/ApiService";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Loader, Videos } from "../";

function Video() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedData, setRelatedData] = useState([]);
  console.log(relatedData);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);

        const relatedDataFetch = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video  `
        );
        setRelatedData(relatedDataFetch);
        console.log(relatedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  if (!videoDetail) return <Loader />;

  const {
    snippet: {
      channelId,
      title,
      channelTitle,
      description,
      tags,
      thumbnails,
    } = {},
    statistics: { viewCount, likeCount, commentCount } = {},
  } = videoDetail;

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          {videoDetail?.snippet?.tags &&
            videoDetail?.snippet?.tags.map((item, index) => (
              <Chip
                label={item}
                key={index}
                sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
                deleteIcon={<Tag />}
                onDelete={() => {}}
                variant="outlined"
                className="videoTags"
              />
            ))}
          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {videoDetail.snippet.title}
          </Typography>
          <Typography variant="subtitle2" p={2} sx={{ opacity: "0.7" }}>
            {videoDetail.snippet.description}
          </Typography>
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            py={1}
            px={2}
          >
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <Visibility />
              {parseInt(videoDetail.statistics.viewCount).toLocaleString()}{" "}
              Likes
            </Stack>
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <FavoriteOutlined />
              {parseInt(videoDetail.statistics.likeCount).toLocaleString()}{" "}
              Likes
            </Stack>
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <MarkChatRead />
              {parseInt(
                videoDetail.statistics.commentCount
              ).toLocaleString()}{" "}
              Comment
            </Stack>
          </Stack>
          <Stack direction={"row"} py={1} px={2}>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"5px"}
                marginTop={"5px"}
              >
                <Avatar
                  alt={videoDetail.snippet.channelTitle}
                  src={videoDetail.snippet.thumbnails.default.url}
                />
                <Typography variant="subtitle2" color={"grey"}>
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box
          className="relatedVideo"
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"auto"}
          maxHeight={"100vh"}
        >
          <Videos videos={relatedData} />
        </Box>
      </Box>
    </Box>
  );
}

export default Video;
