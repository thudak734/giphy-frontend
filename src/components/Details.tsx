import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gif from "../models/Gif";
import { getGifById } from "../services/GiphyService";
import Card from "./Card";
import "./Details.css";

const Details = () => {
  const [gif, setGif] = useState<Gif>();

  const id: string | undefined = useParams().id; //if app.tsx said :zebra, this would say .zebra

  //the exclamation after id is the non null operator
  useEffect(() => {
    getGifById(id!).then((response) => {
      //set the state in this file to be the GIF
      setGif(response.data);
      console.log(response.data);
    });
  }, [id]);

  return (
    <div className="Details">
      {gif ? <Card singleGif={gif!} /> : <p>loading</p>}
    </div>
  );
};

export default Details;
