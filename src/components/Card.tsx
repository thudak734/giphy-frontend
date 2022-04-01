import { useContext } from "react";
import { Link } from "react-router-dom";
import { isArrayBufferView } from "util/types";
import AuthContext from "../context/AuthContext";
import FavoritesContext from "../context/FavoritesContext";
import Gif from "../models/Gif";
import "./Card.css";

interface Props {
  singleGif: Gif;
}

const Card = ({ singleGif }: Props) => {
  const { user } = useContext(AuthContext);

  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);

  return (
    <li className="Card">
      <p>{singleGif.title}</p>
      <Link to={`/gifs/${encodeURIComponent(singleGif.id)}/details`}>
        <img src={singleGif.images.original.url} alt={singleGif.title} />
      </Link>

      {user &&
        (isFav(singleGif.id) ? (
          <i
            className="fa-solid fa-heart"
            onClick={() => removeFavorite(singleGif.id)}
          ></i>
        ) : (
          <i
            className="fa-regular fa-heart"
            onClick={() => addFavorite({ ...singleGif, uid: user.uid })} //were making an object formed from the original PLUS the users UID property
          ></i>
        ))}
    </li>
  );
};

export default Card;
