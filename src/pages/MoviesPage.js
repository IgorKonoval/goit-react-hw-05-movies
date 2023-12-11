import toast from 'react-hot-toast';

import MoviesList from '../components/MoviesList/MoviesList';
import Searchbar from '../components/Searchbar/Searchbar';
import { getByQuery } from '../components/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query');
  const [searchInputValue, setSearchInputValue] = useState(currentQuery || '');

  useEffect(() => {
    if (!currentQuery) return;

    const fetchByQuery = async () => {
      setIsLoading(true);
      try {
        const movieQuery = await getByQuery(currentQuery);
        const currentMovie = movieQuery.results;
        setMovies(currentMovie);
      } catch (error) {
        toast(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchByQuery();
  }, [currentQuery]);

  const handleSearchInputChange = event => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();

    setSearchParams({ query: searchInputValue });
  };

  return (
    <>
      <Searchbar
        value={searchInputValue}
        onChange={handleSearchInputChange}
        onSubmit={handleSearchSubmit}
      />
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
