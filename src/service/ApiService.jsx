import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "7cb5a9e5demshe326f30b9f2538ap177f9ejsn75ca944ea6e2",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    console.log("START");
    try {
      const request = await axios.get(`${BASE_URL}/${url}`, options);
      console.log("ENDING");
      return request.data;
    } catch (error) {
      console.log("Error", error);
    }
  },
};
