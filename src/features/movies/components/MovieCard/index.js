import React from 'react';
import { TMDB_CONFIG } from '../../../../config/api';
import { GENRES_MAP } from '../../../../config/constants';
import { ReactComponent as StarIcon } from "../../../../images/star.svg";
import {
  MovieCardContainer,
  MoviePoster,
  MovieInfo,
  MovieTitle,
  MovieYear,
  TagsWrapper,
  Tag,
  RatingWrapper,
  Star,
  Rate,
  Votes
} from './styled';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path 
    ? `${TMDB_CONFIG.IMAGE_BASE_URL}/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  const genres = movie.genre_ids?.map(id => GENRES_MAP[id]).filter(Boolean);
  const voteCount = movie?.vote_count ?? 0;
  const formattedVoteCount = new Intl.NumberFormat("pl-PL", {
    notation: "compact",
    compactDisplay: "short",
  }).format(voteCount);

  return (
    <MovieCardContainer>
      <MoviePoster src={posterUrl} alt={movie.title} />
      <MovieInfo>
        <div>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieYear>
              {movie.release_date ? movie.release_date.split("-")[0] : "Year unknown"}
          </MovieYear>
          {genres && genres.length > 0 && (
            <TagsWrapper>
              {genres.map(genre => (
                <Tag key={genre}>{genre}</Tag>
              ))}
            </TagsWrapper>
          )}
        </div>
        <RatingWrapper>
          <Star>
            <StarIcon />
          </Star>
          <Rate>
              {movie.vote_average ? movie.vote_average.toFixed(1).replace(".", ",") : "0"}
          </Rate>
          <Votes>{formattedVoteCount} głosów</Votes>
        </RatingWrapper>
      </MovieInfo>
    </MovieCardContainer>
  );
}

export default MovieCard;