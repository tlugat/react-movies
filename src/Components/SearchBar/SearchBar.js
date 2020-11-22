import React, {useState} from 'react';
import ResultCard from '../ResultCard/ResultCard';
import './SearchBar.scss';
function SearchBar(props) {

  const [query, setQuery] = useState("");
  const [results, setResults ] = useState ([]);

  const handleDisplayAcc = () => props.handleDisplayAcc;

  const onChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4124c5b3a60d237f9660517b3f1fc767&language=en-US&page=1&query=${e.target.value}`)
    .then(res => res.json())
    .then((data) => {
      if(!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    });
  };
  handleDisplayAcc(results);
 

  return (
    <div className="search">
        <div className = "search__input-wrapper">
          <input type="text"
          placeholder="Search ..."
          value={query}
          onChange={onChange}
          />
        </div>
        
        {results.length > 0 && (
            <ul className="search__results">
              {results.map((movie) => (
                <ResultCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
      </div>
  );
};

export default SearchBar;