import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from '../Api';
import { CastItem, CastList } from './Cast.styled';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [actors, setActors] = useState([]);

  console.log(movieId);
  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      setIsLoading(true);

      try {
        const castData = await getCast(movieId);
        const castingActors = castData.cast;
        setActors(castingActors);
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      <CastList>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <CastItem key={id}>
            <img
              style={{
                alignSelf: 'flexStart',
              }}
              width={200}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://via.placeholder.com/200x300/258DC8/E0F6FD?text=Image+is+not+availible`
              }
              alt={original_name}
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </CastItem>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;
