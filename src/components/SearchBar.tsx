import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    // onSetSearchTerm(term);
    navigate(`/gifs/search?${new URLSearchParams({ term })}`);
  };

  return (
    <form className="SearchBar" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="searchTerm">Search Term</label>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;

//
// each input needs a state. then make an object for querystringparams. the obeject will have properties.

// ...(genre ? { with_genres: genre! } : {}),
// ...(voteAverageGTE ? {"vote_)avergae.gte": voteAverageGTE!}:{}),

// navigate(`/movies/search?${new URLSearchParams({...queryStringParams})}`)

//their interface will need optional
//you put the stuff into the url so that you can use them for an api call.
//your gallery route will grab the values
