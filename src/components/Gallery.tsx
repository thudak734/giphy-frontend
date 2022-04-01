import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Gif from "../models/Gif";
import { getGifsByTerm, getTrendingGifs } from "../services/GiphyService";
import Card from "./Card";
import "./Gallery.css";
import SearchBar from "./SearchBar";

const Gallery = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("term");

  // useEffect(()=>{},[])
  useEffect(() => {
    //if there is no search term -- in order to do this we have to create a state for the search
    if (searchTerm) {
      getGifsByTerm(searchTerm).then((response) => {
        setGifs(response.data);
      });
    } else {
      //get gifs by search term
      getTrendingGifs().then((response) => {
        setGifs(response.data);
      });
    }
  }, [searchTerm]); //unless you tell it to - script will only run useEffect once. down here is where you list conditions underwhich to run again.

  return (
    <div className="Gallery">
      <SearchBar />
      <ul>
        {gifs.map((gif) => (
          <Card key={gif.id} singleGif={gif} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
