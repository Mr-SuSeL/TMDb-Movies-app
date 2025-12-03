// src/features/movies/components/MovieCard/index.js
import React from 'react';
import { TMDB_CONFIG } from '../../../../config/api';  // 4 ../ zamiast 3
import {
  MovieCardContainer,
  MoviePoster,
  MovieOverlay,
  MovieInfo,
  MovieTitle,
  MovieYear,
} from './styled';  // ZMIANA: styled.js → styled

function MovieCard({ movie }) {
  const posterUrl = `${TMDB_CONFIG.IMAGE_BASE_URL}/w500${movie.poster_path}`;

  return (
    <MovieCardContainer>
      <MoviePoster>
        <img src={posterUrl} alt={movie.title} />
        <MovieOverlay />
      </MoviePoster>
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieYear>{movie.release_date?.split("-")[0]}</MovieYear>
      </MovieInfo>
    </MovieCardContainer>
  );
}

export default MovieCard;
