import { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";

const Search = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // search query
  const [query, setQuery] = useState(null);

  // Fetching data
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.coins);
          setIsLoaded(true);
          setItems(result.coins);
        },
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  }, [query]);

  return (
    <>
      {/* Search bar */}
      <Container>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <i>
          <SearchIcon />
        </i>
        {/* Result contents */}
      </Container>
      {query ? (
        <SearchResults>
          {error ? (
            <p>{error.message}</p>
          ) : !isLoaded ? (
            <li>Loading...</li>
          ) : (
            items.map((item) => <li key={item.id}>{item.name}</li>)
          )}
        </SearchResults>
      ) : (
        ""
      )}
    </>
  );
};
export default Search;

const Container = styled.form`
  border: none;
  position: relative;
  input {
    color: var(--grey-500);
    background-color: var(--grey-900);
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 2.5rem;
    border: 1px solid var(--grey-600);
    border-radius: 1rem;
    outline: none;
  }
  input::placeholder {
    color: var(--grey-500);
  }
  /* search icon */
  i {
    stroke: var(--grey-500);
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    left: 15px;
  }
`;

const SearchResults = styled.ul`
  color: var(--grey-900);
  width: 211px;
  border-radius: 0.5em;
  background-color: var(--grey-100);
  position: absolute;
  box-shadow: var(--shadow-4);
  position: absolute;
  padding: 1em 2em;
  padding-left: 1em;
  right: 4em;
  top: 2.25em;
  z-index: 10;

  p {
    color: black;
  }
`;
