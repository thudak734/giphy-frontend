//these are functions that can be used anywhere in app

import axios from "axios";
import GiphyResponse from "../models/GiphyResponse";
import SingleGif from "../models/SingleGif";

const key: string = process.env.REACT_APP_GIPHY_KEY || "";
//the "or empty" makes sure that if something goes wrong the app doesn't crash

//this func doesn't need any arguments
//func returns a promise of type giphyresponse
//promise represents object that succeeds or fails and is asyncronus
//query string params are added with the help of axios
//we handle the async response with .then. this is how to handle a promise. how to handle something async
export const getTrendingGifs = (): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: { api_key: key },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
      //dont get it twisted. this res.data does not refer to the "data" in our giphyresponse. data is from axios
    });
};

export const getGifsByTerm = (searchString: string): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: { api_key: key, q: searchString },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifById = (id: string): Promise<SingleGif> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(id)}`, {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      return response.data;
    });
};
