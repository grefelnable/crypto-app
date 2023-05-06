import { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";

const Search = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // search query
  const [query, setQuery] = useState("");

  // Fetching data
  useEffect(() => {
    // only fetch when user enter a query on search bar
    if (query !== "") {
      fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.coins);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [query]);

  return (
    <>
      {/* Search bar */}
      <Container>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <StyledSearchIcon />
        {/* Result contents */}
      </Container>
      {query ? (
        <SearchResults>
          {error ? (
            <p>Error: {error.message}</p>
          ) : !isLoaded ? (
            <div className="loading"></div>
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
  border-radius: var(--borderRadius);
  position: relative;
  box-shadow: var(--shadow-1);
  input {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.backgroundVariant};
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 2.5rem;
    border: transparent;
    border-radius: 0.5em;
    outline: none;
  }
  input::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  fill: ${({ theme }) => theme.text};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  height: 24px;
  width: 24px;
`;

const SearchResults = styled.ul`
  color: var(--grey-900);
  max-height: 250px;
  overflow: scroll;
  width: 200px;
  border-radius: 0.5em;
  background-color: var(--grey-100);
  position: absolute;
  box-shadow: var(--shadow-4);
  position: absolute;
  padding: 1em 2em;
  padding-left: 1em;
  right: 15em;
  top: 2.85em;
  z-index: 10;
`;
