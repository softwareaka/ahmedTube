import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "45003258f2msh59b3d6e7f4e0a5dp1166a8jsnae0a2aec4b04",
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
