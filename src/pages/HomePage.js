import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { getPopularMoviengAll } from '../components/Api';
import MoviesList from '../components/MoviesList/MoviesList';
import toast from 'react-hot-toast';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const popularMoviengData = await getPopularMoviengAll('');
        const popularMovieng = popularMoviengData.results;

        setMovies(popularMovieng);
      } catch (error) {
        toast(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Popular Movies</h1>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </>
  );
}
