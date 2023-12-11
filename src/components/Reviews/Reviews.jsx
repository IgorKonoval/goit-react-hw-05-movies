import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../Api';
import { ReviewItem, ReviewList } from './Reviews.styled';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const reviewData = await getReviews(movieId);
        const userReviews = reviewData.results;
        setReviews(userReviews);
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ReviewList>
            {reviews.map(review => (
              <ReviewItem key={review.id}>
                <h2>Author:{review.author}</h2>
                <p>{review.content}</p>
              </ReviewItem>
            ))}
          </ReviewList>
        </div>
      )}
      {reviews.length === 0 && (
        <p
          style={{
            fontSize: 22,
            color: 'orangered',
            marginLeft: 100,
            marginTop: 25,
          }}
        >
          There are no reviews for this movie
        </p>
      )}
    </div>
  );
};

export default Reviews;
